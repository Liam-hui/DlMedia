import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'

import { 
    StyledContainer,
    Column,
    TopGradientWrapper,
} from './styles';

import SepLine from "@/components/SepLine";
import LinearGradient from 'react-native-linear-gradient';
import Item from "./Item";

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

const COLUMN_WIDTH = SCREEN_WIDTH*0.5-20;

const MARGIN_BOTTOM = 24;

export default function PeopleList(props) {

    const {items,scroll} = props;

    const [columns,setColumns] = useState([ [] , []]);
    const [columnHeight,setColumnHeight] = useState([0 ,0]);

    const columnsRef = useRef(columns);
    columnsRef.current = columns;

    const columnHeightRef = useRef(columnHeight);
    columnHeightRef.current = columnHeight;

    const getImageSize = (i) => new Promise(
        (resolve, reject) => {
          Image.getSize(items[i].image, (width, height) => {
            let newHeight = COLUMN_WIDTH*height/width;
            let itemPos = columnHeightRef.current[0];
            let myColumn = 0;
            if(columnHeightRef.current[1]<columnHeightRef.current[0]) {
                myColumn = 1;
                itemPos = columnHeightRef.current[1];
                setColumnHeight([columnHeightRef.current[0],columnHeightRef.current[1]+newHeight+MARGIN_BOTTOM]); 
            }
            else setColumnHeight([columnHeightRef.current[0]+newHeight+MARGIN_BOTTOM,columnHeightRef.current[1]]);
        
            let myColumns = columnsRef.current.slice();
            myColumns[myColumn].push(
                <Item
                    width={COLUMN_WIDTH}
                    height={newHeight}
                    item={items[i]}
                    scroll={scroll}
                    pos={itemPos+newHeight*0.5}
                />
            );
            setColumns(myColumns);

            console.log(columnHeightRef.current);
            resolve({ width, height });
          });
        },
        (error) => reject(error)
    );
    
    const setImages = async () => {
        for (let i=0;i<items.length;i++) {
            await getImageSize(i);
        }  
    }

    useEffect(() => {
        setImages();
    }, []);
    
    const setLayout = (e) => {
        console.log(e.nativeEvent);
    }

    return (
        <StyledContainer>
            <View style={{paddingHorizontal:20,marginVertical:20,zIndex:99}}>
                <SepLine title={'更多人物訪談'}/>
            </View>
            
            <View onLayout={setLayout} style={{flexDirection:'row'}}>
                <Column>
                    {columns[0]}
                </Column>
                <Column>
                    {columns[1]}
                </Column>
            </View>

            <TopGradientWrapper>
                <LinearGradient 
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0.0, 0.25, 1]}
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,1)', 'rgba(0,0,0,0)']} 
                    style={{height:'100%'}}
                />
            </TopGradientWrapper>

        </StyledContainer>
    );
}
  