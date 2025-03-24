import { useState } from "react";
import { Button, ButtonGroup, Card, CardImg, CardImgOverlay, CardTitle, Col, Form, FormGroup, Input } from "reactstrap";

const SearchBanner = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [timeFilter, setTimeFilter] = useState<number>(1);

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

          <ButtonGroup size="sm" style={{padding:'0.25rem'}}>
            <Button
              color={timeFilter === 1?"primary":"light"}
              outline
              onClick={() => setTimeFilter(1)}
              active={timeFilter === 1}>
              All
            </Button>
            <Button
              outline
              color={timeFilter === 2?"primary":"light"}
              onClick={() => setTimeFilter(2)}
              active={timeFilter === 2}
            >
              This month
            </Button>
            <Button
              outline
              color={timeFilter === 3?"primary":"light"}
              onClick={() => setTimeFilter(3)}
              active={timeFilter === 3}
            >
              Next month
            </Button>
          </ButtonGroup>
        </Form>
        
      </CardImgOverlay>
    </Card>
  </Col>
}

export default SearchBanner;