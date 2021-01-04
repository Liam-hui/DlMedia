import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  position:absolute;
  z-index:999;
`;

export const BackText = styled.Text`
  color: ${colors.white};
  font-size:18px;
  font-family: Avenir-Medium;
`;

export const Button = styled.View`
  display:flex;
  justify-content:center;
  align-items:center;
  height:22px;
  width:22px;
  opacity:1;
  marginLeft:12px;
`;

export const TopIcon = styled.Image`
  height:100%;
  width:100%;
`;

export const Row = styled.View`
  flex-direction:row;
  align-items: center;
`;
