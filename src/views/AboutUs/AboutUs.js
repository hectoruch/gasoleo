// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';
import Paragraph from '../../shared/components/Paragraph/Paragraph';

// // styles
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="l-about-us">
      <Helmet>
        <title>Quienes Somos</title>
        <meta name="description" content="Quienes somos" />
      </Helmet>
      <Title>Quienes Somos</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat sagittis elit, a
        mollis enim suscipit quis. Vestibulum id aliquet nisl. Aenean ornare, purus lacinia
        vulputate dictum, nibh dui placerat erat, a accumsan tortor turpis non velit. Quisque ornare
        sapien quis dui tincidunt condimentum. Donec porttitor tincidunt neque non viverra. Vivamus
        a gravida sapien. Integer iaculis metus erat, et accumsan lacus finibus eu. In ac est vitae
        lorem dignissim rutrum vel eu lacus.
      </Paragraph>
    </div>
  );
};

export default AboutUs;
