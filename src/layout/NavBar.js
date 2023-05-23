import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-white ">
  <div class="container ">
    

    <a class="navbar-brand fw-bold" href="#">
    <img width="50" height="50" src="https://img.icons8.com/quill/50/bot.png" alt="bot"/>
    𝙍𝙊𝘽𝙊𝙈𝙀𝙀𝙏 </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-3">
        <li class="nav-item">
          <Link to="/" class="nav-link active fw-bold" aria-current="page" href="#">HOME</Link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active fw-bold" href="#">NEWSLETTER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-bold" href="#" tabindex="-1" aria-disabled="true">USE CASES</a>
        </li>
      </ul>
      <form class="d-flex">
        <Link to="/login" class="btn btn-dark btn-lg fw-bold" type="submit">LOGIN</Link>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default NavBar