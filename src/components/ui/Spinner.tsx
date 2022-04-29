import React from 'react';
import spinner from '../../images/spinner.gif';

interface SpinnerProps {}

export default function Spinner(props: SpinnerProps) {
  return (
    <img
      src={spinner}
      alt='loading'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  );
}
