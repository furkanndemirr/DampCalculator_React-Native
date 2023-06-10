import React, { useState } from "react";
import { SafeAreaView,Alert,Text,View,TextInput,StyleSheet,Button,ImageBackground,TouchableOpacity} from "react-native";
import CustomButton from "./src/Button/Button";
function App(){
  var kurusicaklik = [16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56];
  // var kurusicaklik2 = [];
  var fark = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5];
  var fark2= [0.0,0.2,0.4,0.6,0.8,1.0,1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0];
  var doubledizi = [
    [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],
    [99,99,99,99,96,96,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97],
    [97,97,97,97,92,92,93,93,93,93,93,94,94,94,95,95,95,95,95,95,95],
    [95,95,95,95,88,88,88,89,89,89,90,90,92,92,92,92,92,92,92,92,92],
    [93,93,93,93,84,84,85,86,86,87,87,88,88,89,90,90,90,90,90,90,90],
    [91,91,91,91,80,81,82,83,83,84,85,85,85,86,87,87,87,87,87,87,87],
    [89,89,90,90,76,77,78,79,80,81,81,82,82,83,84,84,84,84,84,84,85],
    [87,87,88,88,72,73,74,75,76,78,79,79,79,80,81,81,81,81,82,82,83],
    [85,85,86,86,69,70,71,72,74,75,75,76,77,78,79,79,79,79,80,80,81],
    [83,83,84,85,65,66,67,69,71,72,72,73,74,75,76,76,76,76,77,78,79],
    [81,81,82,83,62,64,65,66,68,69,69,70,71,72,73,74,74,74,75,76,77],
    [79,80,81,81,59,61,62,63,64,66,66,68,70,70,71,72,72,72,73,74,75],
    [77,78,80,80,56,58,59,61,62,63,64,65,66,68,68,70,70,70,71,72,73],
    [76,77,78,79,52,54,56,58,60,61,62,60,64,65,66,67,68,68,69,70,70],
    [74,75,76,77,49,51,53,55,57,58,59,60,61,62,63,64,64,66,67,68,68],
    [72,73,74,75,46,48,51,53,55,56,57,58,59,60,61,62,62,64,65,66,66],
    [70,72,72,74,43,45,47,50,52,53,54,55,56,58,59,60,60,62,63,64,64],
    [68,70,70,72,40,43,43,47,49,51,52,53,54,55,56,57,58,60,61,62,62]
  ];
  const [sicaklik,setsicaklik]=useState([]);
  const [farks,setfarks]=useState([]);
  const [resultfark,setresult] = useState(null);
  const [resultindis,setresultindis] = useState(null);
  const [ilkindis,setilkindis] = useState(null);
  const [enson,setenson] = useState(null);
 
  function setSicaklik (sicak) {
    setsicaklik(sicak);
  }
  function farkss (farkss) {
    setfarks(farkss);
  }
  function farkibul(){
    if (!sicaklik || !farks) {
      Alert.alert('Hata','Lütfen Tüm Alanları Doldurunuz.');
      return;
    }
    if (sicaklik<16 || sicaklik>56) {
      Alert.alert('Hata','Lütfen Veritabanı dışında veri girmeyiniz.');
      return;
    }
    if (farks>sicaklik) {
      Alert.alert('Hata','Yaş termometre sıcaklığını kuru termometre sıcaklığından küçük giriniz.');
      return;
    }
    if(sicaklik>=24)
    {
    //   const decimalRegex = /[.]/; 
    //   if (!decimalRegex.test(farks)) {
          
    //     Alert.alert("Ondalık Uyarısı","Lütfen Ondalık kısmını yazarken nokta kullanınız.")
    //     return;
    // }
    if(farks.includes(","))
    {
      Alert.alert("Ondalık Uyarısı","Lütfen Ondalık kısmını yazarken nokta kullanınız.")
      return;
    }
      var temp =  parseFloat(sicaklik) - parseFloat(farks);
      var temp4 = kurusicaklik.indexOf(parseFloat(sicaklik));
      setilkindis(temp4);
      var temp2 = fark.indexOf(temp);
      
      setresultindis(temp2);
      setresult(temp);
      var temp3 = doubledizi[parseFloat(temp2)][parseFloat(temp4)];
      setenson(temp3);
    }
    else if(sicaklik<24 && sicaklik >= 16)
    {
    //   const decimalRegex = /[.]/; 
    //   if (!decimalRegex.test(farks)) {
          
    //     Alert.alert("Ondalık Uyarısı","Lütfen Ondalık kısmını yazarken nokta kullanınız.")
    //     return;
    // }
    if(farks.includes(","))
    {
      Alert.alert("Ondalık Uyarısı","Lütfen Ondalık kısmını yazarken nokta kullanınız.")
      return;
    }
      var temp =  parseFloat(sicaklik) - parseFloat(farks);
      var dene = temp.toFixed(1);
      
      var temp4 = kurusicaklik.indexOf(parseFloat(sicaklik));
      setilkindis(temp4);
     
      var temp2 = fark2.indexOf(parseFloat(dene));
     
      var temp3 = doubledizi[parseFloat(temp2)][parseFloat(temp4)];
      setenson(temp3);
      setresultindis(temp2);
      setresult(temp);
      
    }else{
      Alert.alert('Error','Lütfen Tüm Alanları Doldurunuz.');
    }
    
  }
  
  return(
    <SafeAreaView style={styles.container}>
         <Text style={styles.text}>Nem Hesaplama Uygulaması</Text>
      <View style={styles.body_container}>
        <TextInput style={styles.input} placeholder="Kuru Termometre Sıcaklığı Giriniz..." onChangeText={setSicaklik}></TextInput>
      <TextInput style={styles.input} placeholder="Yaş Termometre Sıcaklığı Giriniz..." onChangeText={farkss}></TextInput>
      <CustomButton title="Hesapla" onPress={farkibul} color="white" />

      
      {/* <Text>{resultfark}</Text>
      <Text>{resultindis}</Text> */}
      <Text style={styles.text} >Sonuç : % {enson}</Text>
      </View>
        
      
      

    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create(
{
  container:
  {
    flex:1,
    backgroundColor:"black",
  },
  button:{
    backgroundColor:"white"
  },
  input:{
    backgroundColor:"white",
    width:200,
    margin:10
  },
  text:{
    fontSize:25,
    textAlign:"center",
    fontFamily:'Cochin',
    fontWeight:"bold",
    color:"red",
    marginTop:30
  },
  body_container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})