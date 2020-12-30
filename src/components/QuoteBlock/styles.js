import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  background-color: #28262F;
  width: 100%;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const QuoteContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const PicWrapper = styled.View`
  overflow: hidden;
  borderColor: white;
  borderWidth: 1px;
`;

export const QuoteWrapper = styled.View`
  flex:1;
  align-items: center;
  margin-left:20px;
`;

export const QuoteText = styled.Text`
  color: #FFCA1A;
  font-size:29;
  font-family:Avenir-Medium;
  line-height:35;

`;

export const NameText = styled.Text`
  color: ${colors.white};
  font-size:16;
  font-family:Avenir-Medium;
  margin-top:0px;
`;


