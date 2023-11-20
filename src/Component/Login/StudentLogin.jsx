
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import reactRouterDom from 'react-router-dom';

function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    const history = useHistory();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/student/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                history.push('./home')
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    return (
        <div><Header/>
        <div className="container">
            
             <div className="row m-5">
                        <div className="col-md-8 m-auto border" style={{ backgroundColor: "white", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                            <div>
                                <h3 className="text-center ">STUDENT</h3>
                                <form noValidate>
                                    <div className="form-group">
                                        <label htmlFor="facRegId">Email</label>
                                        <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
                                           value={email}
                                           onChange={(event) => {
                                    setEmail(event.target.value);
                                         }}
          
                                         />
                                        <input type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordFacId">Password</label>
                                        <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
                                        <input type="text" />
                                    </div>
                                   

                                <button type="submit" className="btn btn-info btn-block" onClick={login}>Login</button>
                                </form>
                                <p className="text-center mt-2 ">Forgot Password</p>
                            </div>
                        </div>
                    </div>
                    
        </div>
        <div>
        <Footer/>
        </div>
        </div>
    )
   }
                                
                    

export default Login;
