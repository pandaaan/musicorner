import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import BestOf from './components/BestOf';
import BestOf2018 from './components/BestOf2018';
import BestOf2019 from './components/BestOf2019';
import BestOf2020 from './components/BestOf2020';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
            <Route path='/bestof' component={BestOf} />
            <Route path='/bestof2018' component={BestOf2018} />
            <Route path='/bestof2019' component={BestOf2019} />
            <Route path='/bestof2020' component={BestOf2020} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
