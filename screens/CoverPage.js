import * as React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button 
} from 'react-native';

export const CoverPage = ({navigation}) => {

    return(
        <View style={styles.container}>
        <ImageBackground 
          source={require("../assets/images/pokedexterClosed.jpg")}
          resizeMode='contain'
          style={{
            flex:1,
            justifyContent: 'center',
          }}
        >
          <View>
            <Text style={styles.logo}>PokeDexter</Text>
            <Button
            title='start'
            onPress={() => navigation.navigate('Master List')}
            />
          </View>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB1D2E'
  },
  logo: {
    color: "white",
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30
    // fontFamily: 'Pokemon Hollow'
  }
});