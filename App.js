import * as React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './Main';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FeedScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Message Screen</Text>
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <>
      <Button
        onPress = { () => navigation.navigate('Settings') }
        title="FButton"
      />
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
    </>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <>
      <Button
        onPress = { () => navigation.navigate('Home') }
        title="HButton"
      />
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </>
  );
}

var ss = HomeScreen;

function LogoFunc({ navigation }) {
  const [screen, setScreen] = React.useState(App.state);
  return (
    <View>
      <Button
        onPress = { () => {
          console.log(ss)
          ss = FeedScreen
          navigation.navigate('Feed')

        } }    
        title="FFButton"
      />
    </View>
  );
}
class LogoTitle extends React.Component {
  render() {
    return (
      <Button
        onPress={ () => {
          console.log(Stack.Screen.props);

                            } }
        title="LButton"
      />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ss}
            options={{
              headerLeft: props => <LogoFunc />,
              headerTitle: props => <Text>Title</Text>,
              headerRight: props => <Button
                onPress={ ({navigation}) => { navigation.navigate('Feed') } }
                title='RButton'
              />,
            }}
          />
          
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerLeft: props => <LogoFunc />,
              headerTitle: props => <Text>Title</Text>,
              headerRight: props => <Button
                onPress={ ({navigation}) => { navigation.navigate('Feed') } }
                title='RButton'
              />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}




