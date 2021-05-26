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
import LegalAdvise from './views/LegalAdvise/LegalAdvise';
import CookiesAdvise from './views/CookiesAdvise/CookiesAdvise';
import PrivacityAdvise from './views/PrivacityAdvise/PrivacityAdvise';

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

        <Switch>
          <Route exact path="/">
            <Layout isIndex>
              <Home />
            </Layout>
          </Route>
          <Route exact path="/sobre-nosotros">
            <Layout>
              <AboutUs />
            </Layout>
          </Route>
          <Route exact path="/estacion-servicio-a-15">
            <Layout>
              <Station />
            </Layout>
          </Route>
          <Route exact path="/promociones">
            <Layout>
              <Promotions />
            </Layout>
          </Route>
          <Route exact path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route exact path="/productos">
            <Layout>
              <Products />
            </Layout>
          </Route>
          <Route exact path="/aviso-legal">
            <Layout>
              <LegalAdvise />
            </Layout>
          </Route>
          <Route exact path="/politica-de-cookies">
            <Layout>
              <CookiesAdvise />
            </Layout>
          </Route>
          <Route exact path="/politica-de-privacidad">
            <Layout>
              <PrivacityAdvise />
            </Layout>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
