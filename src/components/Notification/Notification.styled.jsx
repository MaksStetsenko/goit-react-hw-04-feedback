import styled from 'styled-components';

export const NotificationStyled = styled.p`
  margin-top: 24px;
  margin-bottom: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;
