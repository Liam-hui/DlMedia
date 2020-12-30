import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  padding-bottom:2px;
  align-self: flex-start;
  overflow:hidden;
  max-width:93%;
`;

export const HeaderLeft = styled.View`
  width:50px;
  height:20px;
  overflow:hidden;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  margin-right:14px;
`;

export const HeaderText = styled.Text`
  font-family:NotoSansTC-Bold;
  flex-shrink: 1;
  color:black;
`;

