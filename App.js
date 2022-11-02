import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.page}>

    <View style={styles.image}>
    <Image style={styles.me} source={require("./assets/me.jpg")} />
    </View>

    <View style={styles.head}>
    <Text style={styles.header}>Mirna Andrišić</Text>
    </View>

    <View style={styles.body}>
     <Text style={styles.title}>Obrazovanje</Text>
     <Text style={styles.text}>univ. bacc. informatol. (FFOS)</Text>
    </View>

    <View style={styles.body}>
     <Text style={styles.title}>Iskustvo</Text>
     <Text style={styles.text}>OMS demonstrature (FFOS)</Text>
     <Text style={styles.text}>ABOX projekt</Text>
     <Text style={styles.text}>Volontiranje u knjižnicama i muzejima</Text>
     <Text style={styles.text}>Vođenje radionica</Text>
    </View>

    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Sposobnosti</Text>
        <Text style={styles.text}>UX/UI dizajn</Text>
        <Text style={styles.text}>Frontend</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>Kontakt</Text>
        <Text style={styles.text}>mandrisic@ffos.hr</Text>
        <Text style={styles.text}>091 570 1284</Text>
      </View>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8,
    margin: 2,
  },

  page: {
    backgroundColor: "#9F8772",
  },


  header: {
    textAlign: "center",
    fontSize: 28,
    margin: 20,
    fontFamily: "Times New Roman",
    color: "#EDE4E0",
  },

  body: {
    width: '96%',
    alignItems: "center",
    backgroundColor: '#EDE4E0',
    padding: 10,
    borderRadius: 10,
    margin: 6,
    
  },

  left: {
    width: '50%',
    alignItems: "center",
    backgroundColor: '#EDE4E0',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    },

  me: {
    width: 140,
    height: 150,
    borderRadius: 150,
    margin: 20,
  },

  image: {
    alignItems: "center",
  },

  right: {
    width: '50%',
    alignItems: "center",
    backgroundColor: '#EDE4E0',
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
    },

    title: {
      fontFamily: "Times New Roman",
      fontSize: 18,
      fontWeight: "bold",
      margin: 5,
    },

  text: {
    textAlign: 'center',
    fontFamily: "Times New Roman",
    margin: 3,
  },
});
