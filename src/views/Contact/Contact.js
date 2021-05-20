// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
import List from '../../shared/components/List/List';

// // styles
import './Contact.scss';

const Contact = () => {
  return (
    <div className="l-contact">
      <Helmet>
        <title>Contacto</title>
        <meta name="description" content="Contacto" />
      </Helmet>
      <Title>Contact</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum.
      </Paragraph>
      <List
        elements={[
          'Dirección: Calle Independencia, 2 - 2.º A 28921 Alcorcón (Madrid)',
          'Telefono: 916 116 256',
          'Fax:  916 116 256',
          'Movil:  686 489 412',
        ]}
      />
    </div>
  );
};

export default Contact;
