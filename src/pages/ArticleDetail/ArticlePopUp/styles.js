import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width:100%;
  height:100%;
  position:absolute;
  justify-content:center;
  align-items:center;
  padding-horizontal:27px;
`;

export const PopUpContainer = styled.View`
  width:100%;
  height:70%;
  background-color:rgba(230,230,230,0.5);
  border-radius:25px;
  padding-bottom:1px;
  overflow:hidden;
`;

export const TopBar = styled.View`
  width:100%;
  height:50px;
  background-color:rgb(250,75,106);
  flex-direction:row;
  align-items:center;
  padding-horizontal:15px;
`;

export const TopText = styled.Text`
  color:white;
  font-size:14;
  font-family:Avenir-Medium;
`;

export const TitleText = styled.Text`
  color:black;
  font-size:22;
  font-family:Avenir-Medium;
  font-weight:bold;
`;

export const MainImage = styled.Image`
  width:100%;
  height:150px;
  border-width:1.5px;
  border-color:black;
`;

export const ParagraphText = styled.Text`
  color:#484848;
  margin-top:10px;
  font-size:18;
  line-height:38;
  font-family:Avenir-Medium;
`;

