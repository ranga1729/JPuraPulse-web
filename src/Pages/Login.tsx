import { Col } from 'reactstrap';
import AuthenticationPanel from '../Components/AuthenticationPanel';

const Login = () => {
  // const [userName, setUserName] = useState<string>();
  // const [password, setPassword] = useState<string>();

  // const handleSubmit = async () => {
  //   console.log("Username: ", userName);
  //   console.log("Password: ", password);

  //   try{
  //     const resposne = await axios.post("https://localhost:44300/api/test/login", {userName, password});
  //     console.log(resposne.data);
  //   } catch(error) {
  //     console.log("Error: ", error)
  //   }
  // }

  return <Col style={{margin:0, padding:0}}>
    <AuthenticationPanel title='User Login' />
  </Col>
}

export default Login
