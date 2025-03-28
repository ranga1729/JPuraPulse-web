import { Card, CardBody, CardSubtitle, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import Location from '../assets/location.png'
import Date from '../assets/calendar.png'
import Time from '../assets/clock.png'

import testImage from '../assets/test.jpg'

interface Props {
  title: string;
  description?: string;
  venue: string;
  date: string;
  time: string;
}

const EventCard = (props : Props) => {
  return <Card style={{ maxWidth: '15rem'}}>
    <img alt="Event Image" src={testImage} />
    <CardBody style={{padding:'0.5rem'}}>
      <CardTitle tag="h5"> {props.title} </CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        {props.description}
      </CardSubtitle>
    </CardBody>
    <ListGroup flush>
      <ListGroupItem>
        <img alt="Date" src={Date} width={20}/> : {props.date} 
      </ListGroupItem>
      <ListGroupItem>
        <img alt="time" src={Time} width={20}/> : {props.time} 
      </ListGroupItem>
      <ListGroupItem>
        <img alt="Venue" src={Location} width={20}/> : {props.venue}
      </ListGroupItem>
    </ListGroup>
  </Card>
}

export default EventCard;