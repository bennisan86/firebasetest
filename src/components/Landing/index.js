import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Landing = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>LANDING: I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);
export default Landing;