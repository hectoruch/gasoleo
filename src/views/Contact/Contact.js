// vendors
import React from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
import List from '../../shared/components/List/List';

// // styles
import './Contact.scss';

const Contact = () => {
  const defaultPosition = [40.3488284, -3.8281314];

  return (
    <div className="l-contact">
      <Helmet>
        <title>Contacto</title>
        <meta name="description" content="Contacto" />
      </Helmet>
      <Title>Contacto</Title>
      <Paragraph>
        <span className="text -l">OFICINAS CENTRALES</span>
      </Paragraph>
      <List
        elements={[
          'Dirección: Calle Independencia, 2 - 2.º A 28921 Alcorcón (Madrid)',
          'Telefono: 916 116 256',
          'Correo electrónico: gasoleosdelsur@yahoo.es',
          'Fax:  916 116 256',
          'Movil:  686 489 412',
        ]}
      />
      <div className="l-contact__map-container">
        <MapContainer center={defaultPosition} zoom={17} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={defaultPosition}>
            <Popup>Gasoleos Alcorcon</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Paragraph>
        <span className="text -l">Gasocentro / Estación de servicio</span>
        <List
          elements={[
            'Dirección: Av. San Martín de Valdeiglesias, KM.0, 28922 Alcorcón, Madrid, España',
            'Telefono: 916 113 361',
          ]}
        />
        <div className="l-contact__map-container">
          <MapContainer center={[40.3571107, -3.8250831]} zoom={17} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.3571107, -3.8250831]}>
              <Popup>Gasoleos Alcorcon</Popup>
            </Marker>
          </MapContainer>
        </div>
      </Paragraph>
    </div>
  );
};

export default Contact;
