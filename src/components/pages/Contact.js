import React from 'react';
import spacesurfer from './space-surfer.png'

export default function Contact() {
  return (
    <div class="light-text center fade">
      <div class="vertical-fade"></div> 

      <br></br>
      <h1>Contact</h1>
      <br></br>
      <h5>For resume or other inquiries, please send requests to:</h5>
      <br></br>
      <p>
        <h3>xdrcode@gmail.com</h3>
      </p>
      <br></br>
      <img src={spacesurfer} alt="spaceman surfing" />
      <div class="vertical-fade-reverse"></div>
    </div>
  );
}
