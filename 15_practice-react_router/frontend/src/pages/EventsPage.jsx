import React from 'react'

import EventsNavigation from '../components/EventsNavigation'
import EventsList from '../components/EventsList'
export default function EventsPage() {
  return (
    <>
    <EventsNavigation/>
    <EventsList events={[]}/>
    </>
  )
}
