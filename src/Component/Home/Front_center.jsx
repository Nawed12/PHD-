import React from 'react';
import '../../App2.css';
import "../../styles/Home2.css";
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
function Front_center(){
    return(
      <div>
        <Header/>
        <div className="image_home">
  
     
  <div className="pic1">   </div> 
  <div className="pic2">   </div> 
  <div className="pic3">   </div> 
  <div className="pic4">   </div> 
  <div className="pic5">   </div> 
  
  
  </div>
  
  
  <div className="messages">
  
  <div className="content_of_message">
   {/* <span className="message_heading">VICE-CHANCELLOR'S MESSAGE <br/></span> */}
   <strong>Centurion University of Technology and Management (CUTM), Bhubaneswar</strong> is the first Multi-Sector Private State University in Odisha established by Odisha Act 4 of 2010. Centurion University has pioneered a unique model for delivering Industry aligned Skill Integrated Higher Education. This model has been widely recognized globally by United Nations, World Bank, Niti Ayog, Central and State Governments as well as leading firms such as EY.

Centurion University is the only university in India to be recognized as a Center of Excellence for its School of Vocational Education and Training (Gazette No. F. SD-17/123/2019-SA/MSDE). The diverse student body, top-notch faculty from across India and abroad, industry partnerships and industrial facilities on campus ensure that Centurion University delivers on student aspirations, Employability, Entrepreneurship and/or Higher Studies. Centurion University has two campuses which are as follows:
<br />
<ul>
  <li>
Centurion University of Technology and Management, Paralkhemundi – Read more 
</li>
<br />
<li>
Centurion University of Technology and Management, Visakhapatnam – Read more
</li>
</ul>
  </div>
  
  <div className="home" style={{ backgroundColor:'grey' }}>
      <div className="headerContainer">
        <h1> Ph.D Programme </h1>
        <p> Give yourself an edge in this competitive world. Join a multidisciplinary PhD Program to enrich your research experience. The University’s PhD Programs provide the chance to work with others who share a passion for discovering new knowledge and push disciplinary boundaries.</p>
        <Link to="/registraion">
          <button> APPLY NOW </button>
        </Link>
      </div>
    </div>
  
  </div>
  <Footer/>
      </div>
    )
  }
  
  export default Front_center;
