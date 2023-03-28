import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
class Contact extends React.Component {
    componentDidMount() {
        var staff_logo = document.getElementsByClassName('staff_logo');
        var staff_id = document.getElementsByClassName('staff_id');

        (function toggle(){
            for(let i = 0;i<staff_id.length;i++){
                staff_logo[i].addEventListener('click',()=>{
                    if(staff_id[i].style.display=="block"){
                        staff_id[i].style.display="none";
                        staff_logo[i].src = process.env.PUBLIC_URL + "/cutm/plus.png";
                        staff_id[i].style.margin  = '10px'; 
                    }else{
                        staff_id[i].style.display="block";
                        staff_logo[i].src = process.env.PUBLIC_URL + "/cutm/minus.png"
                    }
                })
            }
            
        })();
     
    }
    render() {
        var card = {
            borderRadius: "4px",
            border: "1px solid  #e6e3e3",
            transition: "0.3s",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
            backgroundColor: "white",
            fontSize: "18px"
        }
        var container = {
            padding: "2px 22px",
            textAlign: "justify"
        }
        var heading = {
            backgroundColor: "rgb(245, 242, 206)",
            padding: '2px',
            fontSize: '25px',
            fontFamily: 'Times New Roman',
            fontWeight: 'bold',
            margin: '0px'
        }
        var sub_head = {
            backgroundColor: 'rgb(252, 251, 235)',
            fontSize: '20px',
            fontWeight: 'bold'
        }
        var plus = {
            float: 'right'
        }
        var conH1={
        fontSize: '30px',
        /* font-size: 150%, */
        color:'white',
        borderLeft:'5px solid white',
        borderRight:'1px solid #C00404',
        borderTop:'1px solid #C00404',
        borderBottom:'1px solid #C00404',
        /* padding-left: 10px,  */
        padding: '0px 0px 8px 10px',
        fontWeight: 'bold',
        backgroundColor: '#C00404',
        borderRadius: '3px',
        transitionProperty: 'all',
        transitionTimingFunction: 'linear',
        transitionDuration: '1s'
       }
        return (
            <div>
                <Header/>
                <div style={card}>
                    <div style={container}>
                        <h1 style={conH1}>Contact</h1>
                        <p style={heading}> Address </p>
                        <span>
                            Centurion University <br />
                            Ramchandrapur  <br />
                            Jatni,Bhubaneswar <br />
                            Odisha - 752050 <br /><br />
                        </span>

                        <p style={heading}>  Parlakhemundi Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        Village Alluri Nagar, P.O. – R Sitapur, Via- Uppalada Paralakhemundi, Gajapati, Odisha, India – 761211 <br />
                            
                            Mobile  : +91 8260077222 <br />
                            
                        </span><br /><br />
                        
                        <p style={heading}>  Bhubaneswar Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        Ramchandrapur, P.O. – Jatni, Bhubaneswar, Khurda, Odisha, India – 752050 <br />
                            
                            Mobile  : +91 8260077222 <br />
                            
                        </span><br /><br />

                        <p style={heading}>  Rayagada Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        IDCO Industrial Area, Pitamahal, Rayagada, Odisha <br />
                            
                            Mobile  : +91 : 7008211184 | : 9861875762<br />
                            
                        </span><br /><br />
                        <p style={heading}>  Balangir Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        Behind BSNL office, IDCO land, Rajib Nagar, Balangir -767001<br />
                            
                            Mobile  : +91 06652-235641/235642/235644 | : csbs.bgr@cutm.ac.in <br />
                            
                        </span><br /><br />

                        <p style={heading}>  Balasore Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        At- Paikasta Po- Gopalpur Block- Bahanaga - 756044 <br />
                            
                        
                            
                        </span><br /><br />

                        <p style={heading}>  Chatrapur Campus  <img className="staff_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} alt="" width="30px" height="30px" /></p>
                        <span className="staff_id" style={{display:'none'}}>
                        Industrial Estate , Kaliabali Chhaka, CHATRAPUR Ganjam - 761045 <br />
                            
                          
                        </span><br /><br />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;