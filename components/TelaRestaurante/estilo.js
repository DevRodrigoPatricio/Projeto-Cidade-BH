import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        
        backgroundColor: "#cce7e8",
        
    },
    img: {
        borderRadius: 50,
        width: 280,
        height: 100,
        marginTop: 10,
    },
    card: {
        width: 300,
        height: 250,
        backgroundColor:'white',
        marginBottom: 20,
        alignItems:'center',
        borderWidth: 2, 
        borderRadius : 50
    }, 
    tela: {
        alignItems: "center"
    },

    textoPrincipal:{
        fontWeight:'bold',
        fontSize: 26,
        marginBottom: 20
    },
    textoNormal: {
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 20
    }
})
export default estilo;