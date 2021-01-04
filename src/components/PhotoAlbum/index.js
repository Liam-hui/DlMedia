import React, {useState, useEffect, createRef} from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity,ScrollView,Modal,TouchableHighlight,SafeAreaView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 

import { 
    StyledContainer,
    PhotoContainer,
    NumberContainer,
    NumberText,
    ModalContainer,
    PhotoLargeContainer,
    Row,
    ImageContainer,
    CaptionContainer,
    CaptionText,
    ArrowContainer 
} from './styles';
import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';
import SepLine from "@/components/SepLine";

import {imagePath} from '@/utils/MyUtils';

export default function PhotoAlbum(props) {
    const {images} = props;
    const [showSlide, setShowSlide] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const carouselRef = createRef();

    const topHeight = 110;
    const bottomHeight = 190;

    let photos = [];
    for(let i=0;i<images.length;i++){
        photos.push(
            <PhotoContainer>
                <Image 
                    resizeMode={"cover"} 
                    source={{uri:imagePath(images[i].url)}} 
                    style={{width:"100%", height:"100%",borderRadius:13}}
                />
            </PhotoContainer>
        );
    }

    const renderSlide = ({item,index}) => {
        return(
            <PhotoLargeContainer>
                
                <ImageContainer style={{marginTop:topHeight}}>
                    <Image 
                        resizeMode={"contain"} 
                        source={{uri:imagePath(item.url)}} 
                        style={{width:"100%", height:"100%"}}
                    />
                </ImageContainer>

                <View style={{height:bottomHeight,width:'100%'}}>
                    <Row style={{paddingHorizontal:20}}>
                        <Upvote size={20} id={1000} count={999}/>
                        <Bookmark size={20} id={1000}/>
                    </Row>

                    {item.caption&&item.caption!=''?
                        <CaptionContainer style={{flex:1}}>
                            <View style={{width:'100%',paddingHorizontal:18}}>
                                <SepLine/>
                            </View>

                            <CaptionText>{item.caption}</CaptionText>
                        
                        </CaptionContainer>
                     :null}
                </View>

            </PhotoLargeContainer>
        );
    };
   
    return (
        <>  
            <View style={{backgroundColor:'black'}}>
                <StyledContainer as={TouchableOpacity} activeOpacity={0.5} onPress={()=>setShowSlide(true)}>
                    {photos}
                    {images.length>6?
                        <NumberContainer>
                            <NumberText>{images.length}</NumberText>
                        </NumberContainer>
                    :null}
                </StyledContainer>
            </View>

            <Modal
                visible={showSlide}
                animationType={'fade'}
                transparent={true}

            >
                <ModalContainer>
                    <SafeAreaView/>
                    <View>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={images}
                            containerCustomStyle={{}}
                            sliderWidth={Dimensions.get('window').width}
                            sliderHeight={90}
                            itemWidth={Dimensions.get('window').width}
                            itemHeight={90}
                            renderItem={renderSlide}
                            onSnapToItem = {index => setActiveSlide(index)} 
                        />
                        {/* <Pagination
                            dotsLength={images.length}
                            activeDotIndex={activeSlide}
                            containerStyle={{}}
                            dotStyle={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginHorizontal: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.92)'
                            }}
                            inactiveDotStyle={{
                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        /> */}

                        <ArrowContainer style={{paddingTop:topHeight,paddingBottom:bottomHeight}}>
                            <TouchableOpacity onPress={()=>carouselRef.current.snapToPrev()} style={{}}>
                                <Image source={require("../../../assets/images/icons/icon-grey-arrow.png")} style={{height:24,width:24}} resizeMode={'contain'}/>
                            </TouchableOpacity>
                        </ArrowContainer >

                        <ArrowContainer style={{paddingTop:topHeight,paddingBottom:bottomHeight,right:0}}>
                            <TouchableOpacity onPress={()=>carouselRef.current.snapToNext()} style={{marginLeft:'auto',transform: [{ scaleX: -1 }]}}>
                                <Image source={require("../../../assets/images/icons/icon-grey-arrow.png")} style={{height:24,width:24}} resizeMode={'contain'}/>
                            </TouchableOpacity>
                        </ArrowContainer >
            

                        <TouchableOpacity onPress={()=>setShowSlide(false)} style={{position:'absolute',top:0,right:18,height:18,width:20}}>
                            <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </ModalContainer>
            </Modal>
        </>
    );
}
  