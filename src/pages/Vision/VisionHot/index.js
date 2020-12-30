import React, {useState, useEffect} from 'react';
import store from '@/store';
import { Services } from '@/services/';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
} from './styles';

import ArticlesSlider from "@/components/ArticlesSlider";

export default function VisionHot(props) {

    const [items,setItems] = useState([]);

    useEffect(() => {
        Services.get('visions/',(data)=>setItems(data.data));
    }, []);
    
    return (
        <StyledContainer>
            <ArticlesSlider items={items}/>
        </StyledContainer>
    );
}
  