import { useEffect } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./pages/login";
import DashboardPage from "./pages/dashboard";
import CreateUser from "./pages/createUser";
import DashboardContent from "./pages/dashContent";
import UserList from "./pages/userList";


import './App.css';

function App() {

  // useEffect(()=>{
  //   fetch('https://d481b96d-2cb7-4c7b-8428-ffb1b82fc670.mock.pstmn.io/login')
  // .then(response => response.json())
  // .then(data => console.log(data,"test"));
  // },[])

  return (
    <Router>
    <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/dashboard" component={DashboardPage}/>
        <Route path="/dashboard/dashContent" component={DashboardContent}/>
        <Route path="/dashboard/createuser" component={CreateUser}/>
  </Switch>
    </Router>
  );
}

export default App;

