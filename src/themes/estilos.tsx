import { StyleSheet } from "react-native";
import { Colores } from "./colores";

export const estilos = StyleSheet.create({
    botonGenerico:{
        width:80,
        textAlign: 'center',
        padding: 10,
    
        fontSize: 30,
        fontWeight: 300,
        borderWidth: 2,
        borderColor: Colores.negro,
        borderRadius: 10,   
    },  
    
    botonAmplio:{
        width:180,
    },
    
    botonOperador: {
        borderColor: Colores.blancorojizo,
        backgroundColor: Colores.darkrojo,
        color: Colores.blanco,
    },

    botonNumero: {
        borderColor: Colores.blanco,
        backgroundColor: Colores.darknaranja,
        color: Colores.blanco,
    },


    botonOtros: {
        borderColor: Colores.blanco,
        backgroundColor: Colores.darkamarillo,
        color: Colores.blanco,
    },

    pantalla1: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color: Colores.blanco,
    },

    pantalla2: {
        fontSize: 40,
        fontWeight:300,
        marginBottom:10,
    },
    
    container: {
        flex: 1,
        backgroundColor: Colores.fondocalido,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      },
      fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
  });
