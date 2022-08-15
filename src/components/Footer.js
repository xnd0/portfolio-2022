import React from 'react';
import gitLogo from './githubLogo.png';
import emailLogo from  './email-logo.png';


export default function Footer() {
    return (
        <div class="light-text center footer">
          <div>
            <img class="logo"src={gitLogo} alt="gitHub cat logo"/> <a href="https://github.com/xnd0"> https://github.com/xnd0</a>
          </div>
          <br></br>
          <div>
          <img class="logo"src={emailLogo} alt="email envelope logo"/> 
           <a href="mailto:xdrcode@gmail.com">xdrcode@gmail.com</a>
          </div>
          <div class="vertical-fade"></div>
        </div>
    )
};
