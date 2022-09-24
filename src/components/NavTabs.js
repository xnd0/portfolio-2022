import React from 'react';
import spacesurfer from './pages/space-surfer.png'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="center nav-bg-color header">
      {/* <div class="logo"> */}
      {/* <img class="logo"src={spacesurfer} alt="spaceman surfing" /> */}
      {/* </div> */}
      <div class="light-text">
        <img class="logo" src={spacesurfer} alt="spaceman surfing" /> The xnd0 gitHub portfolio page <img class="logo" src={spacesurfer} alt="spaceman surfing" />
      </div>
      <ul className="nav nav-tabs center">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>

        {/* <li className="nav-item">
          <a
            href="#contactform"
            onClick={() => handlePageChange('ContactForm')}
            // Check to see if the currentPage is `ContactForm`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
          >
            Contact Form
          </a>
        </li> */}

      </ul>

      {/* <div class="vertical-fade fade"></div> */}
    </div>
  );
}

export default NavTabs;
