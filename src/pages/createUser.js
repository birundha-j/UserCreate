import react, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import InputField from "../component/inputs";
import ValidationLibrary from '../component/validations';
import UserList from "./userList";
import "./createUser.css";

function CreateUser (){
const history = useHistory()
const [userDetail,setUserDetails] = useState({
    fname: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    lname: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    dob: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    qualification: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    city: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    country: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    designation: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    department: {
        value: "", validation: [{ name: "required" }], error: null, errmsg: null,
    },
    email: {
        value: "", validation: [{ name: "required" },{name:"email"}], error: null, errmsg: null,
    },
    mobile: {
        value: "", validation: [{ name: "required" },{name:"mobilenumber"}], error: null, errmsg: null,
    },
    
})

const [showTable,setshowTable] =useState(false)
const [rowData,setRowData] =useState([])

  
const checkValidation = (data, key) => {
    var errorcheck = ValidationLibrary.checkValidation(
      data,
      userDetail[key].validation
    );
    let dynObj = {
      value: data,
      error: !errorcheck.state,
      errmsg: errorcheck.msg,
      validation: userDetail[key].validation,
    };

   

    setUserDetails((prevState) => ({
        ...prevState,
        [key]: dynObj,
    }));

  }

  const createUser = () =>{
    var mainvalue = {};
    var targetkeys = Object.keys(userDetail);
    for (var i in targetkeys) {
      var errorcheck = ValidationLibrary.checkValidation(
        userDetail[targetkeys[i]].value,
        userDetail[targetkeys[i]].validation
      );
      userDetail[targetkeys[i]].error = !errorcheck.state;
      userDetail[targetkeys[i]].errmsg = errorcheck.msg;
      mainvalue[targetkeys[i]] = userDetail[targetkeys[i]].value;
    }
    var filtererr = targetkeys.filter((obj) => userDetail[obj].error == true);

    let list = {
        fname :userDetail.fname.value,
        lname :userDetail.lname.value,
        dob :userDetail.dob.value,
        qualification :userDetail.qualification.value,
        city :userDetail.city.value,
        country :userDetail.country.value,
        designation :userDetail.designation.value,
        department :userDetail.department.value,
        email :userDetail.email.value,
        mobile :userDetail.mobile.value,

    }
    setRowData([...rowData,list]);


    if (filtererr.length > 0) {
       
    } else {
        setshowTable(true)
    }

    setUserDetails((prevState) => ({
        ...prevState,
       
    }));
  }

  const editUserRowFunc =(val,id)=>{
      console.log(val,id,"dfghk")

    // if(true){
    //     userDetail.fname.value = val.fname,
    // userDetail.lname.value = val.lname,
    // userDetail.dob.value = val.dob,
    // userDetail.qualification.value = val.qualification,
    // userDetail.city.value = val.city,
    // userDetail.country.value = val.country,
    // userDetail.designation.value = val.designation,
    // userDetail.department.value = val.department,
    // userDetail.email.value = val.email,
    // userDetail.mobile.value = val.mobile
    // }

    setUserDetails((prevState) => ({
        ...prevState,
       
    }));
  }

  const ShowTableFun =(data)=>{
    setshowTable(data)
  }

    return(
        <>
        {!showTable ? <div className="FieldContainer">
           <div className="userInfo"> 
                <div className="center">
                    <div className="inputContainer" >
                        <div className="fieldsShow">
                            <label>First Name</label>
                            <InputField type={"text"} 
                             onInput={(data) => checkValidation(data, "fname")}
                             value={userDetail.fname.value}
                             error={userDetail.fname.error}
                             errmsg={userDetail.fname.errmsg} />
                        </div>
                        <div className="fieldsShow">
                            <label>Qualification</label>
                            <InputField type={"text"}
                            onInput={(data) => checkValidation(data, "qualification")}
                            value={userDetail.qualification.value}
                            error={userDetail.qualification.error}
                            errmsg={userDetail.qualification.errmsg}  />
                        </div>
                     </div>
                     <div className="inputContainer" >
                        <div className="fieldsShow">
                            <label>Last Name</label>
                            <InputField type={"text"}
                            onInput={(data) => checkValidation(data, "lname")}
                            value={userDetail.lname.value}
                            error={userDetail.lname.error}
                            errmsg={userDetail.lname.errmsg}  />
                        </div>
                        <div className="fieldsShow">
                            <label>Designation</label>
                            <InputField type={"text"} 
                            onInput={(data) => checkValidation(data, "designation")}
                            value={userDetail.designation.value}
                            error={userDetail.designation.error}
                            errmsg={userDetail.designation.errmsg} />
                        </div>
                     </div>
                     <div className="inputContainer" >
                        <div className="fieldsShow">
                            <label>DOB</label>
                            <InputField type={"date"}
                            onInput={(data) => checkValidation(data, "dob")}
                            value={userDetail.dob.value}
                            error={userDetail.dob.error}
                            errmsg={userDetail.dob.errmsg}  />
                        </div>
                        <div className="fieldsShow">
                            <label>Department</label>
                            <InputField type={"text"} 
                            onInput={(data) => checkValidation(data, "department")}
                            value={userDetail.department.value}
                            error={userDetail.department.error}
                            errmsg={userDetail.department.errmsg} />
                        </div>
                     </div>
                     <div className="inputContainer" >
                        <div className="fieldsShow">
                            <label>City</label>
                            <InputField type={"text"} 
                            onInput={(data) => checkValidation(data, "city")}
                            value={userDetail.city.value}
                            error={userDetail.city.error}
                            errmsg={userDetail.city.errmsg} />
                        </div>
                        <div className="fieldsShow">
                            <label>EmailId</label>
                            <InputField type={"text"} 
                            onInput={(data) => checkValidation(data, "email")}
                            value={userDetail.email.value}
                            error={userDetail.email.error}
                            errmsg={userDetail.email.errmsg} />
                        </div>
                     </div>
                     <div className="inputContainer" >
                        <div className="fieldsShow">
                            <label>Country</label>
                            <InputField type={"text"} 
                            onInput={(data) => checkValidation(data, "country")}
                            value={userDetail.country.value}
                            error={userDetail.country.error}
                            errmsg={userDetail.country.errmsg} />
                        </div>
                        <div className="fieldsShow">
                            <label>Mobile Number</label>
                            <InputField type={"number"}
                            onInput={(data) => checkValidation(data, "mobile")}
                            value={userDetail.mobile.value}
                            error={userDetail.mobile.error}
                            errmsg={userDetail.mobile.errmsg}  />
                        </div>
                     </div>
                     <div className="userBtn_create">
                        <button className="createBtn_show" onClick={createUser}>Create</button>
                         <button className="cancelBtn">Cancel</button>
                     </div>
                   
                </div>
           </div>

        </div>
    :
    <UserList rowData={rowData} editUserRow={(val,id)=>editUserRowFunc(val,id)} showTable={(data)=>ShowTableFun(data)}/>
}
</>
    )
}

export default CreateUser;