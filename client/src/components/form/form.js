import React from "react";
import './form.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

export function Form(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 form1">
                        <div className=" form2">
                            <form>
                                <fieldset>
                                    <div className="form3">
                                        <h1 className="text-center text-white">User Details</h1>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="First Name"/><br></br>
                                        </div> 
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Last Name"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-4 form3">
                                            <input type="text" className="form-control" placeholder="Mobile Number"/><br></br>
                                        </div>
                                        <div className="col-lg-4 form3">
                                            <input type="email" className="form-control" placeholder="Mail-ID"/><br></br>
                                        </div>
                                        <div className="col-lg-4 form3">
                                            <input type="text" className="form-control" placeholder="Linkedin"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="GitHub"/><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Address"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="College Name"/><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Place"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="School Name"/><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Place"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Certification"/><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <input type="file" className="form-control white" placeholder="Image"/><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Sports Achievements"/><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <input type="text" className="form-control" placeholder="Studies Achievements"/><br></br>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 form3">
                                        <textarea cols={12} rows={4} className="form-control" placeholder="Project"></textarea><br></br>
                                    </div>
                                    <div className="col-lg-12 form3">
                                        <textarea cols={12} rows={4} className="form-control" placeholder="Work Experience"></textarea><br></br>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-6 form3">
                                            <textarea cols={12} rows={6} className="form-control" placeholder="Technical Skills"></textarea><br></br>
                                        </div>
                                        <div className="col-lg-6 form3">
                                            <textarea cols={12} rows={6} className="form-control" placeholder="Soft Skills"></textarea><br></br>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-lg-4 form3">
                                            <textarea cols={12} rows={4} className="form-control" placeholder="Interest"></textarea><br></br>
                                        </div>
                                        <div className="col-lg-4 form3">
                                            <textarea cols={12} rows={4} className="form-control" placeholder="Hobbies"></textarea><br></br>
                                        </div>
                                        <div className="col-lg-4 form3">
                                            <textarea cols={12} rows={4} className="form-control" placeholder="Languages"></textarea><br></br>
                                        </div>
                                    </div>
                                </fieldset>
                            </form><br></br>
                            <div className="row">
                               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                                    <Link to='/temp1'>
                                    <button className="btn btn-primary">
                                        Switch Template<FontAwesomeIcon icon={faArrowsRotate} className="icon_form"/>
                                    </button></Link>
                               </div>
                               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                                    <button className="btn btn-primary">
                                        Template Preview<FontAwesomeIcon icon={faArrowsRotate} className="icon_form"/>
                                    </button>
                               </div>
                            </div>
                        </div> 

                    </div>

                </div>

            </div>


        </>
    );
}