import React from 'react';
import '../styles/BestOf.scss';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import firebase from '../Firebase';


class BestOf extends React.Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');

        this.unsubscribe = null;
        this.state = {
            boards: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, artist, ytURL } = doc.data();
            boards.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                artist,
                ytURL,

            });
        });
        this.setState({
            boards
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
            <>
                <div className="container-fluid " >
                    <Row className=" bestof-header">
                        <Col xs={12} className="back " >
                            <p className="logo-title">musiCorner <br />
                                <span className="sub-headline"> ― Best Of 2020 </span>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <div className=" container best-collection">
                        {this.state.boards.map(board =>

                            <>
                                <Row className="h-100 collection-list" >
                                    <Col xs={4} className="song-collection">
                                        <a href={'https://youtu.be/' + board.ytURL} className="best-yt-link">
                                            <div className="song-img">
                                                <img src={'https://img.youtube.com/vi/' + board.ytURL + '/mqdefault.jpg'} className="yt-cover" alt="recommendation-cover" />
                                            </div >
                                        </a>

                                    </Col>
                                    <Col xs={8} className="song-info align-self-center ">
                                        <a href={'https://youtu.be/' + board.ytURL} className="best-yt-link"> <p className="song-title">{board.title}</p></a>
                                        <p className="song-artist">{board.artist}</p>

                                    </Col>
                                </Row> <br />
                            </>

                        )}

                    </div>


                </div>  <Footer />
            </>
        );
    }

}

export default BestOf;
