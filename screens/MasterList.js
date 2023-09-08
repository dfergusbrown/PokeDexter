import { FlatList } from "react-native"
import { pokeData } from "../assets/data/MainDataSource";
import { View, Text, ImageBackground, Pressable, StyleSheet } from "react-native";

export const MasterList = ({navigation}) => {
    const [{id}] = pokeData
  
    const renderList = ({ item }) => {
        return (
          <View style={{ 
            alignItems: "center"
            }}>
            <Pressable
            onPress={() => {
              navigation.navigate('Detail Page', {item})
              console.log(item.id)
              }  
            }
            >
              <Text style={styles.TextItems}>{item.name}</Text>
            </Pressable>
          </View>
        );
      };

    return(
        <ImageBackground
        source={require("../assets/images/pokedexOpenlgWS.png")}
        resizeMode='contain'
        style={styles.Background}
        >
          <View style={styles.List}>
            <FlatList data={pokeData} renderItem={renderList} />
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  List: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 195,
    left: 0,
    right: 0,
    bottom: 0,
    height: "66%"
  },
  Background: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  TextItems: {
    fontSize: 24
  }
})