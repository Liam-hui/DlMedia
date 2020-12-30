import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import storage from '@/utils/storage';

export default function Bookmark(props) {

  const {id,size} = props;
  const [isBookmarked,setIsBookmarked] = useState(false);

  useEffect(() => {
    bookmarkInit();
  }, []);

  const bookmarkInit = async () => {
    let check = await storage.checkBookmarked(id);
    if(check) setIsBookmarked(true);
  }

  const bookmarkAction = async () => {
    let check = await storage.checkBookmarked(id);
    if(check){
      storage.removeBookmark(id);
      setIsBookmarked(false);
    }
    else {
      storage.insertBookmark(id);
      setIsBookmarked(true);
    }
  }
  
  return (
    <TouchableOpacity activeOpacity={1} style={{padding:size*0.3}} onPress={bookmarkAction}>
      <Image source={isBookmarked? (require("../../../assets/images/icons/icon-bookmarked.png")):(require("../../../assets/images/icons/icon-bookmark.png"))} style={{height:size,width:size}} resizeMode={'contain'}/>
    </TouchableOpacity> 
  );
}
