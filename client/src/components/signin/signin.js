import React from "react";
import './signin.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Signin(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 sign1">
                    <div className="sign card">
                        <form>
                            <fieldset>
                                <div className="sign2 col-lg-12">
                                    <legend>Sign In Page</legend>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <label>First Name</label><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <input type="text" className="form-control" placeholder="Enter First Name" required size={40}/><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <label>Last Name</label><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <input type="text" className="form-control" placeholder="Enter Last Name" required size={40}/><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <label>Email</label><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <input type="email" className="form-control" placeholder="Mail-ID" required size={40}/><br></br>                    
                                </div>
                                <div className="sign2 col-lg-12">
                                    <label>Password</label><br></br>
                                </div>
                                <div className="sign2 col-lg-12">
                                    <input type="password" name="password" aria-describedby="emailHelp" required className="form-control" placeholder="Set Password" size={40}/><br></br>
                                </div>
                                <div  className="sign2 col-lg-12 text-center">
                                    <Link to='/'>
                                    <button type="button" className="btn bg-warning text-white">Create Account</button></Link>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>

            </div>

        </div>
        
        
        </>
    );
}
