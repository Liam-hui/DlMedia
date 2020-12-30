import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions} from "react-native";

const bar_left_width = Math.round(Dimensions.get('window').width*0.4);

export const StyledContainer = styled.View`
  width:100%;
  background-color: #B3B3B3;
  height:18px;
  flex-direction:row;
  align-items:center;
  z-index:99;
`;

export const BarLeft = styled.View`
  width:${bar_left_width};
  height:18px;
  overflow:hidden;
  border-top-right-radius:9px;
  border-bottom-right-radius:9px;
  margin-right:14px;
`;

export const AuthorText = styled.Text`
  font-size:11px;
  font-family:Avenir-Medium;
  margin-left:auto;
  margin-right:5px;
`;

export const PicWrapper = styled.TouchableOpacity`
  overflow: hidden;
  borderWidth: 1.5px;
  borderRadius:35px;
  height:70px;
  width:70px;
  margin-left:auto;
  margin-right:10px;
`;

