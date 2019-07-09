const COLOR_PRIMARY = '#08d6cc';
const COLOR_SECONDARY = '#D89113';
const COLOR_THIRD = '#D64E0A';

const Color = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  third: COLOR_THIRD,
  
  Text:{
    default: '#000',
    price: '#f00',
    title: COLOR_PRIMARY,
    desc: '#000',
    name: COLOR_PRIMARY,
    link: COLOR_PRIMARY,
  },

  TabBar:{
    active: COLOR_PRIMARY,
    inactive: 'gray',
  },

  Toolbar:{
    background: COLOR_PRIMARY,
    tint: '#fff',
  },
  
  Button:{
    Primary:{
      background: COLOR_PRIMARY,
      text: '#fff',
    },
    PrimaryGradient:{
      fromColor:"#08d6cc",
      toColor:"#00BBE1"
    },
    Secondary:{
      background: COLOR_SECONDARY,
      text: '#fff',
    },

    Third:{
      background: COLOR_THIRD,
      text: '#fff',
    },

    Facebook:{
      background: '#3b5998',
      text: '#fff',
    },

    Google:{
      background: '#CC3333',
      text: '#fff',
    },

  },

  Screen:{
    background: '#eaeaea',
  },

  ScreenLogin:{
    background: '#fff',
  },

  SectionScreen:{
    background: '#DCDCDC',
    section: '#fff',
  },

  List:{
    separator: '#DCDCDC',
  },

  LeftMenu:{
    background: '#fff',
    text: '#000',
    separator: '#DCDCDC',

    Header:{
      background: COLOR_PRIMARY,
      text: '#ffff',
      separator: COLOR_PRIMARY,
    },

    Footer:{
      background: COLOR_SECONDARY,
      text: '#000',
      separator: COLOR_SECONDARY,
    }
    
  }
  ,

};

export default Color;