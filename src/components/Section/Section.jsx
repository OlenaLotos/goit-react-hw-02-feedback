import PropTypes from 'prop-types';
import { Reviews } from './Section.styled';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Reviews>
      <Title>{title}</Title>
      {children}
    </Reviews>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
