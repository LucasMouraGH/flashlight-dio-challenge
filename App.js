import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';



const App = () => {
  const toggle = true;
  
  return (
    // if toggle return light
    <View style={toggle ? styles.containerLight : styles.container}>
        <TouchableOpacity onPress={() => {}}>
        <Image style={toggle ? styles.lightningOn : styles.lightningOff}
        source={toggle
        ? require('./assets/icons/eco-light.png')
        : require('./assets/icons/eco-light-off.png')
        }/>

        <Image style={styles.diologo}
        source={toggle
        ? require('./assets/icons/logo-dio.png')
        : require('./assets/icons/logo-dio-white.png')
        }/>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightningOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightningOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  diologo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 150,
  },
});