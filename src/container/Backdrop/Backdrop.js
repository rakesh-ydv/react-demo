import React from 'react';

import './Backdrop.css';
/**
 * 
 * @param {*} props with property show to control the background visibility
 */

const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;