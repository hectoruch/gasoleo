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
// import IMAGE_5 from './assets/5.jpg';

const Station = () => {
  return (
    <div className="l-station">
      <Helmet>
        <title>Estacion de servicio A-15</title>
        <meta name="Estacion de servicio A-15" content="Estacion de servicio A-15" />
      </Helmet>
      <Title>Estación de servicio A-15</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      <List
        elements={[
          'Tunel de Lavado',
          'Aspiradoras',
          'Boxes de lavado a presión',
          'Descuentos a Flotas',
          'Tarjeta Sol-Red',
          'Tarjeta Corte Inglés',
        ]}
      ></List>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      <ImageGallery
        images={[
          { image: IMAGE_1, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_2, alt: 'estacion', title: 'estacion' },
          { image: IMAGE_3, alt: 'estacion', title: 'estacion' },
          // { image: IMAGE_4, alt: 'estacion', title: 'estacion' },
          // { image: IMAGE_5, alt: 'estacion', title: 'estacion' },
        ]}
        type="THREE"
      />
    </div>
  );
};

export default Station;
