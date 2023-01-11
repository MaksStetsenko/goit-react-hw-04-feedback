import styled from 'styled-components';

export const FeedbackButtonStyled = styled.button`
  width: 70px;
  height: 70px;

  border-radius: ${p => p.theme.radii.rounded};
  border: none;
  outline: none;

  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.third};
  background-color: ${p => p.theme.colors[p.buttonBG]};

  :hover {
    box-shadow: ${p => p.theme.shadows.buttonsDown};
  }
`;
