import React from 'react';

const VariableColor = props => {

    if (isNaN(props.variable)) {
        return(
            <div>
                
                <h1 style={{ color: (props.color1), background: (props.color2) } } >The word is : {props.variable} </h1>
                
            </div>
        )
    } else {
        return(
            <div>
                
                <h1 style={{ color: (props.color1), background: (props.color2) } } >The number is : {props.variable} </h1>
                
            </div>
        )
    }
}

export default VariableColor;