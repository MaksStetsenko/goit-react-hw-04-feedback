import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const SectionTitledStyled = styled.h2`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;
