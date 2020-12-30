import React, {useState, useEffect} from 'react';
import {View, Image, Text, Modal, TouchableOpacity, ScrollView} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import { AntDesign } from '@expo/vector-icons'; 

import { 
    StyledContainer,
    PopUpContainer,
    TopBar,
    TopText,
    TitleText,
    MainImage,
    ParagraphText,
} from './styles';

export default function ArticlePopUp(props) {
    const [isBookmarked,setIsBookmarked] = useState(false);

    return (
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={props.show}
        >
            <BlurView blurType="light" blurAmount={10} style={{flex:1}}/>
            <StyledContainer>
               <PopUpContainer>
                   <TopBar>
                       <TopText>learning something</TopText>
                        <TouchableOpacity onPress={()=>props.setShow(false)} style={{marginLeft:'auto'}}>
                            <AntDesign name="close" size={19} color="white"/>
                        </TouchableOpacity>
                   </TopBar>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15,paddingBottom:40}}>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:8,marginBottom:8}}>
                            <TitleText>牛磺酸</TitleText>
                            <TouchableOpacity  activeOpacity={1} onPress={()=>setIsBookmarked(!isBookmarked)}>
                                {/* <Image source={isBookmarked? (require("../../../assets/images/icons/icon-bookmarked.png")):(require("../../../assets/images/icons/icon-bookmark-grey.png")) } resizeMode={'contain'} style={{marginLeft:8,width:23,height:23}}/> */}
                            </TouchableOpacity> 
                        </View>
                        {/* <MainImage source={(require("../../../assets/images/icons/HO.png"))}/> */}
                        <ParagraphText>
                            牛磺酸在維持腦部運作及發展方面都扮演著重要的角色。牛磺酸能加速神經元的增生以及延長的作用。同時亦有利於細胞在腦內移動及增長神經軸突。另外在維持細胞膜的電位平衡方面，牛磺酸亦同樣重要。因為它能幫助電解質如鉀、鈉、鈣及鎂質進出細胞，從而加強腦部的機能。
                        </ParagraphText>
                    </ScrollView>
                   
               </PopUpContainer>
            </StyledContainer>
        </Modal>
    );
        
}
  