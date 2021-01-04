import React, {useState, useEffect} from 'react';
import {View, Image, Text, Platform} from 'react-native'
import { useSelector } from "react-redux";
import ArticlePopUp from "../ArticlePopUp";
import {fixText} from '@/utils/MyUtils';

import { 
    StyledContainer,
    ParagraphText,
    BoldText,
    TagText,
} from './styles';

export default function ArticleParagraph(props) {
    const[showPopUp, setShowPopUp] = useState(false);

    let {text} = props;
    let renderText = [];
    const fontSize = useSelector(state => state.articleFontSize);
    const fontStyle = fontSize? ({fontSize:fontSize,lineHeight:fontSize*2,marginTop:Platform.OS==='android'?-fontSize*2:0}):(null);

    let searchBold = -100;
    let searchLearn = -100;
    while(searchBold!=-1 && searchLearn!=-1){
        searchLearn = text.search("<tag>");
        if(searchLearn!=-1){
            renderText.push(text.substring(0,searchLearn));
            text = text.substring(searchLearn+5);
            searchLearn = text.search("</tag>");
            renderText.push(' ',<TagText onPress={()=>setShowPopUp(true)} style={fontStyle}>{text.substring(0,searchLearn)}</TagText>,' ');
            text = text.substring(searchLearn+6);
        }

        searchBold = text.search("<b>");
        if(searchBold!=-1){
            renderText.push(text.substring(0,searchBold));
            text = text.substring(searchBold+3);
            searchBold = text.search("</b>");
            renderText.push(' ',<BoldText onPress={()=>setShowPopUp(true)} style={fontStyle}>{text.substring(0,searchBold)}</BoldText>,' ');
            text = text.substring(searchBold+4);
        }
    }
    renderText.push(text);

    return (
        <StyledContainer>
            <ParagraphText style={[{marginTop:0},fontStyle]}>
                {fixText(renderText)}
            </ParagraphText>

            <ArticlePopUp show={showPopUp} setShow={setShowPopUp}/>
        </StyledContainer>
    );
}
  