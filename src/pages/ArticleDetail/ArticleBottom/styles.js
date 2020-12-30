import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  margin-bottom:20px;
  display:flex;
  align-items:center;
  paddingHorizontal:20px;
`;

export const Row = styled.View`
  margin-top:10px;
  flex-direction:row;
  align-items: center;
`;


export const TagText = styled.Text`
  font-family:Avenir-Medium;
  color: #FF5A5A;
  font-size:18px;
  fontWeight: bold;
`;

