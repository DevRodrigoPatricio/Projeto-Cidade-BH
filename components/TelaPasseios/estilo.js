import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        backgroundColor:'#cce7e8',
    },
    card:{
        width: 300,
        height: 300,
        backgroundColor:'white',
        padding: 20,
        marginBottom: 20,
        alignItems:'center',
        borderRadius : 5,
        borderWidth: 1
    },
    img:{
        width: 200,
        height: 150,
        marginTop: 50
        
    },
    tela: {
        alignItems:'center'
    }, 
    textoPrincipal: {
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize: 26,

    },
    textoNormal: {
        fontSize: 16,
        fontStyle:'italic',
        padding: 20
    }
})

export default estilo;