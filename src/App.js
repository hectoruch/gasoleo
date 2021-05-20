// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ScrollToTop } from 'react-router-scroll-to-top';

// views
import Home from './views/Home/Home';
import AboutUs from './views/AboutUs/AboutUs';
import Station from './views/Station/Station';
import Promotions from './views/Promotions/Promotions';
import Contact from './views/Contact/Contact';
import Products from './views/Products/Products';

// components
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';
import Layout from './shared/components/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Layout isIndex={/*window.location.pathname === '/'*/ false}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sobre-nosotros">
              <AboutUs />
            </Route>
            <Route exact path="/estacion-servicio-a-15">
              <Station />
            </Route>
            <Route exact path="/promociones">
              <Promotions />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/productos">
              <Products />
            </Route>
          </Switch>
        </Layout>
        <Footer />
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
