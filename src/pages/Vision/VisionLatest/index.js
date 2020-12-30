import React, {useState, useEffect} from 'react';
import { Services } from '@/services/';
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
} from './styles';

import ArticlesList from "@/components/ArticlesList";

export default function VisionLatest(props) {

    const [items,setItems] = useState([]);

    useEffect(() => {
        Services.get('visions/',(data)=>setItems(data.data));
      }, []);
       
    return (
        <StyledContainer>
            <ArticlesList items={items}/>
        </StyledContainer>
    );
}
  