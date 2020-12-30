import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';
import {Dimensions } from "react-native";
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const VISUAL_HEIGHT = SCREEN_HEIGHT*0.8;


export const StyledContainer = styled.View`
  width: ${metrics.screenWidth}px;
  position: relative;
`;

export const SectionTitleWrapper = styled.View`
  position:absolute;
  left:0;
  top:138px;
  z-index:11;
`;

export const SectionTitle = styled.Text`
  color: ${colors.white};
  font-size:21px;
  margin-left: 15px;
  font-family:Avenir-Medium;
  margin-top:5px;
`;

export const CardContainer = styled.View`
  justify-content:flex-end;
  width:100%;
  position: absolute;
  /* left:0; */
  /* top:0; */
  /* height:560px; */
  overflow:hidden;
`;

export const StyledItemBackgroundImage = styled.Image`
  width:100%;
  height: ${VISUAL_HEIGHT}px; 
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 20%;
  width: ${metrics.screenWidth}px;
`;

export const LeftBlack = styled.View`
  width: 64px;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  background-color: rgba(0,0,0,0.3);
`;

export const PendingBackground = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: ${metrics.screenWidth}px;
  opacity: 0.75;
`;

export const ArticleTitleWrapper = styled.View`
  position:absolute;
`;


export const ArticleTitle = styled.Text`
  color: ${colors.white};
  font-size:26px;
  line-height:30px;
  text-align:left;

`;

export const BeforeTitle = styled.Text`
  color: ${colors.white};
  font-size:13px;
  line-height:35px;
  position:absolute;
  fontWeight: bold;
  top:-38;
`;

export const ArticleTag = styled.Text`
  color: #FF5A5A;
  font-size:15px;
  line-height:35px;
  fontWeight: bold;
`;

export const ActorTitle = styled.Text`
  color: ${colors.white};
  font-size:13px;
  position:absolute;
  top:-28;
  line-height:35px;
`;

export const InformationWrapper  = styled.View`
  flex-direction: row;
  position:absolute;
  align-items:center;
  left: 80px;
  bottom: -50px;
`;

export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

export const InformationText = styled.Text`
  color: ${colors.white};
  font-size:10px;
  margin-right: 5px;
`;

export const OptionWrapper = styled.View`
  flex-direction: row;
  align-items:center;
  position:absolute;
  right: 0px;
  bottom: 8px;
`;

export const OptionText = styled.Text`
  color: ${colors.white};
`;

export const ItemDot = styled.View`
  background-color: ${colors.white};
  width:10px;
  height:10px;
  border-radius:5px;
`;

export const ItemNumber = styled.View`
  position:absolute;
  width: 64px;
  flex-direction:column;
  justify-content:center;
  align-items: center;
`;

export const ItemNumberText = styled.Text`
  color: ${colors.white};
  font-size:30px;
`;

export const VSep = styled.View`
  height:100%;
  width:60;
  overflow:hidden;
  position:absolute;
`;

export const IconWrapper = styled.View`
  position:absolute;
  right:8px;
  align-items:center;
`;

export const Icon = styled.View`
  overflow: hidden;
  borderColor: rgb(189,81,84);
  borderWidth: 1px;
  width:50;
  height:50;
  borderRadius:25;
`;

export const IconText = styled.Text`
  margin-top:8px;
  font-size:10px;
  color: white;
  font-family:Avenir-Medium;
`;

export const SmallIcon = styled.Image`
  width:15px;
  height:15px;
  opacity:0.7;
  marginHorizontal:2.5px;
`;