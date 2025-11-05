import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';


const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
                <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
            </Tab.Navigator>
        </>
    );
};