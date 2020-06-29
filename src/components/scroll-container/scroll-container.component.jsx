import React from 'react';

import './scroll-container.styles.scss';


const ScrollContainer = ({children, ...props}) => (<div className="scroll-container">{children}</div>);

export default ScrollContainer