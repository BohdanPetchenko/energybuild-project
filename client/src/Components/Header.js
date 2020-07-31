import React  from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from "./logo193.png";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'


import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyAccount from "../Pages/MyAccount";
import GetOrderPage from '../Pages/GetOrderPage'
import CreateOrderPage from '../Pages/CreateOrderPage'


import PrivateRoute from "../helpers/private-route";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        localStorage.removeItem("userToken");
    }

    render () {
        return (
            <>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Energy Build
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                        </Nav>

                        {(this.props.isLoggedIn) ?
                        <div>
                            <Button className="mr-6" variant="outline-info" href="/account">Account</Button>;
                            <Button className="mr-6" variant="outline-info" onClick={this.logout} href="/">Logout</Button>;
                        </div> :
                        <div>
                            <Button className="mr-6" variant="outline-info" href="/login">Log in</Button>
                            <Button className="mr-4 ml-2 " variant="outline-info" href="/register">Registration</Button>
                        </div>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/account" component={MyAccount} />
                <PrivateRoute exact path="/account/myorders" component={GetOrderPage} />
                <PrivateRoute exact path="/account/createorder" component={CreateOrderPage} />
            </Switch>
          </>
        );
      }
}

const HeaderComponent = connect(mapStateToProps, null)(Header);

function mapStateToProps(state) {
    return {
        isLoggedIn: localStorage.getItem('userToken')
    };
}

const App = () =>
    <>
        <HeaderComponent />
    </>
export default App;
