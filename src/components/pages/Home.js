import React from 'react';
import spacesurfer from './space-surfer.png'

export default function Home() {
  return (
    <div class="light-text center">
      <div class="vertical-fade"></div>
      <br></br>
      <h1>Hello</h1>
      <br></br>
      <p>My name is Xander.</p>
      <p>I am a Full Stack Developer.</p>
      <img src= {spacesurfer} alt="spaceman surfing"/>
    {/* <br></br> */}
    </div>
  );
}
