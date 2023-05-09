import {useState} from 'react';
import EventForm from '../components/EventForm'

function NewEventPage(props) {
    const [event,setEvent]=useState()
    const changeHandler =(e) =>{
        const {name,value} = e.target
        
        setEvent({
            ...event,
            [name]:value
        })
       
    }
    const submitHandller =(e)=>{
        e.preventDefault()
        console.log(event)
    }
    return <EventForm 
    event={event} 
    method={{submitHandller,changeHandler}}
/>;
}
export default NewEventPage;