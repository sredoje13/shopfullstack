import React from 'react';
import { useState } from 'react';
function useCustommail() {
    const[istouched,setistouched]=useState(false)
    const[value,setvalue]=useState("")
   let validatedvalue=false
    const onChange=(e)=>{
       
     setvalue(e.target.value)
    }
    const onTouch=()=>{
        setistouched(true)
    }
    const restart=()=>{
        setistouched(false)
        setvalue('')
    }
    if(value.trim()!==""){
        validatedvalue=true
    }else {validatedvalue=false}
const error=istouched&&!validatedvalue


    return {

error:error,
onTouch:onTouch,
onChange:onChange,
value:value,
validatedvalue:validatedvalue,
restart:restart

    }
}

export default useCustommail;