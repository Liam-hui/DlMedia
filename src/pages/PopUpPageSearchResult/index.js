import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '@/store';
import {View, Image} from 'react-native'
import { Services } from '@/services/';

// import BlockArticleVertical from "@/components/BlockArticleVertical";

import { 
    StyledContainer,
} from './styles';


export default function PopUpPageSearchResult(props) {

    const [items,setItems] = useState([]);
    const searchText = useSelector(state => state.popUpPage.searchText);

    useEffect(() => {
        Services.get('visions/',(data)=>setItems(data.data));
    }, []);

    return (
        <StyledContainer>
            {/* <BlockArticleVertical
                items={items}
                goToDetail={goToDetail}
            /> */}
        </StyledContainer>
    );
        
}
