// External imports
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiCropSquare, mdiEmail, mdiCardAccountDetails, mdiChevronDown } from '@mdi/js';

// Internal imports
import './App.css';
import headshot from './resources/headshot.png';
import vcard from './resources/vcard.vcf';

function App() {

  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  function displaySocials() {
    setIsSocialsOpen(prevState => !prevState);
  };

  window.addEventListener("resize", () => {
    setDeviceWidth(window.innerWidth);
  });

  // If user using large device, like desktop, 
  // indicate that website not available
  if (deviceWidth > 991) {
    return (
      <main>
        <p>This webpage is currently only optimized for mobile use. Please switch to a mobile browser to continue.</p>
      </main>
    );
  }

  else {
    return (
      <main className="App">
        <img className="Headshot" src={headshot} alt="Anthony Volk seated in front of brown background"/>
        <section className="InfoContainer">
          <div className="InfoHead">
            <h1>Anthony Volk</h1>
            <h2 className="InfoHead_position">Aspiring Fullstack Developer</h2>
            <a className="InfoHead_link" href="http://www.anthonyvolk.com" target="_blank" rel="noreferrer"><p>anthonyvolk.com</p></a>
            <div className="ButtonWrapper">
              <a className="ButtonVCF btn btn--primary" href={vcard}>
                <Icon
                  path={mdiCardAccountDetails}
                  size={1}
                />
                <p>Add contact</p>
              </a>
              <button 
                className="ButtonSocials btn btn--secondary"
                onClick={displaySocials}
              >
                <p>Connect</p>
              <Icon
                  path={mdiChevronDown}
                  size={1}
              />
              </button>
            </div>
            <div className={`SocialsButtonsWrapper ${isSocialsOpen ? "" : "hidden"}`}>
              <a className=" btn btn--secondary" href="mailto:anth.volk@gmail.com">
                <Icon 
                  path={mdiEmail}
                  size={1}
                />
              </a>
              <a className=" btn btn--secondary" href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noreferrer">
                <Icon
                  path={mdiLinkedin}
                  size={1}
                />
              </a>
              <a className=" btn btn--secondary" href="https://github.com/anth-volk" target="_blank" rel="noreferrer">
                <Icon
                  path={mdiGithub}
                  size={1}
                />
              </a>
              <a className="btn btn--secondary" href="https://codesandbox.io/u/anth-volk" target="_blank" rel="noreferrer">
                <Icon
                  path={mdiCropSquare}
                  size={1}
                />
              </a>
            </div>
          </div>
          <div className="InfoBody">
            <h2>About Me</h2>
            <p>I'm an aspiring fullstack developer with an interest in ethical and just tech that empowers individuals and changes communities. I'm currently looking for full-time and freelance work where I can use my tech skills to make an impact.</p>
            <h2>Interests</h2>
            <p>Ethical tech and justice; global history; cultures and languages; politics and society; hiking and long walks </p>
          </div>
        </section>
      </main>
    );
  }

}

export default App;
