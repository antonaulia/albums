import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native'
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export class App extends Component {
  render() {
    // style bisa di destructuring seperti object biasa
    console.log('hello')
    
    return (
      <View style={{flex :1 }} >
        <Header headerText="Albums"/>
        <AlbumList/>
      </View>
      // <View style={style.containerStyle}>
        // {/* <View style={style.containerTextStyle}> */}
          // {/* <Text style={[textStyle,{flex:1, backgroundColor:'powderblue'}]}>Hello World !</Text>
          // <Text style={[textStyle,{flex:1, backgroundColor:'skyblue'}]}>Hello Girl !</Text>
          // <Text style={[textStyle,{flex:2, backgroundColor:'steelblue'}]}>Hello Custom !</Text> */}
          // {/* ================================================================== */}
          // {/* <Text style={[textStyle,{backgroundColor:'powderblue'}]}>Hello World !</Text>
          // <Text style={[textStyle,{backgroundColor:'skyblue'}]}>Hello Girl !</Text>
          // <Text style={[textStyle,{backgroundColor:'steelblue'}]}>Hello Custom !</Text> */}
        // {/* </View> */}
      // </View>
    );
  }
}
// angka di belakang flex untuk ukuran box samma seperti di bootstrap (col-3) bedanya ga ada total jumlah box


// const style = StyleSheet.create({
//   containerStyle : {
//     backgroundColor : 'black',
//     flex:1,
//     padding:20
//   }
// })

// const style = StyleSheet.create({
//   containerStyle : {
//     backgroundColor : 'black',
//     flex:1,
//     padding:20,
//   },
//   containerTextStyle:{
//     backgroundColor:'yellow', 
//     flex:1,
//     flexDirection :'row',
//     justifyContent : 'space-between',
//     alignItems : 'center'
//     // style flexDirection - ini column default(autoenter) jadi row - atau reverse
//     // style justify content - digunakan untuk layout / peletakan, alignitem secara vertical ! 
//   },
//   textStyle :{
//     color : 'red', fontSize: 15, textAlign : 'center',
//     width :70,
//     height : 70
//   }
// })
// tanpa stylesheet.create jadi ga ada suggestion. bantuan untuk styling. 

export default App;
