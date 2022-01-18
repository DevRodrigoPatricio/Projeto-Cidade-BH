import { StyleSheet } from "react-native";
 const EstiloIncial = StyleSheet.create({
     img:{
         width: 300,
         height: 200,
         marginBottom: 20
     },
     container: {
         flex: 1,
         backgroundColor:'#cce7e8',
         justifyContent:"center",
         alignItems:"center",
          
         
     }, 
     card: {
         width: 350,
         height: 450,
         backgroundColor:"#fff", 
         borderRadius: 15,
         borderColor:"#979797",
         borderWidth: 2,
         alignItems: "center",
         justifyContent:"center"

     },
     textoPrincipal: {
         textAlign:"center",
         fontSize: 25,
         marginBottom: 20,
         fontWeight:'bold',
         
     },
     botao: {
        padding: 5, 
     },
     texto: { 
         fontStyle:'italic',
         fontSize: 14,
         padding: 5
     }
 })
 export default EstiloIncial;