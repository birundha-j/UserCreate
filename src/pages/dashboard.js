import react from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import CreateUser from "./createUser";
import DashboardContent from "./dashContent";
import UserList from "./userList";

import "./dashboard.css";

function DashboardPage (){
    return(
        <div className="dashBoardContainer">
            <div className="headerMenu">
                Welcome to create User
            </div>
            <main>
              <Route path="/dashboard/dashContent" component={DashboardContent} exact></Route>
              <Route path="/dashboard/createuser" component={CreateUser}></Route>
              {/* <Route path="/dashboard/userList" component={UserList}></Route> */}
            </main>
           
        </div>
    )
}

export default DashboardPage;