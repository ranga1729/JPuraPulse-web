import { Col } from "reactstrap";
import EventCard from "./EventCard";


const EventCatalog = () => {
  return <Col style={{margin:0, padding:'0.5rem', display:'flex', height:'100%', width:'100%', flexWrap:'wrap', gap:'0.5rem'}}>
    <EventCard title="Corn Stall" description="Organized by the Gavel Club" venue="Main Entrance" date='19th March, 2025' time='3.30PM - 6.00PM' />
    <EventCard title="Corn Stall" description="Organized by the Gavel Club" venue="Main Entrance" date='19th March, 2025' time='3.30PM - 6.00PM' />
    <EventCard title="Corn Stall" description="Organized by the Gavel Club" venue="Main Entrance" date='19th March, 2025' time='3.30PM - 6.00PM' />
  </Col>
}

export default EventCatalog;