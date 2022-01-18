import react from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import RestaurantePrimeiro from '../../assets/restaurante1.jpg';
import Bar from '../../assets/bar.jpg';
import Gastro from '../../assets/gastro.jpg';
import estilo from './estilo.js';

export default function TelaRestaurante() {
    return (
       
        <ScrollView style = {estilo.container}>
            <View style= {estilo.tela}>
            <Text style= {estilo.textoPrincipal}>Bares e Restaurantes</Text>
            <Text style={estilo.textoNormal}> O prazer de uma boa comida voçê encontra em BH . Com inúmeras opções de Restaurantes,
                a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha ciçara , confira
                alguns bares e restaurantes famosos.</Text>
            <View style= {estilo.card}>
                <Image style={estilo.img} source={RestaurantePrimeiro} />
                <Text style= {estilo.textoPrincipal}>La Macelleria Lourdes</Text>
                <Text style={estilo.textoNormal}>Localização:Rua Fernandes Tourinho n° 801</Text>
            </View>
            <View style= {estilo.card}>
                <Image style={estilo.img} source={Bar} />
                <Text style= {estilo.textoPrincipal}>Redentor Bar</Text>
                <Text style={estilo.textoNormal}>localização:Rua Fernandes Tourinho n° 500</Text>
            </View>
            <View style= {estilo.card}>
                <Image style={estilo.img} source={ Gastro} />
                <Text style= {estilo.textoPrincipal}>Gastrô Hub</Text>
                <Text style={estilo.textoNormal}>Localização:Rua Cícero Ferreira n° 15</Text>
            </View>
            </View>
        </ScrollView>
      
    )
}