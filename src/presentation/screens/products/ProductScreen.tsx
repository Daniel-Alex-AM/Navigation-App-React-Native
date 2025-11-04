import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const ProductScreen = () => {

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();
    const {id, name} = params

    useEffect(() => {
      navigation.setOptions({
        title: name
      })
    }, []) // SIN DEPENDENCIAS, se ejecuta la primera vez que se renderiza la pantalla y ya
    

    return (
        <View>
            <Text>
                Product Screen
            </Text>

            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
                {id} - {name}
            </Text>
        </View>
    );
};