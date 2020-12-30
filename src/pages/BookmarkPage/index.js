import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '@/store';
import storage from '@/utils/storage';
import {View, Image, TouchableOpacity} from 'react-native'
import { Services } from '@/services/';
import moment from 'moment';
import {getBase64, date, imagePath} from '@/utils/MyUtils';
import * as RootNavigation from '@/utils/RootNavigation';

import { 
    StyledContainer,
    StyledItem,
    InfoWrapper,
    TitleText,
    ItemImage,
    DateWrapper,
    DateText,
} from './styles';


export default function History(props) {

    const [items,setItems] = useState([]);

    useEffect(() => {
        getHistory();
    }, []);

    const getHistory = async() => {
        let history = await storage.getHistory();
        
        history = history.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        setItems(history);
    }

    const renderItem = (item,index) => {
        return(
            <>
                {index==0||moment(item.date).format('YYYY-MM-DD')!= moment(items[index-1].date).format('YYYY-MM-DD')?
                    <DateWrapper>
                        <DateText>{date(moment(item.date).format('YYYY-MM-DD'))}</DateText>
                    </DateWrapper>
                :null}
                <StyledItem>
                    <InfoWrapper>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{ store.dispatch({type:'POP_UP_PAGE_OFF'}); RootNavigation.navigate('detail',{id:item.id});}}>
                            <TitleText>{item.title}</TitleText>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            {item.hasVideo?
                                <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7,marginRight:7}}/>
                            :null}
                            {item.hasAudio?
                                <Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7}}/>
                            :null}
                        </View>
                    </InfoWrapper>
                    <ItemImage source={{uri:item.image}} resizeMode={'cover'}/>
                </StyledItem>
            </>
        );
    }

    return (
        <StyledContainer>
            {items.map((item,index)=>renderItem(item,index))}
        </StyledContainer>
    );
        
}
