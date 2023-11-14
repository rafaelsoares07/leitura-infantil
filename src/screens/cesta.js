import React, { useEffect, useState } from "react"
import { StyleSheet, Text , Image ,Dimensions, View, Button} from "react-native"
import {Audio, InterruptionModeAndroid, InterruptionModeIOS} from "expo-av"

import topo from "../images/topo.jpeg"

import aud from "./teste1.mp3"

const widthScreen = Dimensions.get("screen").width;



export default function Cesta({ titulo, image }) {

const [audio, setAudio] = useState(false);



    useEffect(()=>{
        Audio.requestPermissionsAsync().then(({granted})=>{
            console.log("tenho autolizacao?"+ granted)
            if(granted){
                Audio.setAudioModeAsync({
                    allowsRecordingIOS:true,
                    interruptionModeAndroid:InterruptionModeIOS.DoNotMix,
                    playsInSilentModeIOS:true,
                    shouldDuckAndroid:true,
                    InterruptionModeAndroid:InterruptionModeAndroid.DoNotMix,
                    playThroughEarpieceAndroid:true
                })
            }
        })
    },[])
    
    return(
        <>
            <Image 
                source={topo} 
                style={estilos.topo}            
            />
            <Text style={estilos.title}>{titulo}</Text>

            <View style={estilos.container}>
                <Text>Cesta de verduras</Text>
                <Text>Jenny Fazenda</Text>
                <Text>Produtos Selecionados direto da fazendo dela </Text>    
            </View>

           <Button
            title="ouvir"
            onPress={emitirSom}
           />
        </>

    )
}

const estilos = StyleSheet.create({
    topo: {
        width:widthScreen,
        height:150
    },
    title:{
        color:"white", 
        fontSize:30,
        position:"absolute",
        textAlign:"center",
        width:"100%",
        top:35
    },
    container:{
        padding:20,
    },
    botao:{
        width:"50%",
        display:"inline",
    }
});

async function emitirSom(){
    
    try{
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync(require('./teste1.mp3'));
        await soundObject.playAsync();
    }catch(e){
        console.log(e)
    }
    
}