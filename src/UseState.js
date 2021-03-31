import React, { useState } from 'react'

function UseState() {

    let [gender,changeGender] = useState(true);
    let [age,setAge] = useState(21);
    let [isLit,setLit] = useState(true);

        function changegender()
            {
                changeGender(!gender);
            }

        const changeage =()=>{
            setAge(++age);
        }

    return (
        <div className={`room ${isLit? "lit": "dark"}`}>
            <h2>We will now use the concept of use state</h2> 
           <b>Gender of applicant is {gender? "Male":"Female"}</b>  <br/>
           <b>Age of applicant after increment is:{age}</b> <br/>
            <button onClick={changegender}>Change Gender</button> <br/>
            <button onClick={changeage}>Increment Age</button> <br/>
            <button onClick={()=> setLit(!isLit)}>Change Light</button>
        </div>
    )
}

export default UseState
