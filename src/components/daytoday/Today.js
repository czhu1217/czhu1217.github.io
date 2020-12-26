import React from 'react';
import './today.css'

const Today = () => {

      let today = new Date().getDay();
        if (today === 0 || today === 6){
          // eslint-disable-next-line
        return <p className='today'>Have a great Weekend! 🍺</p>;
      } else if (today === 1) {
        // eslint-disable-next-line
        return <p className='today'>Have a great Monday! ☕️</p>;
      } else if (today === 2) {
        // eslint-disable-next-line
        return <p className='today'>Have a great Tuesday! ☕️</p>;
      } else if (today === 3) {
        // eslint-disable-next-line
        return <p className='today'>Have a great Wednesday! 🎧</p>;
      } else if (today === 4) {
        // eslint-disable-next-line
        return <p className='today'>Have a great Thursday! ☕️</p>;
      } else if (today === 5) {
        // eslint-disable-next-line
        return <p className='today'>Have a great Friday! 🎉</p>;
      }
};

export default Today;