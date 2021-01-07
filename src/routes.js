import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { navigationRef } from '@/utils/RootNavigation';

import Main from '@/pages/Main';
import ArticleDetail from '@/pages/ArticleDetail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator 
            initialRouteName='main' 
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name='main' initialParams={{}} component={Main} />
            <Stack.Screen name='detail' initialParams={{}} options={{gestureEnabled: true}} component={ArticleDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
