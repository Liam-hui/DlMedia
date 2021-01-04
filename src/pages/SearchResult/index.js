import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '@/store';
import {View, Image} from 'react-native'
import { Services } from '@/services/';
import PopUpTopBar from '@/components/PopUpTopBar';


import { 
    StyledContainer,
} from './styles';


export default function SearchResult(props) {

    const [items,setItems] = useState([]);
    const searchText = useSelector(state => state.popUpPage.searchText);

    useEffect(() => {
        Services.get('visions/',(data)=>setItems(data.data));
    }, []);

    return (
        <StyledContainer>
            <PopUpTopBar headingText={store.getState().popUpPage.searchText} back={()=>store.dispatch({type:'POP_UP_PAGE_ON',mode:'search',searchText:searchText})}/>
            {/* <BlockArticleVertical
                items={items}
                goToDetail={goToDetail}
            /> */}
        </StyledContainer>
    );
        
}
