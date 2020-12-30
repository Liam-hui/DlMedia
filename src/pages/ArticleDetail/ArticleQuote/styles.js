import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  padding-vertical:40px;
  padding-horizontal:35px;
  width:100%;
  overflow:hidden;
  flex-direction:row;
`;

export const QuoteText = styled.Text`
  font-size:25px;
  font-family:NotoSansTC-Bold;
  color:black;
  marginTop:10px;
`;

