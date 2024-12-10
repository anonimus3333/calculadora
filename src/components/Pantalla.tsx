import { Text, type TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { estilos } from '../themes/estilos';

interface Props extends TextProps {
  styleSheet?: StyleProp<TextStyle>,
};

export const Pantalla = ({children, styleSheet, ...rest}:Props) => {
  return (
    <Text style={[estilos.pantalla1, styleSheet]} {...rest}>
        {children}
    </Text>
  )
}

