// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
// import PromotionCode from '../../shared/components/PromotionCode/PromotionCode';

// // styles
import './Promotions.scss';

//constants
// import { PROMOTIONS } from './constants/Promotions.constants';

const Promotions = () => {
  // const buildPromotions = promotions => {
  //   return promotions.map(({ title, description }, index) => {
  //     return (
  //       <div key={`promotion-${index}`} className="l-promotions__container">
  //         <PromotionCode title={title} description={description} />
  //       </div>
  //     );
  //   });
  // };
  return (
    <div className="l-promotions">
      <Helmet>
        <title>Promociones</title>
        <meta name="description" content="Promociones" />
      </Helmet>
      <Title>Promociones</Title>
      {/* {buildPromotions(PROMOTIONS)} */}
      <Paragraph>
        <b>Proximamente se añadiran nuevas promociones.</b>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Paragraph>
    </div>
  );
};

export default Promotions;
