import { Fragment } from 'react';
import Head from 'next/head'
import {MongoClient} from 'mongodb'
import MeetupList from "../components/meetups/MeetupList";


export default function Home({meetups}) {
  return (
    <Fragment>
      <Head>
          <title>React Meetup</title>
          <meta name='description' content='Browse a huge of highly active React Meetups!'/>
      </Head>
        <MeetupList meetups={meetups}/>
    </Fragment>
   
  )
}
/*
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props:{
      meetups: DUMMY_MEETUPS
    }
}
}
*/
export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://<USER>:<PASSWORD>@cluster0.jtf5g.mongodb.net/meetups?retryWrites=true&w=majority');
            const db = client.db();
            const meetupsCollection = db.collection('meetups');
            const meetups = await meetupsCollection.find().toArray();
            client.close();
  return {
    props:{
      meetups: meetups.map(meetup =>{
      return {
        id:meetup._id.toString(),
        title:meetup.title,
        image: meetup.image,
        address: meetup.address,
      }
      })
    },
    revalidate:1
  }
}

