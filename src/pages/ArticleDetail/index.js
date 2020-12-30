import React, { useState, useEffect, createRef } from 'react';
import { 
  StyledContainer, 
 } from './styles';
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Services } from '@/services/';
import storage from '@/utils/storage';

import ArticleTopBar from "./ArticleTopBar";
import ArticleTop from "./ArticleTop";
import ArticleAuthorBar from "./ArticleAuthorBar";
import ArticleSummary from "./ArticleSummary";
import ArticleParagraph from "./ArticleParagraph";
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ArticleQuote from "./ArticleQuote";
import ArticleAuthorIntro from "./ArticleAuthorIntro";
import ArticleBottom from "./ArticleBottom";
import ArticleSlider from "./ArticleSlider";

import PhotoAlbum from "@/components/PhotoAlbum";

import Adv from "@/components/Adv";

import {imagePath} from '@/utils/MyUtils';

  
export default function ArticleDetail({navigation,route}) {
  const [renderVisions,setRenderVisions] = useState([]);

  useEffect(() => {
    Services.get('visions/'+route.params.id,(data)=>{ 
      addToHistory(data); 
      addContent(data);
    });
  }, []);

  const addToHistory = async (data) => {
    let item = {
      id:data.id,
      date: new Date().toString(),
      title: data.title,
      image: imagePath(data.poster),
      hasVideo: data.hasVideo,
      hasAudio: data.hasAudio,
    }
    storage.saveHistory(item);
  }

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
        pic={{uri:imagePath(data.api_author.avatar)}}
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
          renderVision.push(
            <ArticleImage
              image={{uri:imagePath(block.data.file.url)}}
              caption={block.data.caption}
            />
          );
        break;
        case 'album':
          renderVision.push(
            <PhotoAlbum
              images={block.data}
            /> 
          );
        break;
      }
    });
    renderVision.push(
      <ArticleSlider items={[]}/>,
      <ArticleBottom data={data}/>,
      <ArticleAuthorIntro
        color={'#FF4663'}
        pic={{uri:imagePath(data.api_author.avatar)}}
        name={data.api_author.name}
        intro={data.api_author.description}
      />
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
  
