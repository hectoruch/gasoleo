// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';
import ProductDetail from '../../shared/components/ProductDetail/ProductDetail';

// styles
import './Products.scss';

// assets
import TRUCK from './assets/furgo.jpg';
import RADIATOR from './assets/radiador.jpg';
import TRACTOR from './assets/tractor.jpg';

//constants

const PRODUCTS = [
  {
    title: 'Gasoleo A',
    description:
      'Carburante especialmente indicado para la utilización en los motores diésel de combustión interna (automóviles y vehículos industriales. Producto no inflamable a temperatura ambiente. Contiene aditivos exclusivos específicos que mejoran su calidad para ser distinguido de otros existentes en el mercado y aportan las siguientes ventajas para el vehículo:',
    listProperties: [
      'Mejores prestaciones del motor',
      'Menor consumo',
      'Alta protección contra el desgaste de la bomba y del sistema de inyección',
      'Alta protección contra la corrosión del sistema de alimentación del motor',
      'Reducción de emisiones contaminantes',
      'Reducción de espumas en el repostaje',
    ],
    image: TRUCK,
    type: 'LEFT',
  },
  {
    title: 'Gasoleo B',
    description:
      'Es un gasóleo especialmente indicado para obtener el máximo rendimiento de los tractores y máquinas agrícolas que utilizan los profesionales del campo. Se vende a las cooperativas, instalaciones agrícolas, agricultores, etc.',
    listProperties: [
      'El mayor y mejor equipo de asistencia técnica a su disposición para ayudarle a resolver cualquier problema que tengan sus instalaciones ',
      'Calidad garantizada',
      'Más refinado que el gasóleo de calefacción',
    ],
    image: TRACTOR,
    type: 'RIGHT',
  },
  {
    title: 'Gasoleo C',
    description:
      'Carburante específico para comunidades de vecinos, viviendas unifamiliares, industrias, cooperativas, servicios, colectividades, etc. Con una composición más densa que los otros derivados (gasóleos A y B), con mayor presencia de azufre, parafinas. Esto le confiere un poder calorífico ligeramente superior a los otros.',
    listProperties: [],
    image: RADIATOR,
    type: 'LEFT',
  },
];

const Products = () => {
  const buildProducts = products => {
    return products.map(({ title, description, image, type, listProperties }, index) => {
      return (
        <div className="l-products__container" key={`product-${index}`}>
          <ProductDetail
            title={title}
            description={description}
            image={image}
            type={type}
            listProperties={listProperties}
          />
        </div>
      );
    });
  };

  return (
    <div className="l-products">
      <Helmet>
        <title>Productos</title>
        <meta name="Productos" content="Productos" />
      </Helmet>
      <Title>Productos</Title>
      <Paragraph>
        Prestamos servicio de Legalización de depósitos a través de una empresa asociada, así como
        la instalación de depósitos
      </Paragraph>
      <Paragraph>
        <b>SERVICIO DE ENTREGA EN 24 HORAS.</b>
      </Paragraph>
      {buildProducts(PRODUCTS)}
    </div>
  );
};

export default Products;
