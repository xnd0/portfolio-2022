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

      <p>Here are links to some of my gitHub projects:</p>
      <div class="flex">
        <div class="app-card"> 1 xnd0/Team_Card_Generator_10.3 </div>
        <div class="app-card"> 2 xnd0/FigJam </div>
        <div class="app-card"> 3 xnd0/Find-Your-Pour </div>
        <div class="app-card"> 4 xnd0/No-Rona_App</div>
        <div class="app-card"> 5 https://github.com/xnd0/Tech_Showdown_21b</div>
        <div class="app-card"> 6 CmdLine_OrgChart_12.1</div>
        <div class="app-card"> 7 https://github.com/xnd0/Search_GoogleBooks_Api_21.4</div> 
      </div>
      <br></br>
      <div class="vertical-fade-reverse"></div>
    </div>
  );
}
