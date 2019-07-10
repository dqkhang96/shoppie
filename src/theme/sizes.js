import { Dimensions } from 'react-native';

export const screen = Dimensions.get("window");
export const SEARCH_WIDTH = Dimensions.get("window").width - 100;

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;


export const Size = {
  CategoryGrid:
  {
    columns: 2,
    itemMargin: 10,
    itemHeight: 140,
    headerHeight: 40,
  },

  Button: {
    height: 50,
    borderRadius: 25,
    borderRadiusSmall: 5,
    widthRatio: .8,
    textSize: 18,

  },

  Text: {
    xIcon: 20,
    pageTitle: 22,
    sectionTitle: 17,
    normal: 15,
    button: 18,
    link: 13,
    sub: 15,
    leftMenu: 17,
    Margin: {
      left: 5,
      right: 5,
      bottom: 5,
      top: 5
    }
  },

  TextInput: {
    height: 50
  },

  TabIcon: {
    width: 20,
    height: 20,
  },
  Icon: {
    width: 20,
    height: 20
  },
  Title: {
    Margin: {
      bottom: 5,
      left: 0,
      right: 0,
      top: 0
    }
  },

  LeftMenu: {
    Icon: {
      height: 24,
      width: 24,
      Margin: {
        left: 5,
        right: 5,
      },
    },
    Separator: {
      height: 5,
      Margin: {
        left: 0,
        right: 0,
      }
    },
  },

  Section: {
    Margin: {
      top: 5,
      left: 5,
      right: 5,
      bottom: 5
    },
    padding: 5,
    margin: 5
  }
};

export default Size;


export const sp = (percel) => {
  const p = parseFloat(percel, 10)
  if (SCREEN_HEIGHT < SCREEN_WIDTH)
    return SCREEN_HEIGHT * p / 100
  else return SCREEN_WIDTH * p / 100
}

export const lp = (percel) => {
  const p = parseFloat(percel, 10)
  if (SCREEN_HEIGHT > SCREEN_WIDTH)
    return SCREEN_HEIGHT * p / 100
  else return SCREEN_WIDTH * p / 100
}

export const wp = (percel) => {
  const p = parseFloat(percel, 10)
  return SCREEN_WIDTH * p / 100
}

export const hp = (percel) => {
  const p = parseFloat(percel, 10)
  return SCREEN_HEIGHT * p / 100
}