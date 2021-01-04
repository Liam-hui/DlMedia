import React, {useState, useEffect} from 'react';
import {View} from 'react-native'

import { 
    SectionTitleWrapper,
    SectionTitle
} from './styles';
import SepLine from "@/components/SepLine";

export default function PageTitle(props) {

    return (
        <SectionTitleWrapper>
            <View style={{width:70,overflow:'hidden'}}>
                <View style={{width:100,transform: [{scale:0.8},{translateX:-10}]}}>
                    <SepLine color='white'/>
                </View>
            </View>
            <SectionTitle>{props.title}</SectionTitle>
        </SectionTitleWrapper>
    );
}
  