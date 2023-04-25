import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='title'>logo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="socialMedia">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default Navbar