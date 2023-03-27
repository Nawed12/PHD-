// import React, { useState } from 'react'
//  import "../styles/Form.css";
// // import "../photo/cutm2.jpg";




// function Form() {

//   const[name,setName]=useState('')
//   const[mobile,setMobile]=useState('')
//   const[email,setEmail]=useState('')
//   const[city,setCity]=useState('')
//   const[state,setState]=useState('')
//   const[pincode,setPincode]=useState('')
//   const[tenth,setTenth]=useState('')
//   const[twelveth,setTwelveth]=useState('')
//   const[graduation,setGraduation]=useState('')
//   // const[preferences,setPreferences]=useState('')

// const handleClick=(e)=>{
//   e.preventDefault()
//   const student={name,mobile,email,city,state,tenth,twelveth,graduation}
//   console.log(student)
//   fetch("http://localhost:58422/student/add",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify(student)
//   }).then(()=>{
//     console.log("New student is added")
//   })
// }
    
//     return (
//       <>
//       <div className="cotainer">
//         <h1>Centurion University Entrance Exam (Phd)</h1>
//       </div>
//      <div className="container">
//         <div className="container1">
//         <div className="split-screen">
//             <div className="left">
//                <section className="copy">
//                 <h1>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT</h1>
//                </section>
//             </div>
//             <div className="right">
//             <form>
//                 <section className="copy">
//                 <h1>Application Form</h1>
                
//                 </section>
//             <div className="user-details"  >
//           <div className="input-box ">
//             <span className ="details">Your Name</span>
//             <input type="text" placeholder="Enter your name" required value={name} onChange={(e)=>setName(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">Mobile</span>
//             <input type="text" placeholder="Enter mobile number" required value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span classNae="details">Email</span>
//             <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">City</span>
//             <input type="text" placeholder="Enter your city" required value={city} onChange={(e)=>setCity(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">State</span>
//             <input type="text" placeholder="Enter your state" required value={state} onChange={(e)=>setState(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">Pincode</span>
//             <input type="text" placeholder="Confirm your pincode" required value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span classNae="details">10th</span>
//             <input type="text" placeholder="Enter your 10th mark" required value={tenth} onChange={(e)=>setTenth(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">12th</span>
//             <input type="text" placeholder="Enter your 12th mark" required value={twelveth} onChange={(e)=>setTwelveth(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">Graduation</span>
//             <input type="text" placeholder="Enter your graduation" required value={graduation} onChange={(e)=>setGraduation(e.target.value)}/>
//           </div>
//           <div className="input-box ">
//             <span className="details">Perferences </span>
//             <select type="text" name="languages" id="lang"> 
//         <option value="javascript">JavaScript</option>
//         <option value="php">PHP</option>
//         <option value="java">Java</option>
//         <option value="golang">Golang</option>
//         <option value="python">Python</option>
//         <option value="c#">C#</option>
//         <option value="C++">C++</option>
//         <option value="erlang">Erlang</option>
//       </select>
//           </div>
//           </div>
//           <div class="input-container cta">
//             <label class="checkbox-container"></label>
//             <input type="checkbox"></input>
//             <span class="checkmark"></span>
//             I understand, Once the form is Submitted, I wont be able to edit information provided in the form
//           </div>
        
    
//         <div class="button">
//           <input type="submit" value="Apply" onClick={handleClick}/>
//         </div>
//             </form>
//             </div>
//         </div>
//      </div>
//      </div>


//       </>
     
//     );
//   }
  
//   export default Form;
