import {useSelector} from 'react-redux';
 import EventsList from '../components/EventsList';
 import EventsNavigation from '../components/EventsNavigation'
function EventsPage(props) {

    const events = useSelector(state => state.listEvents.events)
    const isLoading = useSelector(state => state.listEvents.isLoading)
    const hasError = useSelector(state => state.listEvents.error)

    const evt = events.payload ||[]
   console.log(events.payload)
if(isLoading){
return <p>Loading.....</p>
}
   
if(hasError){
return <p>{hasError}</p>
}

    return (
        <EventsList events={evt} />
       );
}

export default EventsPage;