import { Button, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Header from "../Components/Header";
import { useState } from "react";
import test from '../assets/test.jpg'
import EventCard from "../Components/EventCard";
 
const AdminDashboard = () => {
  const [mainModal, setMainModal] = useState<boolean>(false);
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>('');
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [venue, setVenue] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<File>();
  
  const toggleMainModal = () => setMainModal(!mainModal);
  const togglePreviewModal = () => setPreviewModal(!previewModal);
  const buttonVisibility = () => {
    if(name && date && start && end && venue)
    {
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    console.log("Name: ", name);
    console.log("Date: ", date);
    console.log("start: ", start);
    console.log("End: ", end);
    console.log("Venu: ", venue);
    if(thumbnail) {
      console.log("Thumbnail: ", URL.createObjectURL(thumbnail));
    }  
  }

  const showModal = () => {
    return <Modal isOpen={mainModal} toggle={toggleMainModal}>
    <ModalHeader toggle={toggleMainModal}>Create Event</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup row>
          <Label for="eventName" sm={3}>
            Event Name
          </Label>
          <Col>
            <Input
              id="eventName"
              name="eventName"
              placeholder="Event name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={3}>
            Description
          </Label>
          <Col>
            <Input
              id="description"
              name="description"
              placeholder="Additional information"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormText>
              This is an optional field.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="date" sm={3}>
            Date
          </Label>
          <Col>
            <Input
              id="date"
              name="date"
              placeholder="Date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="startingTime" sm={3}>
            Time
          </Label>
          <Col style={{display:'flex', flexDirection:'row', alignItems:'baseline', gap:'0.5rem'}}>
            <Input
              id="startingTime"
              name="startingTime"
              type="time"
              onChange={(e) => setStart(e.target.value)}
            />
            <span>-</span>
            <Input
              id="endingTime"
              name="endingTime"
              type="time"
              onChange={(e) => setEnd(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="venue" sm={3}>
            Venue
          </Label>
          <Col>
            <Input
              id="venue"
              name="venue"
              placeholder="Venue"
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="thumbnail" sm={3}>
            Thumbnail
          </Label>
          <Col>
            <Input
              id="thumbnail"
              name="file"
              type="file"
              onChange={(e) => setThumbnail(e.target.files?.[0])}
            />
            <FormText>
              Upload only image files.
            </FormText>
          </Col>
        </FormGroup>
      </Form>

    </ModalBody>
    <ModalFooter>
      <Col>
        <Button color="secondary" onClick={togglePreviewModal} disabled={buttonVisibility()}>
          Preview
        </Button>
      </Col>
      <Button color="success" onClick={handleSubmit} disabled={buttonVisibility()}>
        Submit
      </Button>
      <Button color="danger" onClick={toggleMainModal}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  }

  const showPreviewModal = () => {
    return <Modal isOpen={previewModal} toggle={togglePreviewModal} size="lg">
      <ModalHeader toggle={togglePreviewModal}>Preview</ModalHeader>
      <ModalBody style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#FAF9F6'}}>
        <EventCard 
          title={name} 
          venue={venue} 
          date={date} 
          time={start + " - " + end}
          />
      </ModalBody>
    </Modal>
  }

  return <Col>
    <Header />
    <h2>Welcome to admin Dashboard</h2>
    <Button color="primary" onClick={toggleMainModal}>
      Create an event
    </Button>

    {showModal()}
    {showPreviewModal()}
  </Col>
}

export default AdminDashboard;