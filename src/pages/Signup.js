import React from 'react'

function Signup() {
  return (
    <div className=' p-5 d-flex flex-column align-items-center'> <hi className="text-dark"> 
      <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/add-user-male.png" alt="add-user-male"/>  𝚂𝙸𝙶𝙽 𝙸𝙽
      </hi>
<hr></hr>
<form>

<div class="mb-3">
    <label for="Name" class="form-label">Name</label>
    <input type="Name" class="form-control" id="exampleInputname" aria-describedby="Name"/>
    
</div>



  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>



  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>


  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>

<div className='form-text p-2'>Have an account? 
    <a href="/Login"> Log in</a>
  </div>

</form>

    </div>
  )
}

export default Signup