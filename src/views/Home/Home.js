// vendors
import React from 'react';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-slideshow-image';

// styles
import './Home.scss';

// assets
import IMAGE_1 from './assets/1.jpg';
import IMAGE_2 from './assets/2.jpg';
import IMAGE_3 from './assets/3.jpg';
import IMAGE_4 from './assets/4.jpg';

const Home = () => {
  return (
    <div className="l-home">
      <Helmet>
        <title>Gasoleos Alcorcon</title>
        <meta name="description" content="Gasoleos Alcorcon" />
      </Helmet>
      <Fade arrows={false} indicators={true}>
        <div className="each-fade" style={{ backgroundImage: `url(${IMAGE_1})` }}></div>
        <div className="each-fade" style={{ backgroundImage: `url(${IMAGE_2})` }}></div>
        <div className="each-fade" style={{ backgroundImage: `url(${IMAGE_3})` }}></div>
        <div className="each-fade" style={{ backgroundImage: `url(${IMAGE_4})` }}></div>
      </Fade>
    </div>
  );
};

export default Home;
