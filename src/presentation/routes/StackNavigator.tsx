import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';


export type RootStackParams = {
    Home: undefined,
    Product: { id: number, name: string },
    Products: undefined,
    Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true, // barra superior con titulo de la pantalla
            headerStyle: {
                elevation: 0, //linea que separa header de contenido
                shadowColor: 'transparent', //color de linea que separa header de contenido
            }
        }}>
            <Stack.Screen options={{}} name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />

            <Stack.Screen name="Product" component={ProductScreen} />

        </Stack.Navigator>
    );
}