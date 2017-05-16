// http://quartz.vhx.tv/styleguide/all#guide--style-checkbox
"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

const Checkbox = ({ name, checked, onChange, label, size, type }) => {
  const toggleView = React.createElement(
    'span',
    { className: 'checkbox--contain' },
    React.createElement('span', { className: 'checkbox--icon' }),
    React.createElement(
      'span',
      { className: 'checkbox--circle' },
      React.createElement(
        'i',
        { className: 'circle-top' },
        React.createElement('span', null)
      ),
      React.createElement(
        'i',
        { className: 'circle-bottom' },
        React.createElement('span', null)
      )
    ),
    label && React.createElement(
      'span',
      { className: 'checkbox--label' },
      label
    )
  );

  const standardView = React.createElement(
    'span',
    { className: 'checkbox--contain' },
    React.createElement(
      'span',
      { className: 'checkbox--icon' },
      React.createElement('span', { className: 'checkbox--animate' })
    ),
    label && React.createElement(
      'span',
      { className: 'checkbox--label' },
      label
    )
  );

  const classes = classNames({
    'checkbox': true,
    [size]: size,
    'alt': type === 'toggle'
  });

  return React.createElement(
    'fieldset',
    { className: classes },
    React.createElement('input', { type: 'checkbox', onChange: onChange, name: name, id: name, defaultChecked: checked }),
    React.createElement(
      'label',
      { htmlFor: name, className: 'ready' },
      type === 'toggle' ? toggleView : standardView
    )
  );
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string
} : {};

Checkbox.defaultProps = {
  label: null,
  checked: false,
  size: 'medium',
  type: null,
  onChange() {}
};

export default Checkbox;