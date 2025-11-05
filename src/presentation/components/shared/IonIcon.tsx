import Icon from '@react-native-vector-icons/ionicons'
import type ionicGlyphmap from '../../../../node_modules/@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json';

interface Props {
    // name: string;
    name: keyof typeof ionicGlyphmap; // recupera las "keys" del objeto
    size?: number;
    color?: string;
}
export const IonIcon = ({ name, size = 20, color = 'black' }: Props) => {


    return (
        <Icon name={name} size={size} color={color} />
    );
};


