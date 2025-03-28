import { Col } from "reactstrap";

const NotFound = () => {
  return <Col style={{textAlign: "center", marginTop: "10%",}}>
      <h1 style={{fontSize: "100px", fontWeight: "bold",margin: "0",}}>404</h1>
      <h2 style={{fontSize: "30px", margin: "10px 0",}}>Not Found</h2>
      <p style={{fontSize: "16px", color: "#666",}}>The resource requested could not be found on this server!</p>
  </Col>
}

export default NotFound;