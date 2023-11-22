import React, { useState } from 'react'
 import "../../styles/Form2.css";
import Footer from '../Footer';
import Header from '../Header';
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

  // const handleChange = (e) => {
  //   const {name, value}= e.target;
  //   setFormData({
  //     ...formData, [name] : value
  //   })
  // }
  
  
  const handleSubmit = (e) => {
    e.preventData()
    const validationErrors = {}

    
  }

  


    return (
      <form onSubmit={handleSubmit}>
      <div><Header/>
      <>
      <div className="cotainer">
        <h1>Centurion University Entrance Exam (Phd)</h1>
      </div>
     <div className="container3">
        <div className="container4">
        <div className="split-screen">
            <div className="left">
            </div>
            <div className="right">
            <form>
                <section className="copy">
                <h1>Application Form</h1>
                
                </section>
            <div className="user-details"  >
          <div className="input-box ">
            <span className ="details">Name</span>
            <input type="text" placeholder="Enter your name" required value={name}
            onChange={(event)=>
              {
              setName(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Mobile</span>
            <input type="tel" placeholder="Enter mobile number" required pattern='[0-9]{10}' value={mobile}
            onChange={(event)=>
              {
              setMobile(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required value={email}
            onChange={(event)=>
              {
              setEmail(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">City</span>
            <input type="text" placeholder="Enter your city" required value={city}
            onChange={(event)=>
              {
              setCity(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">State</span>
            <input type="text" placeholder="Enter your state" required value={state}
            onChange={(event)=>
              {
              setState(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Pincode</span>
            <input type="tel" placeholder="Confirm your pincode" required pattern='[0-9]{5}' value={pincode}
            onChange={(event)=>
              {
              setPincode(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span classNae="details">10th percentage</span>
            <input type="tel" placeholder="Enter your 10th %" required pattern='[0-9]{2}' value={tenth}
            onChange={(event)=>
              {
              setTenth(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">12th percentage</span>
            <input type="tel" placeholder="Enter your 12th %" required pattern='[0-9]{2}' value={twelveth}
            onChange={(event)=>
              {
              setTwelveth(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Graduation percentage</span>
            <input type="tel" placeholder="Enter your graduation %" required pattern='[0-9]{2}' value={graduation}
            onChange={(event)=>
              {
              setGraduation(event.target.value)
            }}/>
          </div>
          <div className="input-box ">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" required pattern='[0-9]{2}' value={password}
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
          <input type="submit" value="Apply" />
        </div>
            </form>
            </div>
        </div>
     </div>
     </div>


      </>
      <div><Footer/></div>
      </div>
      </form>
    );
  }
  
  export default Form;