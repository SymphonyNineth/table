import React from "react";

import { smallDataURL, bigDataURL } from "../../services/source";

import "./welcome-message.css";

// Should Add button component

const WelcomeMessage = ( { onSourceSelected } ) => {
    return (
        <div className="welcome-message">
            <button className="btn btn-success" onClick={ () => onSourceSelected( smallDataURL )}>Small Data</button>
            <button className="btn btn-primary" onClick={ () => onSourceSelected( bigDataURL )}>Big Data</button>
        </div>
        
    )
}

export default WelcomeMessage;