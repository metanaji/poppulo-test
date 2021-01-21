import React from 'react';
import Button from '@material-ui/core/Button';

function PploButton(props) {

  return (
    <Button variant={props.variant} disableRipple type={props.type} color={props.color}>{props.label}</Button>
  );
}

export default PploButton;