import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Firstpage = () => {
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [degree, setDegree] = useState("");
    const [institute, setInstitute] = useState("");
    const [gpa, setGpa] = useState("");
    const [passingYear, setPassingYear] = useState("");
    const [address, setAddress] = useState("");

      const hd = { 
        'studentId': studentId,
        'name': name,
        'gender': gender,
        'phone': phone,
        'email': email,
        'degree': degree,
        'institute': institute,
        'gpa': gpa,
        'passingYear': passingYear,
        'address': address
    };

    console.log(">>> " + studentId);
    const navigate = useNavigate();
    const previous = () => navigate("/LoginPage", { replace: true });

    return (
        <div className="container1" id="page-1">
            <main className="main1 justify-content-center align-items-center">
                <section className="m-5">
                    <div className="row g-2 justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="card p-3">
                                <form className="justify-content-center align-items-center">
                                    <label className="m-2">
                                    <input id="studentId" value={studentId} onChange={e => setStudentId(e.target.value)} type="text" placeholder="Enter student ID"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="gender" value={gender} onChange={e => setGender(e.target.value)} type="text" placeholder="Enter gender"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Enter phone"/>
                                    </label>
                            
                            
                                    <label className="m-2">
                                    <input id="email" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter email address"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="degree" value={degree} onChange={e => setDegree(e.target.value)} type="text" placeholder="Enter degree"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="institute" value={institute} onChange={e => setInstitute(e.target.value)} type="text" placeholder="Enter university name"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="cgpa" value={gpa} onChange={e => setGpa(e.target.value)} type="text" placeholder="Enter cgpa"/>
                                    </label>
                            
                                    <label className="m-2">
                                    <input id="address" value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Enter address"/>
                                    </label>

                                    <label className="m-2">
                                    <input id="password" value={passingYear} onChange={e => setPassingYear(e.target.value)} type="password" placeholder="Enter password"/>
                                    </label>
                                    
                                </form>

                                <div className="btn-group">
                                        {/* Insert Data  */}
                                        <button onClick={(e)=>{
                                            e.preventDefault();
                                            if(hd.name.length>0 && hd.gender.length>0 && hd.gpa.length>0 && hd.institute.length>0 && hd.passingYear.length>0 && hd.phone.length>0 && hd.studentId.length>0 && hd.address.length>0 && hd.degree.length>0){
                                                fetch('http://localhost:8080/api/student/add',{
                                                    method: "POST",
                                                    body: JSON.stringify(hd),
                                                    headers:{
                                                        'Content-Type': 'application/json'
                                                    }
                                                })
                                                .then((response) => {
                                                    alert("Data Insertion Successfully")
                                                 })
                                                .catch((error) => {
                                                    alert("Server connection error")
                                                });
                                            }else{
                                                alert("Invalid Data. Fill Up All.");
                                            }
                                        }} className="button-style1 m-2" > Sign Up </button>

                                        <button onClick={previous} className="button-style2 m-2" > Previous </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Firstpage;