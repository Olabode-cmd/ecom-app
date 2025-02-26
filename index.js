import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import App from './App';
import Home from './(tabs)';

export default function Layout() {
    return (
        <NavigationContainer>
            {/* <App /> */}

            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={App}
                    options={{ title: 'Welcome' }}
                    headerShown={false}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(Layout);
