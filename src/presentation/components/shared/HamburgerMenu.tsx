import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable style={{marginLeft:5}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    {/* <Text>Menu</Text> */}
                    <IonIcon name="menu" size={30} color={globalColors.primary}/>
                </Pressable>
            )
        })
    }, [])


    return (<></>)
};