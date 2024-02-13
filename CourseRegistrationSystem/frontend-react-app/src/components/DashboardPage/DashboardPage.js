import React,{useState,useEffect}  from "react";
import bg1 from './bg-2.jpg';
import {useNavigate, useLocation} from 'react-router-dom';
import axios from "axios";

const Firstpage = () => {
    const location = useLocation();
    console.log("Information ==> " + location.state);

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
    const navigate = useNavigate();
    const signUp = () => navigate("/firstPage", { replace: true });
    const showAllStudentList = () => navigate("/showAllStudentPage", { replace: true });

    let [studentId, setStudentId] = useState("");
    let [name, setName] = useState("");
    let [gender, setGender] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [degree, setDegree] = useState("");
    let [institute, setInstitute] = useState("");
    let [gpa, setGpa] = useState("");
    let [passingYear, setPassingYear] = useState("");
    let [address, setAddress] = useState("");

    const hd = { 
        'id': location.state,
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

    useEffect(() => {
        for(let a=0; a<information.length; a++){
            if(information[a].id===location.state){
                setStudentId(information[a].studentId);
                setName(information[a].name);
                setGender(information[a].gender);
                setPhone(information[a].phone);
                setEmail(information[a].email);
                setDegree(information[a].degree);
                setInstitute(information[a].institute);
                setGpa(information[a].gpa);
                setPassingYear(information[a].passingYear);
                setAddress(information[a].address);
                break;
            }
        }
    }, []);

    console.log(">>> " + studentId);
    const previous = () => navigate("/LoginPage", { replace: true });

    const UPDATEURL = "http://localhost:8080/api/student/update";
    console.log("URL ++> " + UPDATEURL);


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
                                                fetch(UPDATEURL,{
                                                    method: "PUT",
                                                    body: JSON.stringify(hd),
                                                    headers:{
                                                        'Content-Type': 'application/json'
                                                    }
                                                })
                                                .then((response) => {
                                                    alert("Data Update Successfully")
                                                 })
                                                .catch((error) => {
                                                    alert("Server connection error")
                                                });
                                            }else{
                                                alert("Invalid Data. Fill Up All.");
                                            }
                                        }} className="button-style1 m-2" > Update </button>

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