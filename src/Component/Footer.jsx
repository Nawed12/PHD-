import React from "react";
import Axios from 'axios';
class Footer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
         name : '',
         email : '',
         message : ''
      } 
    }
    getDate = (e)=>{
      var na = e.target.name;
      var val = e.target.value;
      this.setState({
        [na] : val
      })
    }
  
    validate=(event)=>{
       if(!(/(^[a-zA-Z])([\w\s]){2,}/.test(this.state.name))){
          alert('Enter a valid name');
          event.preventDefault();
        }else if(!(/(^[a-zA-Z0-9\_]+)\@([a-z]+)\.([a-z]+)$/.test(this.state.email))){
          alert('Enter a valid email');
          event.preventDefault();
        }else if(this.state.message==''){
          alert('Write suggestion/query');
          event.preventDefault();
        }
        else{
          Axios.post('http://localhost:8080/suggestion', { name: this.state.name, email: this.state.email, message: this.state.message}).then((response) => {
            console.log(response);
        })
        }
    }
    componentDidMount=()=>{
  
  
    }
    render(){
      return (
      <div>
        
  
  <footer>
             <div className="pic">
    
                 <img src={process.env.PUBLIC_URL+"/cutm/jamia.png"} alt="" height="120"/><br/><br/>
             </div>
          <div className="contact">
              <span className="about_us"> ADDRESS <span className="bor_bott"></span> </span> <br/>
              <img src={process.env.PUBLIC_URL+"/cutm/adress_icon.png"} alt="" height="20px" width="15px"/>
              <span className="address"> &nbsp;&nbsp;CENTURION UNIVERSITY OF  <br/>
                  &nbsp; &nbsp;&nbsp; &nbsp;TECHNOLOGY AND MANAGEMENT (CUTM), <br/>
                  &nbsp; &nbsp;&nbsp; &nbsp;Bhubaneswar, Dist: Khurda, <br/>
                  &nbsp; &nbsp;&nbsp; &nbsp;Odisha, India. </span>
              <hr/>
             
              <br/><br/>
          </div>
  
          <div className="link">
              <span className="important_link"> CONTACT  </span> <br/> 
              &nbsp;&nbsp; <span className="cutm_link"> 
                  <span className="call"> <img src={process.env.PUBLIC_URL+"/cutm/call.png"} alt="" height="" width="15px"/>
                      &nbsp; 
                  </span>
                  +91 82600 77222
                  </span> &nbsp;&nbsp;<br/>
              <hr/> 
              &nbsp;&nbsp; <span className="cuttm_link"> 
                  <span className="msg"> <img src={process.env.PUBLIC_URL+"/cutm/message.png"} alt="" height="" width="20px"/>
                      &nbsp;
                  </span>
                  cutm.ac.in
                  </span> &nbsp;&nbsp;<br/>
              <hr/>
              &nbsp;&nbsp; <a href="http:\\jmi.ucanapply.com" target="_blank"> <span className="cutm_link"> 
                <span className="social_media">
                  <a href="https://www.facebook.com/centurionuniversity" target="_blank"> <img id="fb" src={process.env.PUBLIC_URL+"/cutm/facebook.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                  <a href="https://twitter.com/CUTMIndia" target="_blank"> <img id="twrr" src={process.env.PUBLIC_URL+"/cutm/twitter.png"} alt="" height="30px" width="30px"/></a> &nbsp; &nbsp;
                  </span>    
              
              </span></a> &nbsp;&nbsp;
              <br/>
              <hr/>
               <br/>
  
          </div>
  
          <div className="suggestion">
              <span className="suggest"> SUGGESTION </span> <br/>
              <form onSubmit={this.validate}>
                  <input type="text" name="name" placeholder="Name" className="suggest_name" autoComplete="OFF" onChange={this.getDate}/> <br/>
                  <input type="email" name="email" placeholder="E-mail" className="suggest_email" autoComplete="OFF" onChange={this.getDate}/> <br/>
                  <textarea name="message" cols="19" rows="3" placeholder="Message" className="suggest_text" onChange={this.getDate}></textarea>
                  <input type="submit" className="suggest_submit"/>
              </form>
  
          </div>
  
          <div className="suggestion">
              <span className="suggest"> LOCATION </span> <br/>
             
              <iframe src="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Centurion university janti&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="250" width="550" style={{border:'0',borderRadius:'2px'}} allowfullscreen="" loading="lazy" ></iframe>
          </div><br/>
  
      </footer>     
  
       </div>
    )
  }
  }
  export default Footer;