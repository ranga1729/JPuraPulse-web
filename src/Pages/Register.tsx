import { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Login = () => {

  const[firstName, setFirstName] = useState<string>('');
  const[lastName, setLastName] = useState<string>('');
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  
  const handleSubmit = () => { }
  
  return <Row style={{width:'100vw', height:'100vh', margin:0, padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card style={{width: '25rem', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:12}}>
      <img
        alt="Sample"
        src="/user.png"
        height={80}
        width={80}
      />
      <CardBody style={{display:'flex', flexDirection:'column', width:'100%', padding:'8px 8px 16px 8px'}}>
        
        <CardTitle tag="h5" style={{textAlign:'center', paddingBottom:'1rem'}}>
          Register
        </CardTitle>

        <Form style={{display:'flex', flexDirection:'column'}}>
          <FormGroup row>
              <Label for="firstName"  sm={4}>First Name</Label>
            <Col>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                type="text"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName"  sm={4}>Last Name</Label>
            <Col>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="as2025000@usjp.ac.lk"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <Button color="primary" type="submit" onSubmit={handleSubmit}>
            Login
          </Button>

        </Form>
      </CardBody>
    </Card>
  </Row>

}

export default Login
