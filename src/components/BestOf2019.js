import React from 'react';
import '../styles/BestOf.scss';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';

import CollectionData from '../data/bestOf2019Data.json';

class BestOf extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid " >
                    <Row className=" bestof-header">
                        <Col xs={12} className="back " >
                            <p className="logo-title">musiCorner <br />
                                <span className="sub-headline"> ― Best Of 2019 </span>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <div className=" container best-collection">
                        {CollectionData.map((postDetail, index) => {
                            return (
                                <>
                                    <Row className="h-100 collection-list" key={index}>
                                        <Col xs={4} className="song-collection">
                                            <a href={'https://youtu.be/' + postDetail.ytID} className="best-yt-link">
                                                <div className="song-img">
                                                    <img src={'https://img.youtube.com/vi/' + postDetail.ytID + '/mqdefault.jpg'} className="yt-cover" alt="recommendation-cover" />
                                                </div >
                                            </a>

                                        </Col>
                                        <Col xs={8} className="song-info align-self-center ">
                                            <a href={'https://youtu.be/' + postDetail.ytID} className="best-yt-link"> <p className="song-title">{postDetail.title}</p></a>
                                            <p className="song-artist">{postDetail.artist}</p>

                                        </Col>
                                    </Row> <br />
                                </>
                            )
                        })}

                    </div>


                </div>
                <Footer />
            </>
        );
    }

}

export default BestOf;
