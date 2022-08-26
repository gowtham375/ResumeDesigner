import React from 'react';
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Signin } from '../signin/signin';

function Login() {

  function em(){
    var a = document.getElementById('mail').value;
    var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if( a == ''){
      Text = "Enter mail_ID";
      document.getElementById("paramail_login").innerHTML=Text;
      return false;
    }
    else if(!b.test(a)){
      Text = "Enter valid mail-ID";
      document.getElementById("paramail_login").innerHTML=Text;
      return false;
    }
    else{
      Text = "Ok";
      document.getElementById("paramail_login").innerHTML=Text;
      return false;
    }
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-lg-12 log_bg">
              <div className="login card">
                <form>
                  <fieldset>
                    <legend></legend>
                    <div className='col-lg-12 login1'>
                      <p className="para_log">
                        Login to your account
                      </p>
                    </div>
                    <div className='col-lg-12 login1'>
                      <label>E-Mail ID</label><br></br>
                    </div>
                    <div className='col-lg-12 login1'>
                      <input type="email" className="form-control" required placeholder="Enter email" id="mail" onKeyUp="em()"/><br></br>
                      <p id="paramail_login"></p>
                    </div>
                    <div className='col-lg-12 login1'>
                      <label>Password<span className="box"><a href="#">I forgot password</a></span></label><br></br>
                    </div>
                    <div className='col-lg-12 login1'>
                      <input type="password" className="form-control" required placeholder="Password" /><br></br>
                    </div>
                    <div className='col-lg-12 login1'>
                      <input type="checkbox" className="check" /><label htmlFor='check'>Remember me</label><br></br>
                    </div>
                    <div className='col-lg-12 login1 text-center'>
                      <Link to='/home'>
                      <button type="button"className="btn button_log mt-3">
                        Sign in
                      </button></Link>
                    </div>
                  </fieldset>
                </form>
                <div className="text-center text-white mt-4">
                  <Link to='/signin'>
                    <p>Don't have account yet?<a href="#">Sign in</a></p></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;