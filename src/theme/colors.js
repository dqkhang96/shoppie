const COLOR_PRIMARY = '#08d6cc';          // Light Blue
const COLOR_SECONDARY = '#D89113';        // Heavy Yellow
const COLOR_THIRD = '#D64E0A';            // Red + Brown

const Color = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  third: COLOR_THIRD,

  Text: {
    default: 'grey',
    button: 'white',
    price: '#f00',              // Red + Orange
    title: '#000',
    desc: '#000',
    name: COLOR_PRIMARY,
    link: COLOR_PRIMARY,               // Blue
  },

  TabBar: {
    active: COLOR_PRIMARY,
    inactive: 'gray',
  },

  Toolbar: {
    background: COLOR_PRIMARY,
    tint: '#fff',
  },

  Button: {
    Primary: {
      background: COLOR_PRIMARY,
      text: '#fff',
    },
    PrimaryGradient:{
      fromColor:"#13cff4",
      toColor:"#05a4c4"
    },
    Secondary:{
      background: COLOR_SECONDARY,
      text: '#fff',
    },

    Third: {
      background: COLOR_THIRD,
      text: '#fff',
    },

    Facebook: {
      background: '#3b5998',
      text: '#fff',
    },

    Google: {
      background: '#CC3333',
      text: '#fff',
    },

  },

  Screen: {
    background: '#fff',
  },

  ItemMenu: {
    background: '#fff',
  },

  InputForm: {
    focus: '#ffffff',
    notfocus: '#fbfbfb',
  },

  CodeInput: {
    borderColor: 'grey',
    textColor: 'black',
    background: 'white',
  },

  SectionScreen: {
    background: '#DCDCDC',              // Light Grey + White
    section: '#fff',
  },

  List: {
    separator: '#DCDCDC',
  },

  LeftMenu: {
    background: '#fff',
    text: '#000',
    separator: '#DCDCDC',

    Header: {
      background: COLOR_PRIMARY,
      text: '#ffff',
      separator: COLOR_PRIMARY,
    },

    Footer: {
      background: COLOR_SECONDARY,
      text: '#000',
      separator: COLOR_SECONDARY,
    }

  }
  ,

};

export default Color;