import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const CardContainer = styled.View`
  justify-content:flex-end;
  width:100%;
  height:${metrics.screenHeight*0.9}px;
`;

export const BackgroundImage = styled.Image`
  width:100%;
  height:100%; 
  position:absolute;
`;

export const LeftBlack = styled.View`
  width: 70px;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  background-color: rgba(0,0,0,0.3);
  overflow:hidden;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 20%;
  width: ${metrics.screenWidth}px;
`;

export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  width:100%;
  bottom: 30px;
  padding-left:80px;
`;

export const PeopleName = styled.Text`
  color: ${colors.white};
  font-size:13px;
  margin-bottom:8px;
`;

export const ArticleTitle = styled.Text`
  color: ${colors.white};
  font-size:26px;
  line-height:30px;
  text-align:left;
`;

export const OtherInformationWrapper = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const OtherInformationText = styled.Text`
  color: ${colors.white};
  font-size:10px;
  margin-right: 5px;
`;

export const SmallIcon = styled.Image`
  width:15px;
  height:15px;
  opacity:0.7;
  marginHorizontal:2.5px;
`;

export const ParagraphText = styled.Text`
  color: ${colors.white};
  font-size:18px;
  line-height:35px;
  textAlign: justify;
  font-weight:100;
  flex:1;
  fontFamily: "NotoSerifTC-Regular";
`;

export const AuthorContainer = styled.View`
  width:80px;
  height:80px;
  background-color:red;
`;











