import react from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function DashboardContent (){
    return(
        <div className="dashBoardContainer">
            <div className="MiddleContent">
              <div className="Content">
                  <div> we want to welcome  to the user creation website.Do you want to create user click to create !!!</div>
                  <div className="createBtn">
                    <Link to="/dashboard/createuser"><button className="createBtn_show">Add User</button></Link>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default DashboardContent;