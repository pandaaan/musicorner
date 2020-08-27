import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import firebase from '../Firebase';


class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('recommendations');
        this.unsubscribe = null;
        this.state = {
            recommendations: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const recommendations = [];
        querySnapshot.forEach((doc) => {
            const { title, artist, ytURL } = doc.data();
            recommendations.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                artist,
                ytURL,

            });
        });
        this.setState({
            recommendations
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <Row className="song-a-day" >
                <Col xs={12}>
                    {this.state.recommendations.map(recommendation =>

                        <Card>
                            <a href={'https://youtu.be/' + recommendation.ytURL} className="yt-link">
                                <Card.Img variant="top" src={'https://img.youtube.com/vi/' + recommendation.ytURL + '/mqdefault.jpg'}
                                    className="song-a-day-img" alt="yt-thumbnail" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    <p className="song-a-day-title">{recommendation.title}</p>
                                    <p className="song-a-day-artist">{recommendation.artist}</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    )}
                </Col>

            </Row>


        );
    }
}

export default Recommendation;