import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

//actions
import {fetchSmurfs} from '../actions'

const SmurfsBox = (props) => {
    console.log('Props in SmurfsBox.js:',props)
    useEffect(() =>{
        props.fetchSmurfs();
    },[])
    return(
        <>
        <div className='SmurfBox'>
           {(props.smurf === null) ? 
           (<div>Loading...</div>) : 
           (props.smurf.smurfs.map(smurf => (
               <Smurf key={smurf.id} smurf={smurf}/>
           )))}
        </div>
        <SmurfForm/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurf: state.smurf,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfsBox);