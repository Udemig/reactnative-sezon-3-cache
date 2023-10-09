import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListPostsController from './src/screens/ListPosts/ListPostsController';
import AddPostController from './src/screens/AddPost/AddPostController';
import AppBar from './src/components/AppBar';

const Stack = createNativeStackNavigator();

function App() {
  const [activePage, setActivePage] = React.useState('Gönderiler');

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppBar activePage={activePage} setActivePage={setActivePage} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ListPost" component={ListPostsController} />
          <Stack.Screen name="AddPost" component={AddPostController} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
