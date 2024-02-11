import {useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Axios from 'axios';

function getValue(id){
    let value = document.getElementById(id).value;
    return value;
}

const Firstpage = () => {
    const navigate = useNavigate();

    const STUDENT_API_BASE_URL = "http://localhost:8080/api/student/add";

    
    const save = () => {
        // let studentId = getValue("studentId");
        // let name = getValue("name");
        // let gender = getValue("gender");
        // let phone = getValue("phone");
        // let email = getValue("email");
        // let degree = getValue("degree");
        // let institute = getValue("institute");
        // let cgpa = getValue("cgpa");
        // let passingYear = getValue("passingYear");
        // let address = getValue("address");
        // console.log(name);

        // // let info = `{
        // //         "studentId":"${studentId}",
        // //         "name":"${name}",
        // //         "gender":"${gender}",
        // //         "phone":"${phone}",
        // //         "email":"${email}",
        // //         "degree":"${degree}",
        // //         "institute":"${institute}",
        // //         "gpa":"${cgpa}",
        // //         "passingYear":"${passingYear}",
        // //         "address":"${address}"
        // //     }
        // // `;
        // Axios.post(STUDENT_API_BASE_URL, info);

        // console.log("OK");
        // alert("Great Shot!");
    }

    return (
        <div className="container1" id="page-1">
            <div className="m-4">
            <form>
                <label className="m-2">
                <input id="studentId" type="text" placeholder="Enter student ID"/>
                </label>
        
                <label className="m-2">
                <input id="name" type="text" placeholder="Enter your name"/>
                </label>
        
                <label className="m-2">
                <input id="gender" type="text" placeholder="Enter gender"/>
                </label>
        
                <label className="m-2">
                <input id="phone" type="text" placeholder="Enter phone"/>
                </label>
        
        
                <label className="m-2">
                <input id="email" type="text" placeholder="Enter email address"/>
                </label>
        
                <label className="m-2">
                <input id="degree" type="text" placeholder="Enter degree"/>
                </label>
        
                <label className="m-2">
                <input id="institute" type="text" placeholder="Enter university name"/>
                </label>
        
                <label className="m-2">
                <input id="cgpa" type="text" placeholder="Enter your cgpa"/>
                </label>
        
                <label className="m-2">
                <input id="passingYear" type="text" placeholder="Enter passingYear"/>
                </label>
        
        
                <label className="m-2">
                <input id="address" type="text" placeholder="Enter university ID"/>
                </label>
        
                <button onClick={save} className="m-2" > Save </button>
                <button className="m-2"> Update </button>
                <button className="m-2"> Show All </button>
            </form>
            </div>
        </div>
    );
}

export default Firstpage;