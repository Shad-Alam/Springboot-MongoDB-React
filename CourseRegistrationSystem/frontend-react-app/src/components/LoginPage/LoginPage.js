import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Firstpage = () => {
    // get all data
    useEffect(() => {
        axios.get(
            `http://localhost:8080/api/student/get/all`
        )
        .then((response) => {
           console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

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

    return (
        <div className="container1" id="page-1">
            <div className="m-4">
            <form>
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
                <input id="passingYear" value={passingYear} onChange={e => setPassingYear(e.target.value)} type="text" placeholder="Enter passingYear"/>
                </label>
        
        
                <label className="m-2">
                <input id="address" value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Enter address"/>
                </label>
            </form>
                {/* Insert Data  */}
                <button onClick={(e)=>{
                    e.preventDefault();
                    fetch('http://localhost:8080/api/student/add',{
                        method: "POST",
                        body: JSON.stringify(hd),
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    });
                }} className="m-2" > Sign Up </button>
            </div>
        </div>
    );
}

export default Firstpage;