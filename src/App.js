import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import './styles/App.scss';
import firebase from './Firebase';
import Footer from './components/Footer';
import Recommendation from './components/Recommendation';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mar2020');

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
      <div>
        <div className="container-fluid ">
          <Row className="app-header">
            <Col xs={10}>
              <p className="logo-title">musiCorner <br />
                <span className="sub-headline"> ― Recommendation </span>
              </p><Link to="/create"><Button></Button></Link>
            </Col>
            <Col xs={2}>
              <Link to="/edit/rec"><Button></Button></Link>
            </Col>

          </Row>
          <Recommendation />
          <div className=" container collection">
            <Row>
              <p className="collection-headline"> ― Collection | <Badge variant="info">March</Badge></p>
            </Row>
            {this.state.boards.map(board =>

              <>

                <Row className="h-100 collection-list">
                  <Col xs={4} className="song-collection">
                    <a href={'https://youtu.be/' + board.ytURL} className="yt-link">
                      <div className="song-img">
                        <img src={'https://img.youtube.com/vi/' + board.ytURL + '/mqdefault.jpg'} className="yt-cover" alt="recommendation-cover" />
                      </div >
                    </a>

                  </Col>
                  <Col xs={8} className="song-info align-self-center ">
                    <a href={'https://youtu.be/' + board.ytURL} className="yt-link"><p className="song-title">{board.title}</p></a>
                    <p className="song-artist">{board.artist}</p>

                  </Col>
                </Row> <br />
              </>

            )}
          </div>
        </div>
        <Footer />
      </div>


    );
  }
}

export default App;