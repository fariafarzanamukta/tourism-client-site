import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';
import './Events.css'

const Events = () => {


    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])
    return (
        <div className="events">
            <h1 className="p-4 text-center events_title">Up Comming Event </h1>
            <div className="container events_container">
                {
                    events.map(event => <Event
                        key={event.id}
                        event={event}

                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;