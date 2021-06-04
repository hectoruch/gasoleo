// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
import List from '../../shared/components/List/List';
import ImageGallery from '../../shared/components/ImageGallery/ImageGallery';

// styles
import './Station.scss';

// assets
import IMAGE_1 from './assets/1.jpg';
import IMAGE_2 from './assets/2.jpg';
import IMAGE_3 from './assets/3.jpg';
// import IMAGE_4 from './assets/4.jpg';
import IMAGE_5 from './assets/5.jpg';
import IMAGE_6 from './assets/6.jpg';

const Station = () => {
  return (
    <div className="l-station">
      <Helmet>
        <title>Estacion de servicio A-15</title>
        <meta name="Estacion de servicio A-15" content="Estacion de servicio A-15" />
      </Helmet>
      <Title>Estación de servicio A-15</Title>
      <Paragraph>
        Estacion de servicio que opera desde 1998 bajo la denominación social de estacion de
        servicio a-15 s.l.. Estación de servicio abanderada repsol , desde su inicio. desde su
        inicio tenemos asistencia en pista por personal que ha seguido diversos programas de
        formación. reflejados en estándares de calidad aplicados por la mayor petrolera de españa,
        Bajo unos programas de seguimiento muy estrictos de dichos estándares de calidad y servicio.
      </Paragraph>

      <Paragraph>
        Disponemos de un surtidor de <b>AD-BLUE</b> , con mangueras tanto para vehículos
        industriales com turismos. El AD-BLUE es un aditivo utilizados en vehículos DIESEL para
        disminuir la emisión de gases .
      </Paragraph>
      <ImageGallery
        images={[{ image: IMAGE_5, alt: 'add-blue', title: 'add-blue' }]}
        type="THREE"
      />
      <Paragraph>
        Disponemos de importantes descuentos tanto a nivel de empresa como particulaes. aceptamos
        todas las tarjetas del grupo repsol: descuentos: solred etc.. Fidelizacion para obtener
        puntos canjeables por descuentos en carburante u otros premios. Tambien aceptamos la tarjeta
        de el corte ingles .
      </Paragraph>
      <Paragraph>
        Además del suministro de carburante, ofrecemos otros servicios relacionados:
      </Paragraph>
      <List elements={['Tunel de Lavado', 'Aspiradoras', 'Boxes de lavado a presión']}></List>
      <Paragraph>
        Por último ofrecemos el servicio de <b>MECANICA RAPIDA</b> para el automóvil en el TALLER
        asociado que se encuentra en nuestras instalaciones.
      </Paragraph>
      <ImageGallery
        images={[
          { image: IMAGE_1, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_2, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_3, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_6, alt: 'taller', title: 'taller' },
          // { image: IMAGE_4, alt: 'estacion', title: 'estacion' },
          // { image: IMAGE_5, alt: 'estacion', title: 'estacion' },
        ]}
        type="THREE"
      />
    </div>
  );
};

export default Station;
