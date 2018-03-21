import React, { Component } from 'react';
import { View, StyleSheet, ScrollView , WebView } from 'react-native';
import {Text} from 'react-native-elements';

class Perlengkapan extends Component {
  render() {
    return (
      
      
      <ScrollView  >
        <View  >
          
        <Text style={{textAlign:'center', marginTop:5}} h4>1. Mendaki sendiri bersama teman atau ikut pendakian massal? </Text>
        <Text style={{textAlign:'center', marginTop:5}} h6>Pertama anda harus menetapkan terlebih dahulu apakah pendakian yang akan dilakukan adalah pendakian sendiri bersama teman atau ikut pendakian massal (open trip atau ikut kelompok pendakian lainnya). Sangat tidak direkomendasikan untuk mendaki gunung seorang diri tanpa teman yang mendampingi, Minimal 3 orang dalam satu keompok pendakian. </Text>
        <Text style={{textAlign:'center', marginTop:5}} h4>2. Gunung apa yang akan didaki dan kapan waktu pendakiannya? </Text>
        <Text style={{textAlign:'center', marginTop:5}} h6>Selanjutnya tetapkan gunung yang ingin didaki dan tetapkan kapan waktu pendakiannya, apakah akan melakukan pendakian disaat musim hujan atau melakukan pendakian disaat musim kemarau. Saya sendiri menyarankan dan memang nyatanya pendakian yang dilakukan di musim kemarau jauh lebih nyaman ketimbang melakukan pendakian di musim penghujan. </Text>
        <Text style={{textAlign:'center', marginTop:5}} h4>3. Cari info tentang gunung yang akan didaki </Text>
        <Text style={{textAlign:'center', marginTop:5}} h6>Jika sudah mendapat tujuan gunung yang ingin didaki, carilah informasi sebanyak-banyaknya melalui internet. Cari info tentang jalur pendakian gunung yang dituju, pengalaman pendaki lain ketika mendaki gunung tersebut, serta cari tahu momen-momen atau spot indah yang ada digunung tersebut yang memungkinkan kita menikmati keindahan alamnya lebih lama atau juga mengabadikannya lewat sesi foto/selfie. </Text>
        <Text style={{textAlign:'center', marginTop:5}} h4>4. Siapkan fisik anda </Text>
        <Text style={{textAlign:'center', marginTop:5}} h6 > ini satu yang terpenting diantara persiapan mendaki gunung, ini juga yang seringkali digampangkan oleh sebagian pendaki. Anggapan mereka bahwa mendaki gunung hanya perlu berjalan terus saja sambil menahan letih, jika sudah terasa sangat lelah bisa berhenti sejenak untuk memulihkan tenaga, sungguh ini anggapan yang salah. Kebanyakan yang seperti ini hanya menyusahkan teman pendakian yang lain, yang harus rela menunggu di banyak perhentian jalannya. </Text>
        <Text style={{textAlign:'center', marginTop:5}} h4>5. Tunjuk seorang pemimpin perjalanan</Text>
        <Text style={{textAlign:'center', marginTop:5}} h6>Penting untuk memilih pemimpin dalam pendakian, tunjuklah seorang pemimpin yang paling berpengalaman dan paling bijak dalam membuat keputusan. Sebuah perjalanan yang dipimpin oleh seseorang akan jauh lebih teratur ketimbang yang tidak. </Text>
        <Text style={{textAlign:'center', marginTop:5}} h4>6. List barang bawaan wajib, pastikan tidak ada yang tertinggal </Text>
        <Text style={{textAlign:'center', marginTop:5}} h6>Sebelum Kamu Berangkat mendaki, Jangan Lupa membuat List barang apa saja yang akan dibawa agar nanti tidak lupa terbawa, dan sebelum berangkat mendaki coba cek lagi barang barang yang ada di list agar tidak ada yang tertinggal </Text>
      
     </View>
    
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20
}

});

export default Perlengkapan;
