import React, { useEffect } from 'react';
import './App.css';

// @ts-ignore
import Video from './videos/video1.mp4';

const useApp = () => {
  useEffect(() => {
    console.log(window.Telegram.WebApp);
  }, [])
}

function App() {
  useApp();
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <video width="100%" height="100%" controls>
            <source src={Video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video>
      </header>
    </div>
  );
}

export default App;
