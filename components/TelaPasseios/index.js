import react from "react";
import { View, Text, ScrollView, Image } from 'react-native';
import Praca from '../../assets/Praca.jpg';
import Museu from '../../assets/Museu.jpg';
import Centro from '../../assets/Centro.jpg';

import estilos from './estilo.js'

export default function TelaPasseios() {
    return (
        <ScrollView style={estilos.container}>
            <View style={estilos.tela}>
                <Text style= {estilos.textoPrincipal}>Passeios em BH.</Text>
                <Text style= {estilos.textoNormal}>Belo Horizonte , uma cidade com muitos atração , praças , museus , centros culturais e etc,veja três exempos na cidade de belo Horizonte:  </Text>
                <View style={estilos.card}>
                    <Text style= {estilos.textoPrincipal}>Praça da Liberdade</Text>
                    <Image style={estilos.img} source={Praca} />
                </View>
                <View style={estilos.card}>
                    <Text style= {estilos.textoPrincipal}>Museu das Minas e do Metal – MM Gerdau</Text>
                    <Image style={estilos.img} source={Museu} />
                </View>
                <View style={estilos.card}>
                    <Text style= {estilos.textoPrincipal}> Centro Cultural Banco do Brasil de BH</Text>
                    <Image style={estilos.img} source={Centro} />
                </View>
            </View>
        </ScrollView>
    )
}