import React from "react";
import "./Styles/login.css";
function Login() {

  function loginCheck(){
     
  }

  function signupCheck(){

  }


  return (
    <div className="container">
     
      <div className="lsp row">
        <div className="login">
          <form>
            <h4> Login </h4>
            <br></br>
            <input  placeholder="Email" required="" />
            <br></br>
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <br></br>
            <button className="btn btn-primary" onClick={loginCheck}>Login</button>
          </form>
        </div>
      <hr></hr>
      <p>New customer ? </p>
        <div className="signup col">
          <form>
            <h4>Sign UP</h4>
            <br></br>
            <input type="text" name="txt" placeholder="User name" required="" />
            <br></br>
            <input  name="email" placeholder="Email" required="" />
            <br></br>
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              />
              <br></br>
            <button className="btn btn-primary" onClick={signupCheck}>Sign up</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
