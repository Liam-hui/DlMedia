import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const SmallInfoWrapper = styled.View`
  height:100%;  
  width:100%;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
`;

export const MonthText = styled.Text`
  fontSize:11;
  color: white;
  font-family:Avenir-Heavy;
`;

export const DateText = styled.Text`
  fontSize:25;
  color: white;
  font-family:Avenir-Heavy;
  margin-top:-4px;
  margin-bottom:-4px;
`;

export const DayText = styled.Text`
  fontSize:11;
  color: white;
  font-family:Avenir-Heavy;
`;

export const ListIcon = styled.Image`
  height:22px;
  width:22px;
  opacity:1;
  margin-vertical:8px;
`;

export const CategeryText = styled.Text`
  fontSize:20;
  color: white;
  font-family:Avenir-Medium;
  margin-right:20px;
`;

export const MenuColumn = styled.View`
  width:${metrics.screenWidth*0.7};
  height: 100%;
  border-radius:15px;
  paddingHorizontal:20px;
  display:flex;
  position:relative;
`;


