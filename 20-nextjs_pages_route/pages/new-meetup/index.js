import { Fragment } from 'react';
import Head from 'next/head'
import {useRouter} from 'next/navigation'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetup(props) {
    const router = useRouter()
    const addMeetupHandler = async (data)=>{
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const resData = await response.json();

        console.log(resData);
        router.push('/')
    };
    return (
        <Fragment>
        <Head>
            <title>Add a new  Meetup</title>
            <meta name='description' content='Add your own meetups and create amazing networking opportunities'/>
        </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
}

export default NewMeetup;