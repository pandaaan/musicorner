import React from 'react';
import '../styles/BestOf.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class BestOf extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid best" >
                    <Row className=" bestof-header">
                        <Col xs={12} className="back " >
                            <p className="logo-title">musiCorner <br />
                                <span className="sub-headline"> ― Best Of </span>
                            </p>
                        </Col>
                    </Row>

                    <br />
                    <Row className=" ">
                        <Col xs={6}  >
                            <Link to="/bestof2020">
                                <div className="div-year">
                                    <p className="year ">2020</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={6} >
                            <Link to="/bestof2019">
                                <div className="div-year">
                                    <p className="year">2019</p>
                                </div>
                            </Link>

                        </Col>
                        <Col xs={6}  >
                            <Link to="/bestof2018">
                                <div className="div-year">
                                    <p className="year ">2018</p>
                                </div>
                            </Link>
                        </Col>


                    </Row>


                </div>
                <Footer />
            </>
        );
    }

}

export default BestOf;
