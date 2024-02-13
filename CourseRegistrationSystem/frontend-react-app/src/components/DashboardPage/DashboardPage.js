import React from "react";
import './Dashboard.css';
import bg1 from './bg-2.jpg';
import {useNavigate} from 'react-router-dom';

const Firstpage = () => {
    const navigate = useNavigate();
    const signUp = () => navigate("/firstPage", { replace: true });
    const showAllStudentList = () => navigate("/showAllStudentPage", { replace: true });

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
                                        <input type="text" className="form-control input-style1" id="username" placeholder="enter username"/>
                                    </div>

                                    <div className="row mb-3 justify-content-center align-items-center">
                                        <input type="password" className="form-control input-style1" id="password" placeholder="enter password"/>
                                    </div>
                                    <div className="text-center justify-content-center align-items-center">
                                        <button id="calculate" className="mt-3 button-style1" type="button"> Log In </button>
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