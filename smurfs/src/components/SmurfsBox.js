import React from 'react';
import {connect} from 'react-redux';

const SmurfsBox = (props) => {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.title,
        isLoading: state.isLoading,
        smurf: state.smurf,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
)(SmurfsBox);