// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
import ImageGallery from '../../shared/components/ImageGallery/ImageGallery';

// // styles
import './AboutUs.scss';

// assets
import IMAGE_1 from './assets/1.jpg';
import IMAGE_3 from './assets/3.jpg';
import IMAGE_2 from './assets/2.jpg';

const AboutUs = () => {
  return (
    <div className="l-about-us">
      <Helmet>
        <title>Quienes Somos</title>
        <meta name="description" content="Quienes somos" />
      </Helmet>
      <Title>Quienes Somos</Title>
      <Paragraph>
        <b>GASOLEOS ALCORCON</b> lleva más de 30 años años suministrando gasóleo a domicilio a
        empresas,organismos oficiales,particulares y comunidades de vecinos.
      </Paragraph>
      <Paragraph>
        El grupo gasóleos alcorcón esta formado por dos empresas familiares relacionadas con el
        mercado de los combustibles. La primera empresa opera en el ambito de la distribución de
        gasoleos desde 1992 bajo la denominación social de gasoleos alcorcon s.l. La segunda es una
        estacion de servicio que opera desde 1998 bajo la denominación social de estacion de
        servicio a-15 s.l..dicha estación de servicio es abanderada repsol , desde su inicio.
      </Paragraph>
      <Paragraph>
        Desde que comenzamos en 1992 el mercado de los combustibles ha variado enormemente,
        fundamentalmente en lo referente a la demanda y a los requisitos legales para poder
        suministrar gasoleo, desde la necesidad de legalización de instalaciones de clientes,
        controles exhaustivos de los aparatos de suministro, normativas de transportes y la gran
        cantidad de información que hay que enviar a los organismos públicos. nuestra empresa se ha
        adaptado para estar en linea con los requisitos anteriormente expuestos.
      </Paragraph>
      <Paragraph>
        En la actualidad contamos con mas de 10.000 clientes entre particulares, empresas y
        comunidades de vecinos. Hemos colaborado en la construcción de importantes infraestructuras
        en la Comunidad de Madrid .
      </Paragraph>
      <Paragraph>
        Una de nuestras máximas preocupaciones es el compromiso con la calidad y el respeto por el
        medio ambiente.
      </Paragraph>
      <Paragraph>
        Contamos con un grupo humano desde nuestro inicio sin el cual no hubieramos podido mantener
        el nivel de calidad en el servicio y atención al cliente que nos ha permitido crecer en este
        mercado tan competitivo.
      </Paragraph>
      <Paragraph>
        Igualmente nos relacionamos con diversas empresas que colaboran con nosotros al objeto de
        facilitar la realización de las ultimas novedades en lo relativo al cumplimiento de
        normativas, productos e instalaciones.
      </Paragraph>
      <Paragraph>
        Todos los suministros de gasóleo se realizan con camiones dotados de. contadores homologados
        y calibrados por el laboratorio de Industria de la Comunidad de Madrid.
      </Paragraph>
      <ImageGallery
        images={[
          { image: IMAGE_1, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_2, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_3, alt: 'estacion', title: 'estacion' },
        ]}
        type="THREE"
      />
    </div>
  );
};

export default AboutUs;
