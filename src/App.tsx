import React from 'react';
import './App.css';

// @ts-ignore
import Video from './videos/video1.mp4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <video width="800px" height="800px" controls>
            <source src={Video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video>
      </header>
    </div>
  );
}

export default App;
