/*
A new custom route for our custom page.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import MyCustomPage from './components/MyCustomPage.jsx';
import UploadTemplate from './components/UploadTemplate.jsx';
import Register from './components/Register.jsx';
import ShareYourProject from './components/ShareYourProject.jsx';

Telescope.routes.add({name:"myCustomRoute", path:"/my-custom-route", component:MyCustomPage});
Telescope.routes.add({name:"UploadTemplate", path:"/uploadtemplate", component:UploadTemplate});
Telescope.routes.add({name:"Register", path:"/register", component:Register});
Telescope.routes.add({name:"ShareYourProject", path:"/share-your-project", component:ShareYourProject});
