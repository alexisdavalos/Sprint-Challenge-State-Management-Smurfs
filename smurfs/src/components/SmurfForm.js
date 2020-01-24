import React, {useState} from 'react';
import {connect} from 'react-redux';
///actions
import {createSmurf, deleteSmurf} from '../actions'
const SmurfForm = props => {
    
    //initial smurf state
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
      })
    const [smurfID, setSmurfID] = useState('');
    const [valid, setValid] = useState(true);
    console.log('SmurfForm.js: Props:',props)
    //handle changes on add Smurf form
    const handleChanges = e => {
        e.preventDefault();
        setSmurf({
          ...smurf,
          [e.target.name]: e.target.value,
        });
        console.log(`${e.target.name} is:`, e.target.value);
      };
    //handle ID changes on delete Smurf form
    const handleID = e => {
        e.preventDefault();
        setSmurfID(
          e.target.value
        );
        console.log(`${e.target.name} is:`, e.target.value);
      };
    //handles New Smurf Submission
    const handleNewSmurf = (e) => {
        e.preventDefault();
        props.createSmurf(smurf)
    }
    //handles Delete Smurf Submission
    const handleDeleteSmurf = (e) =>{
        e.preventDefault();
        if(smurfID !== '' || null){
            props.deleteSmurf(smurfID)
            setSmurfID('');
        }else{
            setValid(false);
        }
        
    }
    return(
        <div className='SmurfFormBox'>
            <section>
            <h3>Add A New Smurf!</h3>
            <form className='SmurfForm' onSubmit={handleNewSmurf}>
                    <label>Smurf Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Beans"
                        value={smurf.name}
                        onChange={handleChanges}
                    />
                    
                    <label>Smurf Age: </label>
                    <input
                        type="text"
                        name="age"
                        placeholder="300"
                        value={smurf.age}
                        onChange={handleChanges}
                    />
                    
                    <label>Smurf Height: </label>
                    <input
                        type="text"
                        name="height"
                        placeholder="4cm"
                        value={smurf.height}
                        onChange={handleChanges}
                    />
                <button>Submit</button>
        </form>
            </section>
            <section>
            <h3>Delete A Smurf</h3>
            <form className='SmurfForm' onSubmit={handleDeleteSmurf}>
                <label>Enter Smurf ID</label>
                <input
                    type="text"
                    name="id"
                    placeholder="ex: 123"
                    value={smurfID}
                    onChange={handleID}
                />
                <button>Submit</button>
            </form>
            </section>
    </div>
)
}
const mapStateToProps = state =>{
    return{
        isLoading: state.isLoading,
        smurf: state.smurf,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    {createSmurf, deleteSmurf}
)(SmurfForm);