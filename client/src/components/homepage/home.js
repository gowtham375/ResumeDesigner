import React from "react";
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Home(){
    
        var i = 0;
        var txt = ' ';
        var speed = 50;

        function typeWriter() {
        if (i < txt.length) {
        document.getElementsByClassName("heading_home").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }


    return(
        <>
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-lg-12 bg">
                        <div className="home_box card">
                            <div>
                                <h1 className="heading_home" onLoad={typeWriter()}>
                                    Design a standout<br></br>
                                    resume in minutes
                                </h1>
                            </div><br></br>
                            <div>
                                <h4 className="heading1_home">
                                    Edit here your ready-made<br></br>
                                    templates and custimize a resume<br></br> 
                                    that highlightes your unique strengths 
                                </h4>
                            </div><br></br>
                            <div>
                                <Link to='/temp1'>
                                <button className="btn btn-info button_home">
                                 Create your own resume <FontAwesomeIcon icon={faFilePen} className="icon_home"/> 
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}