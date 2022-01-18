import react from "react";
import { View, Text, Image, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Belo from '../../assets/belo.jpg';
import EstiloIncial from "./estilo.js";
import EstiloInicial from './estilo.js';

export default function TelaInicial(props) {
    return (


        <View style={EstiloIncial.container}>
            <View  style ={EstiloIncial.card}>
            <Text style ={EstiloIncial.textoPrincipal}>Belo horizonte.</Text>
            <Text style ={EstiloIncial.texto}>saiba o que visitar em belo horizonte!</Text>
            <Image style={EstiloInicial.img} source={Belo} />
            <View style = {EstiloIncial.botao}>
                <Button title="Ver Restaurantes"
                    onPress={() => { props.navigation.navigate('Tela Restaurante') }} 
                    color="#372d00"/>
            </View>
            <View style = {EstiloIncial.botao}>
                <Button title="Ver Passeios"
                    onPress={() => { props.navigation.navigate('Tela Passeios') }} 
                    color="#372d00"/>
            </View>
            <View style = {EstiloIncial.botao}>
                <Button title="Ver Hospedagem"
                    onPress={() => { props.navigation.navigate('Tela Hospedagem') }}
                    color="#372d00" />
            </View>
            </View>
        </View>


    )
}