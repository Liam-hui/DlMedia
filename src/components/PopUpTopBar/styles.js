import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const TopBarContainer = styled.View`
  width:100%;
  background-color:rgb(57,56,69);
  padding-vertical:20px;
`;

export const Row = styled.View`
  flex-direction:row;
  align-items:center;
  padding-horizontal:15px;
`;

export const HeadingText = styled.Text`
  color:white;
  fontSize:23px;
  margin-left:10px;
`;