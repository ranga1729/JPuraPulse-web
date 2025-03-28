import { useState } from 'react';
import { Alert, Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row } from 'reactstrap';
import api from '../Utils/api';
import { LoginDto } from '../types/CommonTypes';

const Login = () => {
  const [formData, setFormData] = useState<LoginDto>({
    email : "",
    password : ""
  });
  const [error, setError] = useState<string|undefined>('ergr');
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const onAlertDismiss = () => setAlertVisible(false);

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleLogin = async (e:any) => {
    e.preventDefault();

    try {
      const response = await api.post('/user/login', formData);
      const { token } = response.data;
      if(response.status == 200) {
        localStorage.setItem("token", token);
        window.location.href = "/home";
      }
    } catch(err) {
      setError("Invalid email or password.")
      setAlertVisible(true);
    }
  }

  return <Row style={{width:'100vw', height:'100vh', margin:0, padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card style={{width: '21rem', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:12}}>
      <img
        alt="Sample"
        src="/user.png"
        height={80}
        width={80}
      />
      <CardBody style={{display:'flex', flexDirection:'column', width:'100%', padding:'8px 8px 0px 8px'}}>
        <CardTitle tag="h5" style={{textAlign:'center'}}>
          Login
        </CardTitle>

        { error && <Row>
            <Alert color="danger" isOpen={alertVisible} toggle={onAlertDismiss}>
              Username or Password is incorrect !
            </Alert>
          </Row>
        }

        <Form style={{display:'flex', flexDirection:'column'}} onSubmit={handleLogin}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              required
              id="email"
              name="email"
              placeholder="as2025000@usjp.ac.lk"
              type="email"
              autoFocus autoComplete="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button color="primary" type="submit">
            Login
          </Button>

          <FormGroup style={{marginTop:'1rem'}}>
            <Nav justified>
              <NavItem>
                <NavLink active href='/register'>Don't have an account ?</NavLink>
              </NavItem>
            </Nav>
          </FormGroup>
          
        </Form>
      </CardBody>
    </Card>
  </Row>
}

export default Login
