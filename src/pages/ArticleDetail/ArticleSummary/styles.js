import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  background-color: #EFECEC;
  width: 100%;
  paddingVertical:15px;
`;

export const SummaryText = styled.Text`
  margin-vertical:2px;
  font-family:NotoSerifTC-Regular;
`;

export const SummaryWrapper = styled.View`
  padding-horizontal:50px;
  paddingVertical:10px;
`;


export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;


