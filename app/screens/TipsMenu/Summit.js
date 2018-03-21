import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Tile} from 'react-native-elements';

class Summit extends Component {
  render() {
    return (
      <ScrollView>
    <Text style={{textAlign:'center', marginTop:10}} h4>1. Cartenzs Pyramid </Text>
    <Image style={{height:200, marginTop:10}} source={{uri : "https://alamendah.files.wordpress.com/2010/06/puncakjaya.jpg?w=400&h=300"}} />
   
    <Text style={{textAlign:"center", marginTop:5}} h5>Dengan ketinggian 4.884 m dpl. Puncak Carstenzs yang biasa disebut juga Puncak Jaya merupakan bagian dari Pegunungan Maoke (Barisan Sudirman) yang terdapat di provinsi Papua.  Puncak Jaya merupakan puncak tertinggi di Indonesia dan juga masuk kedalam salah satu Seven Summit di tujuh benua dunia versi Reinhold Messne.  </Text>
    <Text style={{textAlign:'center'}} h4>2. Gunung Binaiya </Text>
    <Image style={{height:200, marginTop:10}} source={{uri : "https://alamendah.files.wordpress.com/2011/04/gunung-binaiya.jpg?w=400&h=224"}} />
   
    <Text style={{textAlign:'center', marginTop:5}} h5> Puncak gunung tertinggi di kepulauan Maluku adalah puncak Gunung Binaiya (Binaia) dengan ketinggian 3.027 m dpl. Dan. Gunung tidak berapi ini terletak di pulau Seram dalam wilayah Kabupaten Maluku Tengah, Maluku. </Text>
    <Text style={{textAlign:'center'}} h4>3. Puncak Rantemario Gunung Latimojong</Text>
    <Image style={{height:200, marginTop:10}} source={{uri: "https://alamendah.files.wordpress.com/2011/04/puncak-rantemario.jpg?w=400&h=300"}} />
   
    <Text style={{textAlign:'center', marginTop:5}} h5>Puncak gunung tertinggi di pulau Sulawesi dipegang oleh gunung Latimojong dengan puncak tertingginya bernama Rante Mario memiliki ketinggian 3.478 m dpl. Pegunungan Latimojong yang merupakan gunung tidak berapi ini berada di kabupaten Enrekang, Sulawesi Selatan </Text>
    
    <Text style={{textAlign:'center'}} h4>4. Gunung Bukit Raya </Text>
    <Image style={{height:200, marginTop:10}} source={{uri:"https://alamendah.files.wordpress.com/2011/04/gunung-bukit-raya.jpg"}} />
   
    <Text style={{textAlign:'center', marginTop:5}} h5>Puncak gunung tertinggi di Kalimantan sebenarnya adalah gunung Kinabalu namun gunung tersebut berada di wilayah Malaysia. Sedang puncak tertinggi dalam “The Seven Summits of Indonesia” dari kalimantan adalah Gunung Bukit Raya dengan ketinggian 2.278 m dpl. Gunung tidak berapi yang merupakan bagian dari Muller Schwaner ini terletak di Kabupaten Katingan, Kalimantan Tengah </Text>
    
    <Text style={{textAlign:'center'}} h4>5. Gunung Rinjani </Text>
    <Image style={{height:200, marginTop:10}} source={{uri:"https://alamendah.files.wordpress.com/2011/04/gunung-rinjani.jpg?w=400&h=252"}} />

    <Text style={{textAlign:'center', marginTop:5}} h5>Puncak tertinggi di Bali dan Nusa Tenggara adalah Gunung Rinjani dengan ketinggian 3.726 m dari permukaan laut. Gunung berapi ini berada di pulau Lombok propinsi Nusa Tenggara Barat </Text>

  <Text style={{textAlign:'center'}} h4 >6. Puncak Mahameru Gunung Semeru </Text>
    <Image style={{height:200, marginTop:10}} source={{uri:"https://alamendah.files.wordpress.com/2011/04/puncak-mahameru-semeru.jpg?w=400&h=271"}} />
  
    <Text style={{textAlign:'center', marginTop:5}} h5>Puncak tertinggi di pulau Jawa adalah Puncak Mahameru yang merupakan puncak dari Gunung Semeru dengan ketinggian 3.676 m dpl. Gunung ini berada di propinsi Jawa Timur di antara wilayah Kabupaten Malang dan Lumajang </Text>

    <Text style={{textAlign:'center'}} h4>7. Puncak Indrapura Gunung Kerinci </Text>
    <Image style={{height:200, marginTop:10}} source={{uri:"https://alamendah.files.wordpress.com/2011/04/gunung-kerinci.jpg?w=400&h=272"}} />

    <Text style={{textAlign:'center', marginTop:5}} h5>Puncak Gunung tertinggi di pulau Sumatera adalah Puncak Indrapura di Gunung Kerinci dengan ketinggian 3.800 m dpl. Gunung berapi ini Berada di perbatasan propinsi Sumatera Barat dan Jambi </Text>


      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  TextStyle : {
    flex: 1,
    alignItems: 'center',
  
  }
});
export default Summit;
