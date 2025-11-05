import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            sceneStyle: {
                backgroundColor: globalColors.background
            },
            tabBarActiveTintColor: globalColors.primary,
            headerShown: true, //quitar header, titulo del tab
            tabBarLabelStyle: {
                marginBottom: 5
            },
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent'
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0
            }
        }}>
            <Tab.Screen
                name="Tab1"
                options={{
                    title: 'TAB 1 (simple screen)',
                    tabBarIcon: (props) =>
                        (<Text style={{ color: props.color }}>T1</Text>)
                }}
                component={Tab1Screen} />
            <Tab.Screen
                name="Tab2"
                options={{
                    title: 'TAB 2 (Top Tabs)',
                    tabBarIcon: (props) =>
                        (<Text style={{ color: props.color }}>T2</Text>)
                }}
                component={TopTabsNavigator} />
            <Tab.Screen
                name="Tab3"
                options={{
                    title: 'TAB 3 (Stack)',
                    tabBarIcon: (props) =>
                        // (<Text style={{ color: props.color }}>T3</Text>)
                        (<IonIcon name='home-outline' color={props.color} />)

                }}
                component={StackNavigator} />
        </Tab.Navigator>
    );
};