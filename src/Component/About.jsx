import React from 'react'
import $ from 'jquery'


class About extends React.Component {
  componentDidMount = () => {

    $('.history ul li:even').css({ 'background-color': 'rgb(250,250,250)', 'padding': '10px' });
    $('.history ul li:odd').css({ 'background-color': 'rgb(245,245,245)', 'padding': '10px' });
    $('.history li span').css({ 'display': 'block', 'font-size': '25px', 'font-weight': 'bold' });
    $('.history li').css({ 'list-style-type': 'none' })
    $('.history div').css({ 'position': 'relative', 'right': '18px' })

    
    var history_id = document.getElementById('history_id');
    var history_logo = document.getElementById('history_logo');
  
    function toggle() {
      if (history_id.style.display == "block") {
        history_id.style.display = "none";
        history_logo.src = process.env.PUBLIC_URL + "/cutm/plus.png";
        history_id.style.margin = '10px';
      } else {
        history_id.style.display = "block";
        history_logo.src = process.env.PUBLIC_URL + "/cutm/minus.png"
      }
    } 
    history_logo.addEventListener('click',toggle);


}






render() {
  let card = {
    borderRadius: "4px",

    transition: "0.3s",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "2%",
    fontSize: "18px",
    // backgroundImage: "url('https://lh3.googleusercontent.com/pw/AMWts8C8u84H0o8VQrZKl6q2wdzeXZJhdhBWhEc-NLyFiccy8jx3CABhR02Xq14VGDeWKmpSYmPOh-WYWwa6ojBQVXfLfbtb0qEvv6bluBWWbeGPTNHt_AathLubDGgn_yb9RzG1fzq7fUGNn4isyAyFuFuseA=w1346-h686-no')",
    backgroundColor:'black',
    backgroundPosition: 'left,right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
  
  }
  let container = {
    padding: "2px 22px",
    textAlign: "justify",
    color: 'white'
  }
  var plus = {
    float: 'right',
    color: 'white',
    backgroundColor: 'white',
    borderRadius: '4px',
    position: 'relative',
    top: '10px'
  }

  return (
    <div>
      {/* About , */}

      <div style={card}>
        <div className="back">
          <div style={container}>
            <h2 style={{ fontSize: '30px', color: '#008000', borderLeft: '5px solid #008000', borderBottom: '5px solid #008000', paddingLeft: '10px' }}><b>About </b></h2>
            <p style={{ color: 'white' }}>
            Students in our PhD programs are encouraged from day one to think of this experience as their first job – a training ground for a challenging and rewarding career generating rigorous, relevant research that influences theory, practice and policy.
            By joining a PhD Program, you will set yourself up for success. You’ll have support and opportunities throughout your research degree. This will enable you to:
            </p>
            <ul style={{ color: 'white' }}>
              <b>
                <li>access a breadth of expertise from across the University </li>
                <li>place your research in a broader multidisciplinary context</li>
                <li> consider your research from the perspective of other disciplines</li>
                <li>develop professional skills to enhance your career prospects</li>
                <li> improve your research and communication skills to become an accomplished researcher</li>
              </b>
            </ul>
          </div>
        </div>
      </div>

      {/* Vission */}
      <div style={card}>
        <div style={container}>
          <h2 style={{ fontSize: '25px', color: '#008000', color: '#008000', borderLeft: '5px solid #008000', paddingLeft: '10px' }}><b>vission</b></h2>
          <p style={{ fontFamily: 'Brush Script MT', fontSize: '30px' }}>
            To become a premier quality institute converting available manpower into highly skilled
            technical professionals capable of serving with education, expertise, and human concern.
         </p>
        </div>
      </div>

      {/* Mission */}
      <div style={card}>
        <div style={container}>
          <h2 style={{ fontSize: '25px', color: '#008000', color: '#008000', borderLeft: '5px solid #008000', paddingLeft: '10px' }}><b>Mission</b></h2>
          <p style={{ fontFamily: 'Brush Script MT', fontSize: '30px' }}>
            To become a future ready institute that prepares our learners to be life ready, work ready and world ready, fulfilling following core values : <br />
            Self Discipline <br />
            Personal Integrity <br />
            Care and Concern <br />
            Responsibility <br />
            Professional Excellence

          </p>
        </div>
      </div>



      <div style={card} className="history">
        <div style={container}>

          <div className="at_a_glance">
            <h1 style={{ color: "lightblue", textAlign: 'center', textShadow: '1px 1px 1px black' }}>OVERVIEW <img id="history_logo" style={plus} src={process.env.PUBLIC_URL + "/cutm/plus.png"} width="30px" height="30px" alt="" /></h1>
          </div>


          <ul style={{ color: 'white',display:'none' }} id="history_id">
          Candidates can align themselves with one of the 25 multidisciplinary research centers that have been promoted by the University.


            <tr>Computational Mathematics</tr>
            <tr>Communication Technologies</tr>
            <tr>Center for Smart Infrastructure</tr>
            <tr>Center for Manufacturing</tr>
            <tr>Center for Fintech</tr>
            <tr>Center for Drug Design and Delivery</tr>
            <tr>Center for Phyto Pharma</tr>
            <tr> Center for Smart Agriculture and Allied Sector</tr>
            <tr>Center for Innovation and Entrepreneurship</tr>
            <tr>Center for Agriculture Production</tr>
            <tr>Center for Data Sciences</tr>
            <tr>Center for AI and Robotics</tr>
            <tr>Center for Bioelectronics</tr>
            <tr>Center for Chip Making</tr>
            <tr>center for e-mobility solutions</tr>
            <tr>Center for Space and Earth Sciences</tr>
            <tr>Center for New Material Applications</tr>
            <tr>Center for Genetics and Genomics</tr>
            <tr>Center for Medical Diagnostics</tr>
            <tr>Center for Governance and Sustainable Societies</tr>
            <tr>Center for Waste to Wealth Management</tr>
            <tr>Center for 3DS Applications</tr>
            <tr>Center for Waste to Wealth Management</tr>
            <tr>Center for Digital Manufacturing</tr>
            <tr>Center for Lasers</tr>
            


           
          </ul>




        </div>

      </div>



    </div>
  )
}
}

export default About;