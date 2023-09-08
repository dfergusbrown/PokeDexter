import { ImageBackground, View, StyleSheet, Text } from "react-native"
import { pokeData } from "../assets/data/MainDataSource";

export const DetailPage = ({route}) => {
    const { item } = route.params;
    console.log(route.params)
    return (
        <View style={styles.container}>
            <ImageBackground
                      source={require("../assets/images/pokedexSmallOpWhiteScreen.png")}
                      resizeMode='contain'
                      style={{
                        flex:1,
                        justifyContent: 'center',
                        backgroundColor: 'black'
                      }}
            >
                
                <View style={styles.screen}>
                    <Text>id: {item.id}</Text>
                    <Text>name: {item.name}</Text>
                    <Text>this is some random text</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    screen: {
        height: "50%",
        marginLeft: "10%",
        marginTop: '5%',
        padding: '0%',
        borderStyle: 'solid'
    }
});