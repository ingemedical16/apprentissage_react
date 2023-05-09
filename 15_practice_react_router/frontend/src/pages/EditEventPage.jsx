import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import EventForm from '../components/EventForm'


function EditEventPage(props) {
    const [event,setEvent]=useState()
    const changeHandler =(e) =>{
        const {name,value} = e.target
        
        setEvent({
            ...event,
            [name]:value
        })
       
    }
    const submitHandller =()=>{
        e.preventDefault()
        console.log(event)
    }
    const {id} = useParams();
    useEffect(()=>{
        const fetchEventByID = async (id) =>{
           
            try {
             const response = await  fetch('http://localhost:8080/events/'+id);
             if (!response.ok) {
              throw new Error("something went wrong!")
             }
             const productArry = await response.json();
             let data= productArry.event
           
             setEvent(data)
              
            } catch (error) {
              console.log(error.message)
            }
           
          }
          fetchEventByID(id);
      },[id]);
    return (
        <div>
            <EventForm 
                event={event} 
                method={{submitHandller,changeHandler}}
            />
        </div>
    );
}

export default EditEventPage;