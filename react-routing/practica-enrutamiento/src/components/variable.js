import React from 'react';

const Variable = props => {

    if (isNaN(props.variable)) {
        return(
            <div>
                
                <h1>The word is : {props.variable} </h1>
                
            </div>
        )
    } else {
        return(
            <div>
                
                <h1 styl>The number is : {props.variable} </h1>
                
            </div>
        )
    }
}

export default Variable;