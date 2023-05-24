import React from 'react'

function Login() {
  return (
    <div className='p-5 d-flex flex-column align-items-center'> <h1 className='text-dark'>
<img width="37" height="37" src="https://img.icons8.com/material-outlined/24/login-rounded-right.png" alt="login-rounded-right"/>  𝙻𝙾𝙶𝙸𝙽 
  
</h1>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label ">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" class="btn btn-dark">Submit</button>

  <div className='form-text p-2'>Don't have an account? 
    <a href="/Signup"> Signup</a>
  </div>
  
</form>



    </div>
  )
}

export default Login