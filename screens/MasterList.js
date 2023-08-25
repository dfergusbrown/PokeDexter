import { FlatList } from "react-native-gesture-handler"
import { pokeData } from "../assets/data/MainDataSource";
import { View, Text, ImageBackground } from "react-native";

export const MasterList = () => {
    const renderList = ({ item }) => {
        return (
          <View>
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
        }}
        >
          <FlatList data={pokeData} renderItem={renderList}/>
        </ImageBackground>
    )
}