import { Pressable, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { Colores } from "../themes/colores";
import { estilos } from '../themes/estilos';

interface Props {
    label: string,
    styleSheet: StyleProp<TextStyle>,
    onPress?: () => void;
}

export const BotonOperacion = ({label, styleSheet, onPress}:Props) => {
    return (
        <Pressable>
            <Text 

                style={[estilos.botonGenerico, styleSheet]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
