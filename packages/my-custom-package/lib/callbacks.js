import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

function validateURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
};

function cleanURL(originalURL) {
  var noTodoistURL = originalURL.replace('https://todoist.com/importFromTemplate?t_url=', '');
  var decodedURL = decodeURIComponent(noTodoistURL);
  var decodedURL2 = decodeURIComponent(decodedURL);

  return decodedURL2;
};

var makeObjects = function (header, rows) {
  return _.chain(rows)
  .map(function (row) {
    var newObject = {};
    for (var i = 0; i < row.length; i++) {
      if (header.length < i) {
        console.log('fatal error: column without field name');
      } else {
        var fieldName = header[i];
        newObject[fieldName] = row[i];
      }
    }

    return (0 === _.size(newObject)) ? null : newObject; // empty row? pass it through as null, which will be removed by the reject line below
  })
  .reject(function (item) { return null === item; })
  .value();
};

function csvToArray(csv, delimiter) {
  var reviver = function (row, column, value) { return value; };

  var chars = csv.split(''), c = 0, cc = chars.length, start, end, table = [], row;
  while (c < cc) {
    table.push(row = []);
    while (c < cc && '\r' !== chars[c] && '\n' !== chars[c]) {
      start = end = c;
      if ('"' === chars[c]) {
        start = end = ++c;
        while (c < cc) {
          if ('"' === chars[c]) {
            if ('"' !== chars[c+1]) { break; }
            else { chars[++c] = ''; } // unescape ""
          }
          end = ++c;
        }
        if ('"' === chars[c]) { ++c; }
        while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && delimiter !== chars[c]) { ++c; }
      } else {
        while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && delimiter !== chars[c]) { end = ++c; }
      }
      row.push(reviver(table.length - 1, row.length, chars.slice(start, end).join('')));
      if (delimiter === chars[c]) { ++c; }
    }
    if ('\r' === chars[c]) { ++c; }
    if ('\n' === chars[c]) { ++c; }
  }
  if (table.length > 1) {
    return makeObjects(table[0], table.slice(1));
  }

  return table;
};



function PostsNewAddPreview(post) {

  if (validateURL(post.url)) {
    var csvURL = post.url;
    var cleanedURL = cleanURL(csvURL);
    var csvData;

    csvDataresp = HTTP.call('GET', cleanedURL, {});

    csvData = csvDataresp.content;
    var objArray = csvToArray(csvData, ',');
    var strArray = objArray.map(function (item) {
      if (item.TYPE == 'task')
      return item.CONTENT;});

    var strArraynospc = strArray.filter(v=> v != '' && v != null);

    Posts.update(post._id, { $set: { preview: strArraynospc } });
  }
}

Telescope.callbacks.add('posts.new.async', PostsNewAddPreview);
Telescope.callbacks.add('posts.edit.async', PostsNewAddPreview);
