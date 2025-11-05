import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import Icon from '@react-native-vector-icons/ionicons'
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
    // const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 <Text>Menu</Text>
    //             </Pressable>
    //         )
    //     })
    // }, [])

    return (
        <View>
            <HamburgerMenu />
            <Text>
                Tab1Screen.tsx
            </Text>

            <IonIcon name='rocket-outline' size={100}/>
        </View>
    );
};