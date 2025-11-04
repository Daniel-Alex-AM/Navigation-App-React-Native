import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets(); //Provee margenes establecidos de "safe area", considerando notch superior, por ejemplo
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: top + 20
        }}>
            <Text>
                ProfileScreen.tsx
            </Text>

            <PrimaryButton label='Abrir Menu'
                onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer)}}
            />
        </View>
    );
};