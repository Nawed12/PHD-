import React from "react";
import { NavLink,Link } from "react-router-dom";
import {FloatButton} from "antd";
import {MessageFilled,UserAddOutlined} from "@ant-design/icons"
class Header extends React.Component{
    constructor(prop){
      super(prop);
    } 
    
    componentDidMount(){
      var menu_icon = document.getElementById("menu_icon");
    function menu_toggle(){
      var out_nav =  document.getElementById("out_nav");
      if(out_nav.style.display=="block"){
           out_nav.style.display="none";
           menu_icon.src = process.env.PUBLIC_URL+"./cutm/menu.png";
         }
         else{
           out_nav.style.display="block";    
           out_nav.style.position="relative";
           out_nav.style.top="-18px";
           menu_icon.src = process.env.PUBLIC_URL+"./cutm/cross_mark.png";
       }
    }
    
     
    var search_bar_width = ()=>{
      var s_bar = document.getElementById('search_bar');
      if(window.innerWidth > 840 && window.innerWidth < 1150 ){
        s_bar.style.width = 240+"px";
      }
      else{
       s_bar.style.width = window.innerWidth-1021+"px";
      }
    }
     setInterval(search_bar_width,100);
    menu_icon.addEventListener('click',menu_toggle);
  
  
  
  
    var menu_ani = document.getElementsByClassName('menu_ani');
    
    var out_nav =  document.getElementById("out_nav");
    for(let i = 0;i<menu_ani;i++){
      menu_ani[i].addEventListener('click',()=>{
        if(window.innerWidth<840){
        out_nav.style.display = 'none';
        menu_icon.src = process.env.PUBLIC_URL+"./cutm/menu.png";
        }
      })
    }
     
  
    var jmi_ani = document.getElementById('central');
  
    var jmi_str = "(Top Private University in Bhubaneswar)";
    var i = 0;
    var j = 0;
    jmi_ani.style.height = 10+"px";
    jmi_ani.style.color = "green";
    jmi_ani.textContent = "";
    function ani_end_jamia(){
      jmi_ani.textContent+=jmi_str[i];
       i++;
    }
    setInterval(()=>{
       if(i!=jmi_str.length-1){
         ani_end_jamia();
       }else{
         i = 0;
         jmi_ani.textContent = ""
        j++;
        if(j%2!=0){
          jmi_str = "   ()   ";
        }else{
          jmi_str = "   (Top Private University in Bhubaneswar)   ";
        }
       }
    },100)
    
  
  
    function search_google(){
       var search_text = document.getElementById('search_bar');
      if(search_text.value!=""){
  
         window.open("https://www.google.com/search?q=cutm+"+search_text.value,'_blank');
      } 
    }
   document.getElementById('srch_btn').addEventListener('click',search_google);
    
  
  }
  
  render(){
    return (
      <div>
            <header className='header'>
  
           <NavLink to="/">
          <img src={process.env.PUBLIC_URL+"/cutm/cutm.png"} className="jamia_logo"/>
        </NavLink>
  
         <img src={process.env.PUBLIC_URL+"/cutm/cutmlo.jpg"} className="cutm_logo"/>
       <NavLink to="/" style={{textDecoration:"none"}}>
       <h1 className="university_cutm"> <span> CENTURION &nbsp;UNIVERSITY </span> </h1> <br/>
       </NavLink>
        <h3 className="jamia_millia_islamia"> PHD DASHBOARD  <br/> <p id="central">(Top Private University in Bhubaneswar)</p> </h3>
  
  
        <li id="menu">
          <img src={process.env.PUBLIC_URL+"/cutm/menu.png"} alt="" id="menu_icon" height="30px" width="35px" /> 
          <span id="menu_text" > MENU </span>
         </li>
  <div className="out_nav" id="out_nav">
    
    <div className="nav">
  
  
  
  
      <ul>
        <li className="menu_ani"> <NavLink to="/"> HOME </NavLink> </li>
        <li className="menu_ani" id="abt"> <NavLink activeClassName="active_class" to="/about"> ABOUT  </NavLink>  </li>
        <li className="menu_ani" > <NavLink activeClassName="active_class" to="/news"> NEWS </NavLink>    </li>
        <li className="menu_ani"> <NavLink activeClassName="active_class" to="/placement"> PLACEMENT </NavLink>  </li>
        
  
        
        <li className="menu_ani"> <NavLink activeClassName="active_class" to="/gallery"> GALLERY </NavLink> </li>
        <li className="menu_ani"> <NavLink activeClassName="active_class" to="/contact"> CONTACT </NavLink> </li>
        <li> <input type="search" placeholder="Search" className="search_bar ml-auto" id="search_bar"/>  </li>
        <li>  <input type="button" className="submit_button" id="srch_btn" /> </li>
       <li> <a href="#" className="arrow"> LOGIN </a> 
              <div className="sub"> 
                <ul>
                     <NavLink activeClassName="active_class menu_ani" to="/AdminLogin"> Admin </NavLink>
                     <NavLink activeClassName="active_class menu_ani" to="FacultyLogin">Faculty </NavLink>
                     <NavLink activeClassName="active_class menu_ani" to="StudentLogin">Student </NavLink>
                     
                </ul>
               </div>
               </li>
      </ul>
    </div>
  </div>
  
  
  </header>


  <div className="float">
    <Link to="/registraion">
      <FloatButton
      icon={<UserAddOutlined/>}
      style={{width:100, height:80,  right:10,top:190}}
      shape="square"
      tooltip="Registration"
      description="Registration"
      type="primary"
      />
      </Link>
      </div>

  
      </div>




    )
  
  
  
    }
  }

 

  export default Header;