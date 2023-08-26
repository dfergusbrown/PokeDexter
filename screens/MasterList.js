import { FlatList } from "react-native"
import { pokeData } from "../assets/data/MainDataSource";
import { View, Text, ImageBackground } from "react-native";

export const MasterList = () => {
    const renderList = ({ item }) => {
        return (
          <View style={{ 
            alignItems: "center"
            }}>
            <Text>{item.name}</Text>
          </View>
        );
      };

    return(
        <ImageBackground
        source={require("../assets/images/pokedexOpenlg.png")}
        resizeMode='contain'
        style={{
          flex:1,
          justifyContent: 'center',
          zIndex: 1
        }}
        >
          <View style={{ 
            // flex: 3,
            zIndex: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 200,
            left: 0,
            right: 0,
            bottom: 0,
            height: "65%"
            }}>
            <FlatList data={pokeData} renderItem={renderList} />
          </View>
        </ImageBackground>
    )
}