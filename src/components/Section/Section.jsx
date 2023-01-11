import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyled, SectionTitledStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitledStyled>{title}</SectionTitledStyled>
      {children}
    </SectionStyled>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
}