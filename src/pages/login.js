import react, { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import InputField from "../component/inputs";
import LoginLogo from "../images/login.jpg"
import ValidationLibrary from '../component/validations';
import { EyeInvisibleOutlined,EyeOutlined } from "@ant-design/icons";

import './login.css'

function Login(){
    const history =useHistory()
    const [login,setlogin] = useState({
        username: {
            value: "", validation: [{ name: "required" }], error: null, errmsg: null,
        },
        password: {
            value: "", validation: [{ name: "required" }], error: null, errmsg: null,
        },
    })
    const [visible, setVisibility] = useState(false);
    const [invalidErr,setInvalidErr] = useState(false)

    const checkValidation = (data, key) => {
        setInvalidErr(false)
        var errorcheck = ValidationLibrary.checkValidation(
          data,
          login[key].validation
        );
        let dynObj = {
          value: data,
          error: !errorcheck.state,
          errmsg: errorcheck.msg,
          validation: login[key].validation,
        };
    
        setlogin((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    
      }

    const onLogin =() =>{
        var mainvalue = {};
        var targetkeys = Object.keys(login);
        for (var i in targetkeys) {
          var errorcheck = ValidationLibrary.checkValidation(
            login[targetkeys[i]].value,
            login[targetkeys[i]].validation
          );
          login[targetkeys[i]].error = !errorcheck.state;
          login[targetkeys[i]].errmsg = errorcheck.msg;
          mainvalue[targetkeys[i]] = login[targetkeys[i]].value;
        }
        var filtererr = targetkeys.filter((obj) => login[obj].error == true);
    
        if (filtererr.length > 0) {
        } else {
            if(login.username.value === "birundha" && login.password.value === "2606"){
                history.push("/dashboard/dashContent")
            }else{
                setInvalidErr(true)
            }
        }
    
        setlogin((prevState) => ({
            ...prevState,
           
        }));
    }

    return(
       <div className="loginContainer">
           <div className="loginpageContainer">
            <div className="login_header">Login To Create User</div>
            <div >
               <div className="insideContainer">
                   <div className="fieldContainers"><img src={LoginLogo} className="logoImage"/></div>
                <div className="fieldsShow_Container">
                    <div className="fieldsShow">
                        <label>User Name</label>
                        <InputField type={"text"}
                         onInput={(data) => checkValidation(data, "username")}
                         value={login.username.value}
                         error={login.username.error}
                         errmsg={login.username.errmsg}  />
                    </div>
                    <div  className="fieldsShow">
                        <label>Password</label>
                        <InputField type={visible ? "text" :"password"} 
                         onInput={(data) => checkValidation(data, "password")}
                         value={login.password.value}
                         error={login.password.error}
                         errmsg={login.password.errmsg} />
                         <div className="eyeIcon">
                         {visible ? <EyeOutlined onClick={()=>setVisibility(false)} /> : <EyeInvisibleOutlined  onClick={()=>setVisibility(true)} />}
                         </div>
                    </div>

                    <div className="fieldsShowBtn">
                        {/* <Link to="/dashboard/dashContent"> */}
                            <button className="btn_Show" onClick={onLogin}>Login</button>
                            {/* </Link> */}

                    </div>
                </div>
                {invalidErr && <div className="invalid_err">
                    <div>Invalid Username and password !!!</div>
                </div>}

               </div>

            </div>
           </div>
       </div>
    )
}

export default Login;