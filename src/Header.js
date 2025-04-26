
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

export default function Header()
{
    let nav = useNavigate()
    let cartpage = ()=>
    {
        nav('/mycart')
    }
    return(
        <>
        <Container fluid >
            <Row className="header">
                <Col>
                    <div className="logo">
                        <img src={require('./Images/logo.png')} alt="logo" width={100} />
                    </div>
                </Col>
                <Col className="menu">
                    <ul>
                        <Link to='/'> <li>Home</li></Link>
                        <Link to='/product'><li>Product</li></Link>
                        <Link to='/mycart'><li>Mycart</li></Link>
                    </ul>
                </Col>
                <Col>
                    <div className="cart" onClick={cartpage}>
                        <img src={require('./Images/logo1.png')} alt="mycart" width={100} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Outlet/>
        <Footer/>               
        </>
    )
}