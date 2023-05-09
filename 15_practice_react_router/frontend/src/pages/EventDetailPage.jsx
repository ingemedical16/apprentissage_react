import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import EventItem from '../components/EventItem'

function EventDetailPage(props) {
    const [event,setEvent]=useState()
    const {id} = useParams();
    console.log(id)
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

      if(!event){
        return  <p>No Event Fond!</p>
     }
    return (
        <div>
            <EventItem event={event}/>
        </div>
    );
}

export default EventDetailPage;