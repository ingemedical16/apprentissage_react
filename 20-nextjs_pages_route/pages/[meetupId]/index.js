import { Fragment } from 'react';
import Head from 'next/head';
import {MongoClient,ObjectId} from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails({image,title,address,description}) {
  return (
    <Fragment>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Head>
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://<USER>:<PASSWORD>@cluster0.jtf5g.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({},{_id:1}).toArray();
  client.close();
  return {
    paths:meetups.map((meetup) =>({ params: { meetupId: meetup._id.toString() } })),
    fallback: 'Blocking', // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const id = new ObjectId(meetupId);
  
    const client = await MongoClient.connect('mongodb+srv://<USER>:<PASSWORD>@cluster0.jtf5g.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({ _id:id});
    client.close();
  
  return {
    props:{
      image:meetup.image,
      title: meetup.title,
      address: meetup.address,
      description:meetup.description,
    }
  }
}

export default MeetupDetails;