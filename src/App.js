import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './component/Home';
import Me from './component/Me';
import {Provider} from 'react-redux';
import {store} from './store';
import Detail from './component/Detail';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        headerBackTitle: null,
        headerTruncatedBackTitle: null,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({title: route.params.title})}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? require('./assets/home-selected.png')
                  : require('./assets/home-unselected.png');
                return (
                  <Image
                    source={iconName}
                    style={{width: size, height: size}}
                  />
                );
              } else if (route.name === 'Me') {
                iconName = focused
                  ? require('./assets/me-selected.png')
                  : require('./assets/me-unselected.png');
                return (
                  <Image
                    source={iconName}
                    style={{width: size, height: size}}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1296db',
            inactiveTintColor: '#cdcdcd',
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Me" component={Me} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
