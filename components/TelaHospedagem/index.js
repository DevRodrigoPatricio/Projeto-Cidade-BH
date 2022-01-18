import react from "react";
import {View, Text , ScrollView, Image} from 'react-native';
import catin  from '../../assets/cantin.jpg';
import ouro from   '../../assets/ouro.jpg';
import fasano from '../../assets/fasano.jpg';
import estilo from './estilo.js';

export default function TelaHospedagem(){
    return (
        <ScrollView style={estilo.container}>
            <View>
                
            <Text style={estilo.TextoPrincipal}>Pousadas e hotéis em Belo Horizonte. </Text>    
            <Text style={estilo.textoNormal}> Belo Horizonte conta com excelentes hotéis e Pousadas cujos preços podem variar de R$ 200,00 à 1500,00.
                Veja algumas Pousadas abaixo.
            </Text>
            <View style={estilo.card}>
            <Image style= {estilo.img} source={ catin}/>
                <Text style={estilo.textoCard}>Pousada Cantim de BH</Text>
                <Text style={estilo.textoNormal}>Valor médio: R$ 286,00</Text>
                <Text style={estilo.textoNormal}>Localização: Rua Cissus 148 Bairro Juliana, Belo Horizonte- MG</Text>
            </View>
            <View style={estilo.card}>
            <Image style= {estilo.img} source={ ouro}/>
                <Text style={estilo.textoCard}>Ouro Minas Palace Hotel</Text>
                <Text style={estilo.textoNormal}>Valor médio: R$ 256,00</Text>
                <Text style={estilo.textoNormal}>Localização: Av. Cristiano Machado, 4001 - Ipiranga, Belo Horizonte - MG</Text>
            </View>
            <View style={estilo.card}>
            <Image style= {estilo.img} source={ fasano}/>
                <Text style={estilo.textoCard}>Hotel Fasano Belo Horizonte</Text>
                <Text style={estilo.textoNormal}>Valor médio: R$ 1.477,00</Text>
                <Text style={estilo.textoNormal}>Localização: R. São Paulo, 2320 - Lourdes, Belo Horizonte - MG</Text>
            </View>
            </View>
        </ScrollView>
    )
}