import React from 'react';
import spacesurfer from './space-surfer.png'
import tcg from './img/teamcardgen.png'
import figjam from './img/figjam.png'
import gbooks from './img/booksearch.png'
import pour from './img/findpour.png'
import awty from './img/arewethereyet.png'
import orgchart from './img/orgchartgen.png'

export default function Home() {
  return (
    <div class="light-text center fade">

      <br></br>
      <h1>Hello</h1>
      <br></br>
      <p>My name is Xander.</p>
      <p>I am a Full Stack Developer.</p>
      <img src={spacesurfer} alt="spaceman surfing" />

      <p>Here are links to some of my gitHub projects:</p>
      <div class="flex">

      <a href="https://github.com/xnd0/CmdLine_OrgChart_12.1">
        <section class="app-card">
          <div class="app-title"> Command Line Org Chart Generator </div>
          
          <section>
            <div class="app-img app-card-content">
            <img src={orgchart} alt="orgchart generator screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            A command line orgchart generator - to manage an employee database. It uses Node.js, Inquirer, and MySQL.
            </p>
            
          </section>
        </section>
        </a>

        {/* <a href="https://supermarche-fromage-49994.herokuapp.com/"> */}
        <a href="https://github.com/xnd0/FigJam">
        <section class="app-card">
          <div class="app-title"> FigJam </div>
          <section>
            <div class="app-img app-card-content">
            <img src={figjam} alt="figjam app screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            A website for musical people - signup, login, post, browse, listen, & watch user's favorite music tracks and videos.
            </p>
          </section>
        </section>
        </a>

        {/* <a href="https://vast-headland-20181.herokuapp.com/"> */}
        <a href="https://vast-headland-20181.herokuapp.com/">
        <section class="app-card">
          <div class="app-title"> Custom GoogleBooks API Search </div>
          <section>
            <div class="app-img app-card-content">
            <img src={gbooks} alt="google booksearch screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            An app to search google books API - allows users to create an account to save titles for later. User must be logged in to save books to their account.
            </p>
          </section>
        </section>
        </a>

        <a href="https://fierce-wildwood-04718.herokuapp.com/">
        <section class="app-card">
          <div class="app-title"> Find Your Pour </div>
          <section>
            <div class="app-img app-card-content">
            <img src={pour} alt="find your pour screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            A website for wine professionals & enthusiasts - wineries may register and post information about their wines, to be displayed on the 'complete wine list'.
            </p>
          </section>
        </section>
        </a>

        {/* <a href="https://xnd0.github.io/Are_We_There_Yet_Adventure_App/"> */}
        <a href="https://github.com/xnd0/Are_We_There_Yet_Adventure_App">
        <section class="app-card">
          <div class="app-title"> Are We There Yet </div>
          <section>
            <div class="app-img app-card-content">
            <img src={awty} alt="are we there yet screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            An app for adventure - search by state to discover national parks and landmarks. Results are returned on the mainpage map. Save favorite places to remember for later.
            </p>
          </section>
        </section>
        </a>

        <a href="https://github.com/xnd0/Team_Card_Generator_10.3">
        <section class="app-card">
          <div class="app-title"> NodeJS Team Card Generator </div>
          <section>
            <div class="app-img app-card-content">
            <img src={tcg} alt="team card generator screenshot" class="app-img"/>
            </div>
            <p class="light-text">
            A command line application - to record employee information from a software engineering team and generate an HTML file that displays their info.
            </p>
          </section>
        </section>
        </a>

      </div>
      <br></br>
      <div class="vertical-fade-reverse"></div>
    </div>
  );
}
