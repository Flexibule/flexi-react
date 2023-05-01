import React from 'react';
import classNames from 'classnames'

const Button = ({ className, children, type }) => {
  return (
    <button className={classNames(
      className,
      'flexi-button',
      `flexi-button--${type}`
    )}>
      {children}
    </button>
  );
}

export default Button;
