import { Col, Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return <Col style={{margin:0, padding:0}}>
    <Navbar  color="dark" dark>
      <NavbarBrand href="/" style={{display:'flex', flexDirection:'row', gap:'0.5rem'}}>
        <img alt="logo" src='\usj_logo.png' 
          style={{
            height: 40,
            width: 40
          }}
        />
        Japura Pulse
      </NavbarBrand>
    </Navbar>
  </Col>
}

export default Header