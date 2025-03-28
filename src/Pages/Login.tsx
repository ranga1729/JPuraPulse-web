import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Login = () => {
  
  const handleSubmit = () => { }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <Row style={{width:'100vw', height:'100vh', margin:0, padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card style={{width: '20rem', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:12}}>
      <img
        alt="Sample"
        src="/user.png"
        height={80}
        width={80}
      />
      <CardBody style={{display:'flex', flexDirection:'column', width:'100%', padding:'8px 8px 16px 8px'}}>
        
        <CardTitle tag="h5" style={{textAlign:'center'}}>
          Login
        </CardTitle>

        <Form style={{display:'flex', flexDirection:'column'}}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              required
              id="email"
              name="email"
              placeholder="as2025000@usjp.ac.lk"
              type="email"
              autoFocus autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              required
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
