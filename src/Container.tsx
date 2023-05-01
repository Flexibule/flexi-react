import React from 'react';

const Container = (props) => {
  return (
    <div className='flexi-layout'>
      {props.children}
    </div>
  );
}

export default Container;

