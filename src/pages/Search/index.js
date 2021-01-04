import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '@/store';
import {View, Image, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'

import { 
    StyledContainer,
    SearchBar,
    SearchInput,
    Bubble,
    BubbleText,
} from './styles';


export default function PopUpPageSearch(props) {

    const [searchText,setSearchText] = useState('');
    const oldSearchText = useSelector(state => state.popUpPage.searchText);

    useEffect(() => {
        if(oldSearchText) setSearchText(oldSearchText);
    }, []);

    return (
        <StyledContainer>
            <SafeAreaView/>
            <SearchBar>
                <TouchableOpacity onPress={()=>store.dispatch({type:'POP_UP_PAGE_OFF'})}>
                    <Image source={require("../../../assets/images/icons/icon-right-arrow.png")} resizeMode={'contain'} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <SearchInput
                    placeholder={'搜尋 Search'}
                    placeholderTextColor={'rgba(255,255,255,0.34)'}
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                />
                <TouchableOpacity onPress={()=>store.dispatch({type:'POP_UP_PAGE_ON',mode:'searchResult',searchText:searchText})} style={{marginLeft:'auto'}}>
                <   Image source={require("../../../assets/images/icons/icon-search.png")} resizeMode={'contain'} style={{width:20,height:20}}/>
                </TouchableOpacity>
            </SearchBar>
            <FlatList
                data={DATA}
                renderItem={searchBubble}
                // keyExtractor={item => item.index}
                numColumns={2}
            />
        </StyledContainer>
    );
        
}

const DATA = [
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
        highlighted:true,
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
    {
        title: '威士忌欣賞學',
    },
  ];

const searchBubble = ({item}) => {
    return(
        <Bubble as={TouchableOpacity} onPress={()=>store.dispatch({type:'POP_UP_PAGE_ON',mode:'searchResult',searchText:item.title})} activeOpacity={0.6} style={{backgroundColor: item.highlighted? 'rgb(255,255,255)':'rgba(255,255,255,0.66)'}}>
            <BubbleText style={{color: item.highlighted? 'black':'white'}}>{item.title}</BubbleText>
        </Bubble>

    );
}

