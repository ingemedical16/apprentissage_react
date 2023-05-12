import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import React, { Fragment } from 'react';

function NewMeetup(props) {
    const addMeetupHandler = (data)=>{
        console.log(data)
    };
    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
}

export default NewMeetup;