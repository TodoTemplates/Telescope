/*
A new custom page just for our app.
Browse to http://localhost:3000/my-custom-route to see it.
*/
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'


class TestComponent extends Component {
  render () {
    let OPTIONS = { endDate: '09/17/2016 11:59 PM', prefix: '' }

    return (
      <div>
        <Countdown options={OPTIONS} />
      </div>
    )
  }
}

const ShareYourProject = () => {
  return (
    <div className="container">
      <div className="giveaway-title">
        <h1>Todoist Premium Giveaway</h1>
        <h3>Share Your Todoist Project to Enter to Win</h3>
        <h4><TestComponent /></h4>
        <p>Our friends at Todoist have generously donated three PREMIUM subscriptions to the top three users <br />
        with the most popular project templates. All you have to do to enter is upload your Todoist project.</p><br />
        <img src="https://media.giphy.com/media/Ls6ahtmYHU760/giphy.gif" /><br />
        <br /><Telescope.components.PostsNewButton/><br />
        <p>Looking for some inspiration? <br />Check out some of the <a href="http://todotemplates.com/">latest projects here.</a></p>
      </div>
      <div className="container">
        <div className="countdown-body">
          <h5>Here's how it works.</h5>
          <p>Step 1.) <a href="http://todotemplates.com/register">Create an account</a> on To-Do Templates.</p>
          <p>Step 2.) <a href="http://todotemplates.com/uploadtemplate">Submit your Todoist project</a> by Saturday night.</p>
          <p>Step 3.) Get up-voted by others who like your project. We'll always give new projects a shoutout on <a href="https://twitter.com/todotemplates">Twitter</a>, but you can increase your chances of winning by sharing across your social networks.</p>
          <p>Step 4.) The top three projects with the most votes will receive a FREE year of Todoist Premium.</p>

          <p>*You can submit as many projects as you like. The contest ends at midnight (EST) on 9/17/2016. Winners will be notified via the To-Do Templates comment system.</p>
        </div>
      </div>

    </div>
  )
}

export default ShareYourProject;
