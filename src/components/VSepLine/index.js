import React from 'react';
import { View,Dimensions} from 'react-native';
import { 
  Rect,
  RectWrapper,
  StyledContainer,
  SepWrapper,
  SepText,
} from './styles';

export default function VSepLine(props) {
  const {title,color,height} = props;

  let rect_height= 7;
  if(height) rect_height = height;

  let rects = [];
  for (let i=0; i<Dimensions.get('window').height/rect_height; i++) {
    rects.push(
      <RectWrapper style={{height:rect_height}}> 
        <Rect/> 
      </RectWrapper>
    );
  }

  return (
    <StyledContainer>
      {title? <SepText>{title}</SepText> : (null)}
      <View style={{flex:1}}>
        <SepWrapper>
          {rects}
        </SepWrapper>
      </View>
    </StyledContainer>
  );
}
