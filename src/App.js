// External imports
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiCropSquare, mdiEmail } from '@mdi/js';

// Internal imports
import './App.css';
import headshot from './resources/headshot.png';
import vcard from './resources/vcard.vcf';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  function displaySettings() {
    setIsSettingsOpen(prevState => !prevState);
  };

  function handleThemeChange() {
    setIsDarkMode(prevState => !prevState);
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
      <main className={`App ${isDarkMode ? "darkMode" : ""}`}>
        <section className={`ImageContainer ${isSettingsOpen ? "blurred" : ""}`}>
          <img className="Headshot" src={headshot} alt="Anthony Volk seated in front of brown background"/>
        </section>
        <section className="InfoContainer">
          <div className={`InfoHead ${isSettingsOpen? "blurred" : ""}`}>
            <h1>Anthony Volk</h1>
            <h2 className="InfoHead_position">Aspiring Fullstack Developer</h2>
            <a className="InfoHead_link" href="http://www.anthonyvolk.com" target="_blank" rel="noreferrer"><p>anthonyvolk.com</p></a>
            <div className="ButtonWrapper">
              <a className="ButtonEmail" href="mailto:anth.volk@gmail.com"><i class="fa-solid fa-envelope"></i><p>Email</p></a>
              <a className="ButtonLinkedIn" href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i><p>LinkedIn</p></a>
              <a className="ButtonVCF" href={vcard}><i class="fa-solid fa-address-card"></i><p>Add as contact...</p></a>
            </div>
          </div>
          <div className={`InfoBody ${isSettingsOpen ? "blurred" : ""}`}>
            <h2>About Me</h2>
            <p>I'm an aspiring fullstack developer with an interest in ethical and just tech that empowers individuals and changes communities. I'm currently looking for full-time and freelance work where I can use my tech skills to make an impact.</p>
            <h2>Interests</h2>
            <p>Ethical tech and justice. Global history. Cultures and languages. Politics and society. Hiking and long walks. </p>
          </div>
          <div className="InfoFooter">
            <a className="ButtonFooter" href="https://github.com/anth-volk"><i className="fa-brands fa-square-github"></i></a>
            <a className="ButtonFooter" href="https://codesandbox.io/u/anth-volk"><i className="fa-regular fa-square"></i></a>
            <div className="ButtonFooter" onClick={displaySettings}><i className="fa-solid fa-gear"></i></div>
            <div className={`SettingsMenu ${isSettingsOpen ? "" : "hidden"}`}>
              <h2 className="SettingsHeader">Settings</h2>
              <div className="SettingsControls">
                <p className="SettingsText">Light Mode</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    value={isDarkMode}
                    onChange={handleThemeChange}
                  />
                  <span className="slider"></span>
                </label>
                <p className="SettingsText">Dark Mode</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

}

export default App;
