import React from "react";
import linkedin from "../images/linkedin.jpg";
import chris from "../images/chris.jpg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <hr className="" style={{"background":"black"}}></hr>
      <div class="container">
        <div class="row " style={{"min-height":'80vh'}}>
          <div class="col  d-flex flex-column align-items-start justify-content-center">
            
                <h1>Wherever you<br></br>are, you are better<br></br>together</h1>
                <p>Virtual Office for remote teams</p>
                <Link to="/signup" class="btn btn-dark btn-lg fw-bold" type="submit">Signup for free</Link>


          </div>
          <div class="col  d-flex flex-column align-items-start justify-content-center">
            <img src={linkedin} className="img-fluid"  alt=""></img>
          </div>
        </div>
        <hr></hr>
      </div>

      <div class="container">
        <div class="row " style={{"min-height":'80vh'}}>
          <div class="col  d-flex flex-column align-items-start justify-content-center">

          <img src={chris} className="img-fluid"  alt=""></img>

          </div>
          <div class="col  d-flex flex-column align-items-start justify-content-center">
            <h1 className="fw-bold text-center" >Click to talk</h1>
            <ul>
                <li>Jump into audio rooms with a single click</li>
                <li>Securely Transmited using WebRTC</li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Home;
