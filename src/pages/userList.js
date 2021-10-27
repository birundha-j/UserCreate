import react, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import "./userList.css";

function UserList (props){
    const [userDetail,setUserDetail] = useState([])

useEffect(()=>{
    setUserDetail(props.rowData)
},[props.rowData])

const editRow = (val,id) =>{
    props.showTable(false)
    props.editUserRow(val,id)

}

    return(
        <div className="dashBoardContainer">
            <div className="tableContent">
              <table>
                  <tr>
                      <th className="table_Heading">FirstName</th>
                      <th className="table_Heading">DOB</th>
                      <th className="table_Heading">Designation</th>
                      <th className="table_Heading">Department</th>
                      <th className="table_Heading">EmailId</th>
                      <th className="table_Heading">Mobile</th>
                      <th className="table_Action">Action</th>

                  </tr>
                  {userDetail.map((val,index)=>{
                      return(
                          <tr>
                              <td>{val.fname}</td>
                              <td>{val.dob}</td>
                              <td>{val.designation}</td>
                              <td>{val.department}</td>
                              <td>{val.email}</td>
                              <td>{val.mobile}</td>
                              <td className="action_view">
                                <div onClick={()=>editRow(val,index)}>✎</div>
                                <div>🗑️</div>
                            </td>

                          </tr>
                      )
                  })}
              </table>
            </div>
            <div className="backBtn">
                <button className="cancelBtn" onClick={()=>props.showTable(false)}>back</button>
            </div>
        </div>
    )
}

export default UserList;