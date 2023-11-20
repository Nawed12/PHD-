import React, { useState } from 'react';
//  import "../styles/Form.css";
 import "../../styles/Form2.css";
 import Footer from '../Footer';
 import Header from '../Header';
// import "../photo/cutm2.jpg";
import axios from "axios";
function Form() {
  const[name,setName]=useState('')
  const[mobile,setMobile]=useState('')
  const[email,setEmail]=useState('')
  const[city,setCity]=useState('')
  const[state,setState]=useState('')
  const[pincode,setPincode]=useState('')
  const[tenth,setTenth]=useState('')
  const[twelveth,setTwelveth]=useState('')
  const[graduation,setGraduation]=useState('')
  const[password,setPassword]=useState('')
  // const[preferences,setPreferences]=useState('')

  async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/student/save", 
        {  
        name: name,
        mobile : mobile,
        email : email,
        city : city,
        state : state,
        pincode : pincode,
        tenth : tenth,
        twelveth : twelveth,
        graduation : graduation,
        password:password
        });
          alert("User Registation Successfully");
          
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

  //  return (
  //   <div className="register-container">
 
  //       <form className="register-form" onSubmit={handleSubmit}> 
  //       <br></br>      
  //       <h1>Register</h1>
  //       <p>Fill in the Information Below</p>

    
    return (
     <div><Header/>
      <>
      <div className="cotainer">
        <h1>Centurion University Entrance Exam (Phd)</h1>
      </div>
     <div className="container">
        <div className="container1">
        <div className="split-screen">
            <div className="left">
               <section className="copy">
                <h1>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT</h1>
               </section>
            </div>
            <div className="right">
            <form>
                <section className="copy">
                <h1>Application Form</h1>
                
                </section>
            <div className="user-details"  >
          <div className="input-box ">
            <span className ="details">Your Name</span>
            
            <input type="text" placeholder="Enter your name" value={name}
            onChange={(event)=>
            {
              setName(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Mobile</span>
            <input type='number' placeholder="Enter mobile number" id='mobile' value={mobile}
            onChange={(event)=>
              {
              setMobile(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span classNae="details">Email</span>
            <input type="email" placeholder="Enter your email"  id='email' value={email}
            onChange={(event)=>
              {
              setEmail(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">City</span>
            <input type="text" placeholder="Enter your city"  id='city' value={city}
            onChange={(event)=>
              {
              setCity(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">State</span>
            <input type="text" placeholder="Enter your state" id='state' value={state}
             onChange={(event)=>
              {
              setState(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Pincode</span>
            <input type="number" placeholder="Confirm your pincode"  id='pincode' value={pincode}
            onChange={(event)=>
              {
              setPincode(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span classNae="details">10th</span>
            <input type="number" placeholder="Enter your 10th mark" id='tenth' value={tenth}
             onChange={(event)=>
              {
              setTenth(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">12th</span>
            <input type="number" placeholder="Enter your 12th mark"  id='twelveth' value={twelveth}
            onChange={(event)=>
              {
              setTwelveth(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Graduation</span>
            <input type="number" placeholder="Enter your graduation" id='graduation' value={graduation}
            onChange={(event)=>
              {
              setGraduation(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter Password" id='password' value={password}
            onChange={(event)=>
              {
              setPassword(event.target.value)
            }}/>
          </div>
          {/* <div className="input-box ">
            <span className="details">Perferences </span>
            <select type="text" name="languages" id="lang"> 
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
          </div> */}
          </div>
          <div class="input-container cta">
            <label class="checkbox-container"></label>
            <input type="checkbox"></input>
            <span class="checkmark"></span>
            I understand, Once the form is Submitted, I wont be able to edit information provided in the form
          </div>
        
    
        <div class="button">
          <input type="submit" onClick={save} value="Apply" /*onClick={handleClick} *//>
        </div>

        {/* <button type="submit">Register</button> */}

        </form>
            
            </div>
        </div>
     </div>
     </div>

      </>
      <div><Footer/></div>
      </div>
     
    );
  }
  
  export default Form;
