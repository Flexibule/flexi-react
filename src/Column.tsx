import React from 'react';

import classNames from 'classnames'

const Container = ({ children }) => {
  return (
    <div className='flexi-layout--column'>
      {children}
    </div>
  );
}

export default Container;