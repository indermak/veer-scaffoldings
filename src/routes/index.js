import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Gallery from '../pages/Gallery';
import Products from '../pages/Products';

// No Route
import NotFound from '../pages/NotFound';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
