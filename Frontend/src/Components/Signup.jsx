import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaLock, FaRegEye, FaUser  } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";




export function Signup () {

    const navigate = useNavigate();  

    const [name, setName] = useState("");   
    const [username, setUsername] = useState("");   
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");   
    const [show, setshow] = useState(false);  

    return (<>

<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-48">




                <div className="flex justify-center mb-4">
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 mr-2"
					id="fname"
					placeholder="First Name"
                    onChange={(e)=>{setName(e.target.value)}}
				/>
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 ml-2"
					id="lname"
					placeholder="Last Name"
                   
				/>
			    </div>

                <div className="w-full relative mb-4">
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="uname"
					placeholder="Username"
                    onChange={(e)=>{setUsername(e.target.value)}}
				/>
				<FaUser
					
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>

            <div className="w-full relative mb-4">
				<input
					type="email"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="email"
					placeholder="Email Address"
                    onChange={(e)=>{setEmail(e.target.value)}}
				/>
				<FaEnvelope
				
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>
			<div className="w-full relative mb-4">
				<input
					type="pass"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="pass"
					placeholder="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
				/>
				<FaLock
				
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>
    
        
            <button
            onClick={ async () => {

                await axios.post ("http://localhost:3099/user/signup" , {
                    username : username, 
                    Email : email,
                    Password : password,
                    Name : name
                
                })
                .then((res) => {   
                    console.log(res.data);   
                    alert(res.data.msg);  
                    localStorage.setItem("token", res.data.token);   
                   navigate("/dashboard");      
                 })
				 .catch((err) => {
					console.log(err);
					alert("Something went wrong");  
				 }); 
                
                     }} 
				
				className="bg-gray-700 py-4 px-10 text-white hover:bg-opacity-95 mt-4"
			>
				Register 
			</button>

            </div>

    
    
    
    </>); 
}

