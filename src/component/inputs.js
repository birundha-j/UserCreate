import React from 'react';
import "./inputs.css"

export default function InputField(props) {
  
    return (
        // <form className={classes.root} noValidate autoComplete="off">
        <div>
            <input
                id={"outlined-basic"}
                variant={"outlined"}
                type={props.type}
                className={`${props.error && "brdred"}  ${props.background && "change_clr"} brdrcls`}
                id={props.name ? props.name : "InputBox"}
                onChange={(e) => props.onInput(e.target.value, props.name)}
                label={props.inputlabel}
                defaultValue=""
                error={props.error}
                errmsg={props.errmsg}
                value={props.value}
                disabled={props.disableds}
               />
            {<div className="Errormsg">
                <div>{props.error && props.errmsg}</div>
            </div>}
        </div>
        // </form>
    );
}

// autoComplete="off"
// InputProps={{
//     endAdornment: <InputAdornment position="end">{props.adorment}</InputAdornment>,
//     readOnly: props.readOnly&&true 
// }}
// inputProps={{
//     maxLength: props.maxLength
// }} 
// onBlur={props.onblur}
