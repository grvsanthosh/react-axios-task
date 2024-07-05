import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Link to="/home">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/dashboard">
          <Navbar.Brand>Dashboard</Navbar.Brand>
        </Link>
        <Link to="/adduser">
          <Navbar.Brand>Add User</Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
}

export default TopBar;
