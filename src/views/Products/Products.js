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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, amollis enim suscipit quis. Vestibulum id aliquet nisl.',
    image: TRUCK,
    type: 'LEFT',
  },
  {
    title: 'Gasoleo B',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, amollis enim suscipit quis. Vestibulum id aliquet nisl.',
    image: TRACTOR,
    type: 'RIGHT',
  },
  {
    title: 'Gasoleo C',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, amollis enim suscipit quis. Vestibulum id aliquet nisl.',
    image: RADIATOR,
    type: 'LEFT',
  },
];

const Products = () => {
  const buildProducts = products => {
    return products.map(({ title, description, image, type }, index) => {
      return (
        <div className="l-products__container" key={`product-${index}`}>
          <ProductDetail title={title} description={description} image={image} type={type} />
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      {buildProducts(PRODUCTS)}
    </div>
  );
};

export default Products;
