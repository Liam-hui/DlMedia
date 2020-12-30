import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  align-items:center;
`;

export const SepWrapper = styled.View`
  align-items:center;
  justify-content:flex-end;
  overflow:hidden;
`;

export const SepText = styled.Text`
  color: ${colors.dark};
  font-size:12px;
  margin-right:8px;
  font-family:Avenir-Medium;
`;

export const SmallCircle = styled.View`
  background-color: rgb(165,165,165);
  height: 1px;
  width: 1px;
  border-radius: 0.5px;
  margin:3px;
`;

export const MidCircle = styled.View`
  background-color: rgb(165,165,165);
  height: 3px;
  width: 3px;
  border-radius: 1.5px;
  margin:3px;
`;

export const BigCircle = styled.View`
  background-color: rgb(165,165,165);
  height: 4px;
  width: 4px;
  border-radius: 2.5px;
  margin:2px;
`;
