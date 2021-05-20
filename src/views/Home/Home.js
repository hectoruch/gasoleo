// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// styles
import './Home.scss';

// assets
import IMAGE_1 from './assets/1.jpg';

const Home = () => {
  return (
    <div className="l-home">
      <Helmet>
        <title>Gasoleos Alcorcon</title>
        <meta name="description" content="Gasoleos Alcorcon" />
      </Helmet>
      <div className="l-home__image" style={{ backgroundImage: `url(${IMAGE_1})` }}></div>
    </div>
  );
};

export default Home;
