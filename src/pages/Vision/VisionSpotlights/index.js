import React, {useState, useEffect} from 'react';
import store from '@/store';
import { Services } from '@/services/';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
} from './styles';

import ArticlesSliderBig from "@/components/ArticlesSliderBig";

export default function VisionSpotlights(props) {

    const [items,setItems] = useState([]);

    useEffect(() => {
        Services.get('visions/',(data)=>setItems(data.data));
    }, []);
    
    return (
        <StyledContainer>
            <ArticlesSliderBig items={items}/>
        </StyledContainer>
    );
}
  