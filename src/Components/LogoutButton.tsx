import { Button } from "reactstrap"

const LogoutButton = () => {

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }

  return <Button color='danger' onClick={handleLogOut}>
    Logout
  </Button>
}

export default LogoutButton