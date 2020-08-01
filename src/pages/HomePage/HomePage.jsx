import React, { Component } from 'react';

import WelcomeImage from '../../img/Welcome-Banner-educator-kids.jpg';

class HomePage extends Component {
  render() {
    return (
      <>
        <h2 className="page-title-home">
          Welcome to our incredible Phonebook App
        </h2>
        <div>
          <img className="welcome-img" src={WelcomeImage} alt="welcome_image" />
        </div>
      </>
    );
  }
}

export default HomePage;
