import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title:'A First Meetup',
    image: 'https://media.sas-arche.com/entities_photos/403.jpg',
    address: 'address....',
    description: 'this is the first meetup'
  },
  {
    id: "m2",
    title:'A Second  Meetup',
    image: 'https://cdn.pixabay.com/photo/2020/04/20/17/37/nature-5069200_960_720.jpg',
    address: 'address....',
    description: 'this is a second meetup!'
  }
]

export default function Home({meetups}) {
  return (
   <MeetupList meetups={meetups||[]}/>
  )
}


