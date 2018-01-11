import React from 'react';
import UserList from '../containers/order-list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dummy from '../containers/admin-view-dummy';



const App = () => (
    
        <Router>
            <div>
                
            <Route exact path="/" component={UserList} />
            <Route path="/admin-view/:id" component={Dummy} />
            </div>
        </Router>
    
);

export default App;