import { Platform } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
  tabBarHeight: 50,
  headerShadown: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 4.65,
    
    elevation: 1.5
  }
};