import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MasterList } from '../screens/MasterList';
import { CoverPage } from '../screens/CoverPage';
import { DetailPage } from '../screens/DetailPage';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Cover Page' 
                screenOptions={{headerShown: false}}>
                    <Stack.Screen 
                    name='Cover Page'
                    component={CoverPage}
                    />
                    <Stack.Screen 
                    name='Master List'
                    component={MasterList}
                    options={{title: 'Pokedex List'}}
                    />
                    <Stack.Screen 
                    name='Detail Page'
                    component={DetailPage}
                    options={{title: 'Pokemon Entry'}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
