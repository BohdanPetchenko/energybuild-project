import React from 'react';
import { connect } from 'react-redux'
import { Nav, Container } from 'react-bootstrap'

import jwtDecode from 'jwt-decode';


function MyAccount(props) {
    let userToken = localStorage.getItem('userToken')
    let decodeToken = jwtDecode(userToken)
    
    return (

        <Container className='container-wrap' style={{ width: '700px' }}>
            <h3 style={{textAlign: "center", marginTop:15}}>Hello, {decodeToken.userName}</h3>
            <Nav variant="pills" className="flex-column">
                <Nav.Link href="/account/myorders">My orders</Nav.Link>
                <Nav.Link href="/account/createorder">Create order</Nav.Link>
            </Nav>
        </Container>
    )
} 


const AccountComponent = connect(mapStateToProps, null)(MyAccount);

function mapStateToProps(state) {
    return {
        isLoggedIn: localStorage.getItem('userToken')
    };
}

const App = () =>
    <>
        <AccountComponent />
    </>
export default App;