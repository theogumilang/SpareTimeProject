import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Text} from 'react-native-elements';

class Persiapan extends Component {
  render() {
    return (
      <View>
        <ScrollView>
        <Text style={styles.TextStyle} >1. Tas Gunung/Carrier/Keril Minimal ukuran 40 Liter </Text>
        <Text style={styles.TextStyle} >2. Pakaian. </Text>
        <Text style={styles.TextStyle} >3. Sleeping bag dan matras. </Text>
        <Text style={styles.TextStyle} >4. Jas Hujan. </Text>
        <Text style={styles.TextStyle} >5. Alat makan </Text>
        <Text style={styles.TextStyle} >6. Obat-obatan </Text>
        <Text style={styles.TextStyle} >7. Korek api </Text>
        <Text style={styles.TextStyle} >8. Senter/headlamp </Text>
        <Text style={styles.TextStyle} >9. Tissue kering & tissue basah </Text>
        <Text style={styles.TextStyle} >10. Baterai cadangan </Text>
        <Text style={styles.TextStyle} >11. Kantong plastik untuk sampah dan pakaian kotor/basah. </Text>
        <Text style={styles.TextStyle} >12. Trekking pole </Text>
        <Text style={styles.TextStyle} >13. Tenda </Text>
        <Text style={styles.TextStyle} >14. Makanan/Minuman dan logistik lainnya </Text>
    </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   TextStyle : {
     textAlign:'center',
     fontSize: 15,
   }
});
export default Persiapan;
