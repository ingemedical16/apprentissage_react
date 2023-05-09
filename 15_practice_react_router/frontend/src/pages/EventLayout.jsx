import {Outlet} from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';


function EventLayout(props) {
   
    return (
        <>
           <EventsNavigation/>
           
          <Outlet /> 
          
       
        </>
    );
}

export default EventLayout;