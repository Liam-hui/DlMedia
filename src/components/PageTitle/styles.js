import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const SectionTitleWrapper = styled.View`
  position:absolute;
  left:0;
  top:138px;
  z-index:11;
`;

export const SectionTitle = styled.Text`
  color: ${colors.white};
  font-size:26px;
  margin-left: 15px;
  font-family:Avenir-Medium;
  margin-top:0px;
`;
