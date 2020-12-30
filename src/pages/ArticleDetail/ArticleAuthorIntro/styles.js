import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

export const StyledContainer = styled.View`
  background-color: #EFECEC;
  width: 100%;
`;

export const TopColor = styled.View`
  width: 100%;
  height: 18px;
`;

export const ShowdowWrapper = styled.View`
  shadowColor: #000;
  shadowOpacity: 0.24;
  shadowRadius: 4.32;
  elevation: -30;
`;

export const PicWrapper = styled.View`
  borderColor: white;
  borderWidth: 2px;
  overflow:hidden;
`;

export const ContentContainer = styled.View`
  padding-vertical:15px;
  padding-left:30px;
  padding-right:20px;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const IntroWrapper = styled.View`
  flex:1;
  margin-left:30px;
`;

export const AuthorText = styled.Text`
  color: black;
  font-size:12;
  font-family:Avenir-Medium;
  margin-left:3px;
  margin-bottom:8px;
`;

export const IntroText = styled.Text`
  color: #707070;
  font-size:11;
  font-family:Avenir-Medium;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  margin-top:10px;
  align-items:center;
`;

export const ButtonText = styled.Text`
  color: #707070;
  font-size:11;
  font-family:Avenir-Medium;
`;


