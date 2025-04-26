
import { Container,Row, Col } from "react-bootstrap";

export default function Slider()
{
    return(
        <>
        <Container fluid > 
            <Row className="slider">
                <Col>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Images/slider.png')} class="d-block w-100" alt="slider" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider1.png')} class="d-block w-100" alt="slider1" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider2.png')} class="d-block w-100" alt="slider2" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider3.png')} class="d-block w-100" alt="slider3" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider4.png')} class="d-block w-100" alt="slider4" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Images/slider.png')} class="d-block w-100" alt="slider" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider1.png')} class="d-block w-100" alt="slider1" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider2.png')} class="d-block w-100" alt="slider2" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider3.png')} class="d-block w-100" alt="slider3" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider4.png')} class="d-block w-100" alt="slider4" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}

                {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Images/slider.png')} class="d-block w-100" alt="slider" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider1.png')} class="d-block w-100" alt="slider1" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider2.png')} class="d-block w-100" alt="slider2" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider3.png')} class="d-block w-100" alt="slider3" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider4.png')} class="d-block w-100" alt="slider4" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}

                {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Images/slider.png')} class="d-block w-100" alt="slider" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider1.png')} class="d-block w-100" alt="slider1" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider2.png')} class="d-block w-100" alt="slider2" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider3.png')} class="d-block w-100" alt="slider3" />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/slider4.png')} class="d-block w-100" alt="slider4" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
                </Col>
            </Row>
        </Container>
        </>
    )
}