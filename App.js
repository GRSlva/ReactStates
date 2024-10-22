import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import {useState} from 'react'

export default function App() {

  let fecha = './assets/bozonormal.jpg';
  let abre = './assets/bozopresidente.jpg';

  let [img, setImg] = useState(require(fecha))
  let [count, setCount] = useState(0)
  let [nome, setNome] = useState('Rodrigo Ximenes')

  function handleClick(){
    if (count == 0){
      setImg(require(abre))
      setCount(1)
      setNome('PRESIDENTE BOLSONARO')
    }else{
      setImg(require(fecha))
      setCount(0)
      setNome('Rodrigo Ximenes')
    }
  }



  return (
    <View style={styles.container}>
      <Text>Bom dia {nome}</Text>
      <Image source={img} style={styles.img}></Image>
      <Button title="cabeça" onPress={handleClick}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:250,
    height:250,
  }
});
