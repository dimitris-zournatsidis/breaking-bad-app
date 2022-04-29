import React from 'react';
import spinner from '../../../images/spinner.gif';
import './Spinner.css';

interface SpinnerProps {}

export default function Spinner(props: SpinnerProps) {
  return <img src={spinner} alt='loading' className='spinner-icon' />;
}
