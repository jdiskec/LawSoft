import React from 'react';
import './background.css';

const Background = ({ children, className = "" }) => {
    return (
        <div className={`background-layer ${className}`}>
            <div className="bg-decorations">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
            </div>
            {children}
        </div>
    );
};

export default Background;
