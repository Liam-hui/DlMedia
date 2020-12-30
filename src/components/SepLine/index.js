import React from 'react';
import { View,Dimensions} from 'react-native';
import { 
  StyledContainer,
  SepWrapper,
  SepText,
  SmallCircle,
  MidCircle,
  BigCircle,
} from './styles';

export default function SepLine(props) {
  let {title,vertical,color} = props;

  if(!color) color = 'rgb(165,165,165)';

  let circles_width = 50;

  let circlesLine = [];
  for (let i=0; i<Dimensions.get('window').width/circles_width; i++) {
    circlesLine.push(
      <>
        <SmallCircle style={{backgroundColor:color}}/>
        <SmallCircle style={{backgroundColor:color}}/>
        <SmallCircle style={{backgroundColor:color}}/>
        <MidCircle style={{backgroundColor:color}}/>
        <SmallCircle style={{backgroundColor:color}}/>
        <SmallCircle style={{backgroundColor:color}}/>
        <SmallCircle style={{backgroundColor:color}}/>
        <BigCircle style={{backgroundColor:color}}/>
      </>
    );
  }
  

  return (
    <StyledContainer style={vertical?{height:'100%'}:{width:'100%',flexDirection:'row'}}>
      {title? <SepText>{title}</SepText> : (null)}
      <View style={{flex:1}}>
        <SepWrapper style={vertical?{}:{flexDirection:'row'}}>
          {circlesLine}
        </SepWrapper>
      </View>
    </StyledContainer>
  );
}
