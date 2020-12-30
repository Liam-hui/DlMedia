import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'

const pic_width = Math.round(Dimensions.get('window').width*0.25);

import { 
    StyledContainer,
    Row,
    PicWrapper,
    QuoteText,
    NameText,
    QuoteWrapper
} from './styles';
import SepLine from "@/components/SepLine";

export default function QuoteBlock(props) {

    const {quote,name,pic} = props;
    const quote_img_size = 23;
       
    return (
        <StyledContainer>
            <View style={{paddingHorizontal:20,paddingVertical:20}}>
                <SepLine title={'quotation'}/>
            </View>
            <Row style={{paddingHorizontal:20}}>
                <PicWrapper style={{width:pic_width,height:pic_width,borderRadius:pic_width*0.5}}>
                    <Image 
                        resizeMode={"cover"} 
                        source={pic} 
                        style={{width:'100%', height:'100%'}}
                    />
                </PicWrapper>
                {/* <QuoteWrapper>
                    <Image 
                        resizeMode={"contain"} 
                        source={require("../../../assets/images/quote_start.png")}
                        style={{position:'absolute',width:quote_img_size, height:quote_img_size,top:0,left:0}}
                    />
                    <Image 
                        resizeMode={"contain"} 
                        source={require("../../../assets/images/quote_end.png")}
                        style={{position:'absolute',width:quote_img_size, height:quote_img_size, bottom:0,right:0}}
                    />
                    <View style={{marginTop:quote_img_size,paddingHorizontal:quote_img_size+10}}>
                        <QuoteText>Good design is innovative</QuoteText>
                        <NameText>Dieter Rams</NameText>
                    </View>
                </QuoteWrapper> */}
            </Row>
        </StyledContainer>
    );
}
  