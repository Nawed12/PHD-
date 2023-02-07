import React from 'react';
import './news.css';

class News extends React.Component {
    render() {
        let card = {
            borderRadius: "4px",
            border: "1px solid  #e6e3e3",
            transition: "0.3s",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
            backgroundColor: "white",
            fontSize: "18px"
        }
        let container = {
            padding: "2px 22px",
            textAlign: "justify"
        }

        return (
            <div>

                <div style={card}>
                    <div style={container}>
                        <h1 className="news_head">Notice</h1>
                         
                    </div>
                  
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  
                          <a href="https://cutm.ac.in/research/phd-programme" target="_blank">Last date for registration is extended to 30 Nov 2022. </a></div> 
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  
                         <a href="https://cutm.ac.in/research/phd-programme" target="_blank"> LAST DATE FOR RECEIVING ONLINE APPLICATIONS IS 30th Nov 2022.</a> </div> 
                         
                    </div>
                    
                </div>
            </div >
        )
    }
}

export default News;
