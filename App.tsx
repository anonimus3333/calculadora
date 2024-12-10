import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { Colores } from './src/themes/colores';
import { estilos } from './src/themes/estilos';

//Pantalla 2 sobra

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
        resultado,operacion  } = useCalculadora();

  return (
  
    <View style={estilos.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla styleSheet={estilos.pantalla2} numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla styleSheet={estilos.pantalla2} numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />
{/* Aspectos distintos en las operacioes, fondo no blanco*/}
    <View style={estilos.fila}>
      <BotonOperacion label='C' styleSheet={estilos.botonOtros} onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' styleSheet={estilos.botonOtros} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' styleSheet={estilos.botonOtros} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' styleSheet={estilos.botonOperador} onPress={()=>operacion('/')}></BotonOperacion>
    </View>
    <View style={estilos.fila}>
      <BotonOperacion label='7' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' styleSheet={estilos.botonOperador} onPress={()=>operacion('*')}></BotonOperacion>
    </View>
    <View style={estilos.fila}>
      <BotonOperacion label='4' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' styleSheet={estilos.botonOperador} onPress={()=>operacion('-')}></BotonOperacion>
    </View>
    <View style={estilos.fila}>
      <BotonOperacion label='1' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' styleSheet={estilos.botonNumero} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' styleSheet={estilos.botonOperador} onPress={()=>operacion('+')}></BotonOperacion>
    </View>
    <View style={estilos.fila}>
      <BotonOperacion label='0' styleSheet={[estilos.botonNumero, estilos.botonAmplio]} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' styleSheet={estilos.botonOtros} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' styleSheet={estilos.botonOperador} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

