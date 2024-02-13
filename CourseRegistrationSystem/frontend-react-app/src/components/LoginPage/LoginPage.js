import React,{useState,useEffect}  from "react";
import './LoginPage.css';
import bg1 from './bg-2.jpg';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Firstpage = () => {
    const [information, setInformation] = useState([]);
    // get all data
    useEffect(() => {
        axios.get(
            `http://localhost:8080/api/student/get/all`
        )
        .then((response) => {
            setInformation(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signUp = () => navigate("/firstPage", { replace: true });

    return (
        <div className="container2" id="">
            <main className="main1 justify-content-center align-items-center">
                <section className="m-5">
                    <div className="row g-2">
                        <div className="col-lg-6 col-md-12">
                            <div className="card border-0 h-100" >
                                <div className="card-body">
                                    <img src={bg1} className="w-100 h-100" alt="..."/>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-6 col-md-12">
                            <div className="card border-0 h-100 justify-content-center align-items-center">
                                <form className="p-3 justify-content-center align-items-center">
                                    <div className="mb-3 row wrap-style">
                                        <h1 className="text-style1"> UMS </h1>
                                    </div>

                                    <div className="row mb-3 justify-content-center align-items-center">
                                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control input-style1" id="username" placeholder="enter student id"/>
                                    </div>

                                    <div className="row mb-3 justify-content-center align-items-center">
                                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control input-style1" id="password" placeholder="enter password"/>
                                    </div>
                                    <div className="text-center justify-content-center align-items-center">
                                        <button onClick={()=>{
                                            console.log(information);
                                            let uname = "", pass = "";
                                            for(let a=0; a<information.length; a++){
                                                uname = information[a].studentId;
                                                pass = information[a].passingYear;
                                                if(uname===username && password===pass){
                                                    navigate("/dashboardPage", {state: information[a].id});
                                                    break;
                                                }
                                            }
                                        }}  id="calculate" className="mt-3 button-style1" type="button"> Log In </button>
                                        <button onClick={signUp} className="mt-3 button-style2" type="button"> Sign Up </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Firstpage;