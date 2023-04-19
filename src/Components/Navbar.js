import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Navbars=()=>
{
    return( 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="container">
      
      <a href="/" class="navbar-brand"><i class="fa fa-code me-2"></i>Sam</a>
      
      <button class="navbar-toggler" data-bs-target="#my-nav" data-bs-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
      
          <span class="navbar-toggler-icon"></span>
      
      </button>
      
      <div id="my-nav" class="collapse navbar-collapse">
      
      <ul class="navbar-nav ms-auto">
      
      <li class="nav-item active">
      
      <a class="nav-link" href="/"><i class="fas fa-home me-1"></i>Home</a>
      
      </li>
      
      <li class="nav-item active">
      
      <a class="nav-link" href="/add"><i class="fas fa-user-plus me-1"></i>Add User</a>
      
      </li>
      <li class="nav-item active">

          <a class="nav-link" href="#"><i class="fas fa-globe me-1"></i>About</a>
          
          </li>
          
          <li class="nav-item active">
          
          <a class="nav-link" href="#"><i class="fas fa-envelope me-1"></i>Contact</a>
          
          </li>
          
          </ul>
          
          </div>
          
          </div>
          
      </nav>
    );
}