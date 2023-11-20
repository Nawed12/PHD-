import React, { useState } from 'react'
 import "../../styles/Form2.css";
import Footer from '../Footer';
import Header from '../Header';




function Form() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    matrik: '',
    highersecondary: '',
    graduation: '',
    email: '',
  })

  const handleChange = (e) => {
    const {name, value}= e.target;
    setFormData({
      ...formData, [name] : value
    })
  }
  const [mobile, setmobile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  
  const handleSubmit = (e) => {
    e.preventData()
    const validationErrors = {}
    if(!formData.name.trim()) {
      validationErrors.name = "name is required"
    }

    if(!formData.email.trim()) {
      validationErrors.name = "email is required"
    } else if(!/\S+@\S\.\S+/.test(formData.email)){
      validationErrors.email = "email is not valid"
    }

    if(!formData.mobile.trim()) {
      validationErrors.name = "mobile is required"
    } else if( formData.length != 10) {
      validationErrors.name = 'Please provide valid phone number'
      
 }

    if(!formData.city.trim()) {
      validationErrors.name = "city is required"
    }

    if(!formData.state.trim()) {
      validationErrors.name = "state is required"
    } else if(!/^[a-zA-Z\s]+$/.test(formData.state)){
      validationErrors.name = 'State must contain only letters and spaces';
    }

    if(!formData.pincode.trim()) {
      validationErrors.name = "pincode is required"
    }

    if(!formData.matrik.trim()) {
      validationErrors.name = "matrik mark is required"
    }

    if(!formData.highersecondary.trim()) {
      validationErrors.name = "highersecondary mark is required"
    }

    if(!formData.graduation.trim()) {
      validationErrors.name = "graduation mark is required"
    }
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
            <span className ="details">Name</span>
            <input type="text" placeholder="Enter your name" required onChange={handleChange}/>
          </div>
          <div className="input-box ">
            <span className="details">Mobile</span>
            <input type="number" placeholder="Enter mobile number" required maxLength="10" onChange={handleChange}/>
          </div>
          <div className="input-box ">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-box ">
            <span className="details">City</span>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="input-box ">
            <span className="details">State</span>
            <input type="text" placeholder="Enter your state" required />
          </div>
          <div className="input-box ">
            <span className="details">Pincode</span>
            <input type="number" placeholder="Confirm your pincode" required maxLength="5" />
          </div>
          <div className="input-box ">
            <span classNae="details">10th</span>
            <input type="number" placeholder="Enter your 10th mark" required />
          </div>
          <div className="input-box ">
            <span className="details">12th</span>
            <input type="number" placeholder="Enter your 12th mark" required />
          </div>
          <div className="input-box ">
            <span className="details">Graduation</span>
            <input type="number" placeholder="Enter your graduation" required/>
          </div>
          <div className="input-box ">
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
          </div>
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
