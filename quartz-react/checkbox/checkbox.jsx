// http://quartz.vhx.tv/styleguide/all#guide--style-checkbox
"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

const Checkbox = ({ name, checked, onChange, label, size, type }) => {
  const toggleView = (
    <span className='checkbox--contain'>
      <span className='checkbox--icon' />
      <span className='checkbox--circle'>
        <i className='circle-top'><span /></i>
        <i className='circle-bottom'><span /></i>
      </span>
      {label &&
        <span className='checkbox--label'>{label}</span>
      }
    </span>
  );

  const standardView = (
    <span className='checkbox--contain'>
      <span className='checkbox--icon'>
        <span className='checkbox--animate' />
      </span>
      {label &&
        <span className='checkbox--label'>{label}</span>
      }
    </span>
  );

  const classes = classNames({
    'checkbox': true,
    [size]: size,
    'alt': type === 'toggle',
  });

  return (
    <fieldset className={classes}>
      <input type='checkbox' onChange={onChange} name={name} id={name} defaultChecked={checked} />
      <label htmlFor={name} className='ready'>
        {type === 'toggle' ? toggleView : standardView}
      </label>
    </fieldset>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
  checked: false,
  size: 'medium',
  type: null,
  onChange() {},
};

export default Checkbox;
