import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';


class Create extends Component {


    constructor() {
        super();
        this.ref = firebase.firestore().collection('mar2020');
        this.state = {
            title: '',
            artist: '',
            ytURL: '',

        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, artist, ytURL, } = this.state;

        this.ref.add({
            title,
            artist,
            ytURL,

        }).then((docRef) => {
            this.setState({
                title: '',
                artist: '',
                ytURL: '',

            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        const { title, artist, ytURL } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            ADD SONG
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/" className="btn btn-primary">Back Home</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="title">Title:</label>
                                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label for="artist">Artist:</label>
                                <input type="text" className="form-control" name="artist" value={artist} onChange={this.onChange} placeholder="artist" />
                            </div>
                            <div className="form-group">
                                <label for="ytURL">ytURL:</label>
                                <input type="text" className="form-control" name="ytURL" value={ytURL} onChange={this.onChange} placeholder="ytURL" />
                            </div>

                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;