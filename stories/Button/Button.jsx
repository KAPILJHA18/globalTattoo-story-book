import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  prefix,
  suffix,
  backgroundColor,
  ...props
}) => {
  const classes = [
    'sb-button',
    `sb-button--${variant}`,
    `sb-button--${size}`,
  ].join(' ');

  return (
    <button
      type="button"
      className={classes}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {prefix && <span className="sb-button__icon sb-button__icon--prefix">{prefix}</span>}
      <span className="sb-button__label">{label}</span>
      {suffix && <span className="sb-button__icon sb-button__icon--suffix">{suffix}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
