import api from '@/services/api';
// import actions from '@/store/ducks/actions';
// import store from '@/store';
// import {Chat} from '@/pages/Chat/handle_chat';
// import * as mime from 'react-native-mime-types';
// import DeviceInfo from 'react-native-device-info';

export const Services = {
  get,
  getDetailById,
};

function get(url,set) {
  api.get(url, {
  })
  .then((response) => {
    if(response.data.message=='Success') {
      if(set)set(response.data.data);
      // console.log(response.data.data.data);
    }
    // else if(errorFunc)errorFunc();
  }, (error) => {
    console.log(error);
    // if(errorFunc)errorFunc();
  });
}

function getDetailById(id) {
  console.log('visions/'+id);
  api.get('visions/'+id, {
  })
  .then((response) => {
    console.log(response);
    if(response.data.message=='Success') {
      console.log(response.data);
    }
  }, (error) => {
    console.log(error);
  });
}

