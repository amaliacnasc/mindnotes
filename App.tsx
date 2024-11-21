import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Add from "./components/Add/Add";

import icone from './assets/head.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho e título */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Image source={icone} style={styles.icon} />
          <Text style={styles.sectionTitle}>MindNotes</Text>
        </View>

        {/* Lista de tarefas */}
        <View style={styles.tasksWrapper}>
          <Add />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
