import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  height: 100%;
  padding-horizontal: 0px;
  padding-vertical: 0px;
  align-items:center;
`;

export const RectWrapper = styled.View`
  align-items:center;
`;


export const Rect = styled.View`
  background-color: ${colors.white};
  height: 0.5px;
  width: 3px;
`;

export const SepWrapper = styled.View`
  overflow:hidden;
`;

export const SepText = styled.Text`
  color: ${colors.dark};
  font-size:12px;
  margin-right:8px;
`;
