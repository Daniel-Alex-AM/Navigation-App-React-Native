import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, type DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();

    const phoneWidth = dimensions.width;
    const phoneBig = phoneWidth >= 758;



    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent {...props} />} //Lo que se haga en el componente es lo que se mostrará en el drawer

            screenOptions={{
                headerShown: false, //mostrar header del drawer (el titulo)

                drawerType: phoneBig?'permanent':'slide', //El drawer lateral Empuja el contenido de la pantalla
                drawerActiveBackgroundColor: globalColors.primary, //fondo del elemento abierto actual
                drawerActiveTintColor: 'white', // color de texto de elemento abierto actual
                drawerInactiveTintColor: globalColors.primary, //color texto elemento inactivo
                drawerItemStyle: { //Estilo de la caja del elemento del drawer
                    borderRadius: 100,
                    paddingHorizontal: 20,
                },
                drawerStyle: {
                    width: phoneBig?phoneWidth/3: dimensions.width*0.75
                }

            }}
        >
            {/* <Drawer.Screen name="Stack Navigator" component={StackNavigator} /> */}
            <Drawer.Screen 
                options={{
                    drawerIcon: ((props)=>(<IonIcon name="bonfire-outline" color={props.color} />))
                }}
                name="Tabs" component={BottomTabsNavigator} />
            <Drawer.Screen 
                options={{
                    drawerIcon: ((props) => (<IonIcon name="person-circle-outline" color={props.color} />))
                }}
                name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (

        <DrawerContentScrollView>

            {/* Esta es una caja que se mostrara como primer elemento de la lista de items del Drawer */}
            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50

            }} />

            {/* Opciones del Menu (lista de items) */}
            <DrawerItemList {...props} />
            {/* <Text style={{position:'absolute', bottom: 0}}>Hola Mundo</Text> */}
        </DrawerContentScrollView>
    )
}