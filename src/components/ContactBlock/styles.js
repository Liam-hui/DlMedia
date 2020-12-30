import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  background-color: #28262F;
  width: 100%;
  align-items:center;
  padding-bottom:20px;
`;

export const Email = styled.View`
  align-items: center;
  justify-content: center;
  width: 200px;
  height:22px;
  border-radius:11px;
  background-color: rgba(255,255,255,0.4);
  margin-vertical:5px;
`;

export const EmailButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 36px;
  height:23px;
  border-radius:11.5px;
  background-color: white;
  position:absolute;
  right:-10px;
`;

export const EmailText = styled.Text`
  color: ${colors.light};
  font-size:13;
  font-family:Avenir-Medium;
`;

export const StyledText = styled.Text`
  color: ${colors.dark};
  font-size:13;
  font-family:Avenir-Medium;
`;


