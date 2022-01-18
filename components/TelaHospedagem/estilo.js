import { StyleSheet } from "react-native";
const estilo = StyleSheet.create({
    container: {
        backgroundColor:'#cce7e8'
    },
    img: {
        width: 280,
        height: 100,
        borderRadius: 40,
        marginBottom:30
    },
    card:{
        width: 300,
        height: 300,
        backgroundColor:'white',
        padding:10,
        margin: 40,
        borderRadius: 40,
        borderWidth: 1
    }, 
    TextoPrincipal: { 
        fontSize: 26, 
        fontWeight: 'bold'
    },
    textoCard:{
        fontSize: 20,
        fontWeight:'bold'
    },
    textoNormal: {
        fontSize: 16,
        fontStyle:'italic'
    }
})
export default estilo;