import { useState } from "react";
import { Button, Card, CardImg, CardImgOverlay, CardTitle, Col, Form, FormGroup, Input } from "reactstrap";

const SearchBanner = () => {
  const[searchTerm, setSearchTerm] = useState<string>('');

  return <Col style={{margin:0, padding:0}}>
    <Card inverse style={{margin:0, padding:0, borderRadius:0}}>
      <CardImg
        alt="Banner"
        src='/banner.jpg'
        width="100%"
        style={{
          height:270,
          borderRadius:0,
        }}
      />
      <CardImgOverlay style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <CardTitle tag="h1">
          What's new in Japura ?
        </CardTitle>
        <Form>
          <FormGroup style={{display:'flex', flexDirection:'row', gap:'0.5rem'}}>
            <Input type="text" placeholder="Search event name..." value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{width:'30%', background:'rgb(203, 254, 249)', border:'none'}} />
            <Button color="success" type="submit">
              Search
            </Button>            
          </FormGroup>
        </Form>
        
      </CardImgOverlay>
    </Card>
  </Col>
}

export default SearchBanner;