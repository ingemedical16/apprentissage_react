import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import {setEvents,loading,hasError} from '../store/slices/eventsSlice'


function Layout(props) {
   const dispatch = useDispatch()
    
      useEffect(()=>{
        const fetchEvents = async () =>{
            dispatch(loading())
            try {
             const response = await  fetch('http://localhost:8080/events');
             if (!response.ok) {
              throw new Error("something went wrong!")
             }
             const productArry = await response.json();
             let data= productArry.events
           
             dispatch(setEvents(data));
              
            } catch (error) {
              dispatch(hasError(error.message))
            }
           
          }
          fetchEvents();
      },[]);
    return (
        <>
           <MainNavigation/>
               
           <main>
          <Outlet /> 
          </main>
       
        </>
    );
}

export default Layout;