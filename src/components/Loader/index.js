import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
  <div>
    <img
      style={{ width: 25, marginTop: 10 }}
      alt="Loader icon"
      src={loaderSrc} />
  </div>
);

export default Loader;
