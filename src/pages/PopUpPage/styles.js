import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width:100%;
  height:100%;
  background-color:rgb(57,56,69);
`;

export const TopBarContainer = styled.View`
  width:100%;
  height:80px;
  background-color:rgb(57,56,69);
  flex-direction:row;
  align-items:center;
  padding-horizontal:15px;
`;

export const HeadingText = styled.Text`
  color:white;
  fontSize:23px;
  margin-left:10px;
`;

export const NotiRow = styled.View`
  width:100%;
  height:60px;
  display:flex;
  flex-direction:row;
  padding-left:20px;
`;

export const NotiShortName = styled.Text`
  font-size: 20px;
  color:white;
  width:60px;
  font-weight:bold;
`;

export const NotiName = styled.Text`
  font-size: 20px;
  color:white;
`;



