import React, { Component, useEffect, useState } from 'react';
import './App.css';

import playIcon from './assets/images/play-button.svg';
import schoolBell from './assets/audio/school_bell.wav';
import constants from './constants';

const { styles: { flex, colors } } = constants;

const ControlButton = ( {
  onClick,
  value,
  icon,
  size,
} ) => {
  const localStyles = {
    container: {
      backgroundColor: 'transparent',
      height: `${size}vw`,
      width: `${size}vw`,
      border: 'none',
    },
  };

  return (
    <button style={localStyles.container} onClick={onClick}>
      <img src={icon} alt={value} />
    </button>
  );
};

const Controls = ( {
  onPlayClick,
} ) => {
  const localStyles = {
    container: {
      ...flex.centerFlexRow,
      justifyContent: 'space-around',
      width: '100%',
      height: '50%',
    },
  };

  return (
    <div style={localStyles.container}>
      <ControlButton size={24} onClick={() => null} value="Reset" />
      <ControlButton size={30} onClick={onPlayClick} value="Play" icon={playIcon} />
      <ControlButton size={24} onClick={() => null} value="Stop" />
    </div>
  );
};

const Navigation = ( { } ) => {
  const localStyles = {
    container: {
      ...flex.centerFlexRow,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: '#A7B7C3',
      height: '8%',
    },
  };

  return (
    <div style={localStyles.container}>
      <h1>Hi</h1>
    </div>
  );
};

const SecondsDisplay = ( { seconds } ) => {
  const localStyles = {
    container: {
      ...flex.centerFlexRow,
      height: '50%',
      width: '100%',
    },
    seconds: {
      ...flex.centerFlexRow,
      width: 250,
      height: 250,
      fontWeight: 'bold',
      fontSize: 150,
      color: colors.lightBlue,
      borderBottom: '6px solid #A7B7C3',
    },
  };

  return (
    <div style={localStyles.container}>
      <p style={localStyles.seconds}>
        {seconds}
      </p>
    </div>
  );
};

export default () => {
  const [seconds, setSeconds] = useState( 0 );
  const [interval, setInterval] = useState( null );

  // const countdown = () => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds - 1);
  //   }, 1000);
  //   return {
  //     stop: () => clearInterval(interval),
  //   };
  // };

  // useEffect( () => {
  //   setInterval( countdown() );
  // }, [] );

  // useEffect(() => {
  //   if ( seconds <= 0 ) {
  //     interval.stop();
  //   }
  // }, [seconds]);

  const localStyles = {
    container: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#123652',
    },
  };

  const handleOnPlay = () => {
    console.log( 'i get clicked' );
    const alarm = new Audio( schoolBell );
    alarm.play();
  };

  return (
    <div className="App" style={localStyles.container}>
      <SecondsDisplay seconds={seconds} />
      <Controls onPlayClick={handleOnPlay} />
      <Navigation />
    </div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="">
//           <div className="topheader">
//               <header className="container">
//                   <nav className="navbar">
//                       <div className="navbar-brand">
//                           <span className="navbar-item">PusherCoins</span>
//                       </div>
//                       <div className="navbar-end">
//                           <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Pusher.com</a>
//                       </div>
//                   </nav>
//               </header>
//           </div>
//           <section className="results--section">
//               <div className="container">
//                   <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
//               </div>
//               <div className="results--section__inner">
//                   <Today />
//                   <History />
//               </div>
//           </section>
//       </div>
//     );
//   }
// }

// export default App;