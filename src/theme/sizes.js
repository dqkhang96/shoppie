import {Dimensions} from 'react-native';

export const screen = Dimensions.get("window");
export const SEARCH_WIDTH = Dimensions.get("window").width - 100;

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export  const SCREEN_WIDTH = Dimensions.get("window").width;


export const Size = {
  CategoryGrid:
  {
    columns: 2,
    itemMargin: 10,
    itemHeight: 140,
    headerHeight: 40,
  },
  
  Button:{
    height: 50,
    borderRadius: 25,
    widthRatio: .8,
    textSize: 18,

  },

  Text:{
    pageTitle: 22,
    sectionTitle: 17,
    normal: 17,
    button: 18,
    link: 17,
    sub: 15,
    leftMenu:17,
  },

  TabIcon:{
    width:20,
    height:20,
  },

  LeftMenu:{
    Icon:{
      height:24,
      width: 24,
      Margin:{
        left:5,
        right:5,
      },
    },
    Separator:{
      height:5,
      Margin:{
        left:0,
        right:0,
      }
    },
  },

  Section:{
      Margin:{
        top: 5,
        left: 0,
        right: 0,
      }
    
  }
};

export default Size;