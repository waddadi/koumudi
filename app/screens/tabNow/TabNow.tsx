import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNowHome} from './TabNowHome';

export function TabOne() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNowHome} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </>
  );
}

const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen </Text>
    </View>
  );
}
