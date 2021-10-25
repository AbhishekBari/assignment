import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIcon from './assets/Icons/home.svg';
import SettingsIcon from './assets/Icons/settings.svg';
import FavoriteIcon from './assets/Icons/favorite.svg';
import AudioIcon from './assets/Icons/audiotrack.svg';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// start from here

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color, focused, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon height={size} width={size} fill={'green'}  />;
              case 'Favorite':
                return <FavoriteIcon height={size} width={size} fill={'green'} />;
              case 'Audio':
                return <AudioIcon height={size} width={size} fill={'green'} />;
              case 'Settings':
                return <SettingsIcon height={size} width={size} fill={'green'} />;
              default:
                return null;
            }
          },
        };
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        getComponent={() => require('./screens/Home').default}
        
      />
      <Tab.Screen
        name="Favorite"
        getComponent={() => require('./screens/Favorite').default}
      />
      <Tab.Screen
        name="Audio"
        getComponent={() => require('./screens/Audio').default}
      />
      <Tab.Screen
        name="Settings"
        getComponent={() => require('./screens/Settings').default}
      />
    </Tab.Navigator>
  );
};


const HomeDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homedrawer" component={HomeTabNavigation} />
      <Drawer.Screen name="Favoritedrawer" component={HomeTabNavigation} />
      <Drawer.Screen name="Musicdrawer" component={HomeTabNavigation} />
      <Drawer.Screen name="Settingsdrawer" component={HomeTabNavigation} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              color: 'green',
              fontWeight: '700',
            },
          }}>
          <Stack.Screen
            name="Login"
            getComponent={() => require('./screens/Login').default}
          />
        
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={HomeDrawerNavigation}
            // getComponent={() => require('./screens/Home').default}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
