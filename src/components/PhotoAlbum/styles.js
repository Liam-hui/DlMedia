import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

const padding = 5;

export const StyledContainer = styled.View`
  width:100%;
  flex-direction:row;
  flex-wrap:wrap;
  padding:${padding}px;
`;

export const PhotoContainer = styled.View`
  width:${(metrics.screenWidth-padding*2)/3};
  height:${(metrics.screenWidth-padding*2)/3};
  padding:5px;
  overflow:hidden;
`;

export const PhotoLargeContainer = styled.View`
  width:100%;
  height:100%;
  overflow:hidden;
`;

export const NumberContainer = styled.View`
  width:${(metrics.screenWidth-padding*2)/3};
  height:${(metrics.screenWidth-padding*2)/3};
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  right:0;
  bottom:${padding}px;
`;

export const NumberText = styled.Text`
  font-size:36px;
  color:white;
  font-family:Avenir-Medium;
`;

export const ModalContainer = styled.View`
  flex:1;
  background-color: rgba(0,0,0,0.92);
  align-items:center;
  justify-content:center;
  padding-vertical:20px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  flex:1;
  width:100%;
  padding-horizontal:35px;
`;

export const ArrowContainer = styled.View`
  height:100%;
  width:100%;
  align-items: center;
  flex-direction: row;
  padding-horizontal:10px;
  position:absolute;
`;

export const CaptionContainer = styled.View`
  width:100%;
`;

export const CaptionText = styled.Text`
  padding-horizontal:20px;
  font-size:18px;
  color:white;
  font-family:NotoSerifTC-Regular;
`;


