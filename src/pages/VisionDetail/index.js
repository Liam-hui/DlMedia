import React, { useState, useEffect, createRef } from 'react';
import { 
  StyledContainer, 
 } from './styles';
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Services } from '@/services/';

import ArticleTopBar from "../../components/ArticleTopBar";
import ArticleTop from "../../components/ArticleTop";
import ArticleAuthorBar from "../../components/ArticleAuthorBar";
import ArticleSummary from "../../components/ArticleSummary";
import ArticleParagraph from "../../components/ArticleParagraph";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleImage from "../../components/ArticleImage";
import ArticleQuote from "../../components/ArticleQuote";
import ArticleAuthorIntro from "../../components/ArticleAuthorIntro";
import PhotoAlbum from "../../components/PhotoAlbum";
import SliderBlock from "../../components/SliderBlock";
import Adv from "../../components/Adv";

import { imagePath,date } from '@/utils/MyUtils';

  
export default function VisionDetail({navigation,route}) {
  // const fontSize = useSelector(state => state.articleFontSize);
  const [renderVisions,setRenderVisions] = useState([]);

  useEffect(() => {
    Services.get('visions/'+route.params.id,addContent);
    console.log(route.params.id);
  }, []);

  const addContent = (data) => {
    let renderVision = [];
    renderVision.push(
      <ArticleTop
        data={data}
        back={'vision'}
        goBack={()=>navigation.goBack()}
      />,
      <ArticleAuthorBar
        color={'#FF4663'}
        name={data.api_author.name}
        // pic={require("../../../assets/images/quote_icon.png")}
      />,
      <ArticleSummary
        data={data.outline}
      />
    );

    JSON.parse(data.content).blocks.forEach(block=>{
      switch(block.type) {
        case 'paragraph':
          renderVision.push(
            <ArticleParagraph
              text={block.data.text}
            />
          );
        break;
        case 'header':
          renderVision.push(
            <ArticleHeader
              color={'#FF4663'}
              text={block.data.text}
            />
          );
        break;
        case 'quote':
          renderVision.push(
            <ArticleQuote
              color={'red'}
              text={block.data.text}
            />
          );
        break;
        case 'image':
          console.log(block);
          renderVision.push(
            <ArticleImage
              image={{uri:imagePath(block.data.file.url)}}
              caption={block.data.caption}
            />
          );
        break;
        // case 'album':
        //   renderVision.push(
        //     <PhotoAlbum
        //       images={album}
        //     /> 
        //   );
        // break;
      }
    });
    renderVision.push(
      // <SliderBlock
      //   items={sliderItems}
      //   title={'閱讀更多其他文章'}
      //   // goToDetail={goToDetail}
      // />,
      // <ArticleAuthorIntro
      //   color={'#FF4663'}
      //   pic={require("../../../assets/images/quote_icon.png")}
      //   name={data.api_author.name}
      //   intro={data.api_author.description}
      // />
    );
    setRenderVisions(renderVision);
  }

  return (
    <StyledContainer>
      <ArticleTopBar
        back={'vision'}
        goBack={()=>navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

        {renderVisions}

      </ScrollView>
    </StyledContainer>
  );
}
  
