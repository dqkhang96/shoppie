import {
  Dimensions,
} from 'react-native';

export default class stateStorage {
  static appColor = '#08d6cc';
  static backgroundColor = '#fbfbfb';
  static SCREEN_WIDTH = Dimensions.get('screen').width;
  static SCREEN_HEIGHT = Dimensions.get('screen').height;
  static heading1 = 25;
  static paragraph = 15;
  static user = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    accessToken: '',
  }
}