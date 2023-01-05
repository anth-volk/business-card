// External imports
import React, { useState } from 'react';

// Internal imports
import './App.css';
import headshot from './img/headshot.png';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  function displaySettings() {};


  return (
    <main className="App">
      {isDarkMode === true && <div className="darkMode" />}
      <section className="ImageContainer">
        <img className="Headshot" src={headshot} alt="Anthony Volk seated in front of brown background"/>
      </section>
      <section className="InfoContainer">
        <div className="InfoHead">
          <h1>Anthony Volk</h1>
          <h2 className="InfoHead_position">Aspiring Fullstack Developer</h2>
          <a className="InfoHead_link" href="http://www.anthonyvolk.com" target="_blank" rel="noreferrer"><p>anthonyvolk.com</p></a>
          <div className="ButtonWrapper">
            <a className="ButtonEmail" href="mailto:anth.volk@gmail.com"><i class="fa-solid fa-envelope"></i><p>Email</p></a>
            <a className="ButtonLinkedIn" href="https://linkedin.com/in/anthonyvolk"><i class="fa-brands fa-linkedin"></i><p>LinkedIn</p></a>
          </div>
        </div>
        <div className="InfoBody">
          <h2>About Me</h2>
          <p>I'm an aspiring fullstack developer with an interest in ethical and just tech that empowers individuals and changes communities. I'm currently looking for full-time and freelance work where I can use my tech skills to make an impact.</p>
          <h2>Interests</h2>
          <p>Ethical tech and justice. Global history. Cultures and languages. Politics and society. Hiking and long walks. </p>
        </div>
        <div className="InfoFooter">
          <a className="ButtonFooter" href="https://github.com/anth-volk"><i className="fa-brands fa-square-github"></i></a>
          <a className="ButtonFooter" href="https://codesandbox.io/u/anth-volk"><i className="fa-regular fa-square"></i></a>
          <div className="ButtonFooter" onClick={displaySettings}><i className="fa-solid fa-gear"></i></div>
          <div className="SettingsMenu">
            <label className="switch">
              <input
                type="checkbox"
                aria-labelledby="App_themeLabel--dark"
                /*
                onChange={handleThemeChange}
                */
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
