import { useState } from 'react';
import { Alert, Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row } from 'reactstrap';
import api from '../Utils/api';
import { RegisterDto } from '../types/CommonTypes';

const Login = () => {
  const [formData, setFormData] = useState<RegisterDto>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string|undefined>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const onAlertDismiss = () => setAlertVisible(false);

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  
  const handleRegister = async (e:any) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/register", formData)
      if(response.status == 200) 
      {
        alert("Registration successful");
        window.location.href = "/login";
      }
    } catch(err) {
      setError("Registration failed. Try again.");
      setAlertVisible(true);
    }
  }
  
  return <Row style={{width:'100vw', height:'100vh', margin:0, padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card style={{width: '25rem', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:12}}>
      <img
        alt="Sample"
        src="/user.png"
        height={80}
        width={80}
      />
      <CardBody style={{display:'flex', flexDirection:'column', width:'100%', padding:'8px 8px 0px 8px'}}>
        
        <CardTitle tag="h5" style={{textAlign:'center', paddingBottom:'1rem'}}>
          Register
        </CardTitle>

        { error && <Row>
            <Alert color="danger" isOpen={alertVisible} toggle={onAlertDismiss}>
              Username or Password is incorrect !
            </Alert>
          </Row>
        }

        <Form style={{display:'flex', flexDirection:'column'}} onSubmit={handleRegister}>
          <FormGroup row>
              <Label for="firstName"  sm={4}>First Name</Label>
            <Col>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                type="text"
                autoFocus
                value={formData?.firstName}
                onChange={handleChange}
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
                value={formData?.lastName}
                onChange={handleChange}
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
              value={formData?.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData?.password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button color="primary" type="submit">
            Submit
          </Button>

          <FormGroup style={{marginTop:'1rem'}}>
            <Nav justified>
              <NavItem>
                <NavLink active href='/login'>Already have an account</NavLink>
              </NavItem>
            </Nav>
          </FormGroup>

        </Form>
      </CardBody>
    </Card>
  </Row>

}

export default Login
