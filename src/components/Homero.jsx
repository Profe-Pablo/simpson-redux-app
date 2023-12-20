import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Keyboard} from "react-native";
import {useState} from "react";

const Homero = () => {
  const [cervezas, setCervezas] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState("")

  const handleAddBeer = ()=>{
    setCervezas(cervezas+1)
  }

  const handleRemoveBeer = ()=>{
    if(cervezas>0){
        setCervezas(cervezas-1)
    } 
  }

  const handleAmountToAdd = () => {
    setCervezas(cervezas+Number(amountToAdd))
    setAmountToAdd("")
    Keyboard.dismiss()
  }

  const handleResetBeers = () => {
    setCervezas(0)
    setAmountToAdd("")
  }

  return (
    <View style={styles.container}>
        <View style={styles.resultContainer}>
            <Text style={{...styles.xlText,...styles.simpsonFont}}>Cantidad de cervezas: {cervezas}</Text>
        </View>
      <View style={styles.unitContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>handleRemoveBeer()}>
            <Text style={{...styles.xlText,...styles.simpsonFont,...styles.whiteText}}>-</Text>
        </TouchableOpacity>
        <Text style={{...styles.xlText,...styles.simpsonFont}}>{cervezas}</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>handleAddBeer()}>
            <Text style={{...styles.xlText,...styles.simpsonFont,...styles.whiteText}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.amountContainer}>
        <TextInput
            style={styles.TextInput}
            placeholder="Dame..."
            inputMode="numeric"
            keyboardType="numeric"
            value={amountToAdd.toString()}
            onChangeText={number=>setAmountToAdd(Number(number))}
        />
        <TouchableOpacity onPress={()=>handleAmountToAdd()}>
            <Text style={{...styles.xlText,...styles.simpsonFont}}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resetContainer}>
      <TouchableOpacity onPress={()=>handleResetBeers()}>
            <Text style={{...styles.xlText,...styles.simpsonFont,...styles.btnReset,...styles.whiteText}}>Mejor me voy a casa</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={{uri: "https://i.ibb.co/yXfcq8h/homero.jpg"}}
        resizeMode="cover"
        style={styles.image}
        />
    </View>
  );
};

export default Homero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop:30,
  },
  simpsonFont:{
    fontFamily: 'simpson-font',  
},
xlText:{
    fontSize:24,
},
whiteText: {
    color:"#fff"
},
  image:{
    width:150,
    height:150,
  },
  unitContainer:{
    flexDirection:"row",
    alignItems:"center",
    margin: 10,
    gap:15,

  },
  resultContainer:{
    backgroundColor: "#ffd90f",
    padding: 30,
    borderRadius: 15,
  },
  btn:{
    padding: 15,
    backgroundColor:"#ffd90f",
    borderRadius: 10,
  },amountContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  TextInput: {
    borderColor: "#ccc",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 20,
    marginRight: 10,
    fontFamily: "simpson-font"
  },btnReset:{
    padding: 15,
    backgroundColor:"#F14E28",
    borderRadius: 10,
  },
  resetContainer:{
    marginTop: 20,
  }
});
