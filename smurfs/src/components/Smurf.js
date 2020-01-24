import React from 'react';

const Smurf = props => {
    console.log('Props in Smurf.js:',props)
    return(
        <div className='Smurf'>
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
        </div>
    )
}

export default Smurf;