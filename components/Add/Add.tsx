import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import axios from "axios";

import icone from "../../assets/head.png";

// Definição do tipo para as tarefas
interface Task {
  id: number;
  title: string;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://api-to-do-list-ti6z.onrender.com/tarefas/tasks');
      setTasks(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao carregar tarefas:', error.message);
      } else {
        console.error('Erro desconhecido:', error);
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Renderizador de itens do FlatList
  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <View style={styles.taskLeft}>
        <View style={styles.square} />
        <Text style={styles.taskText}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log(`Editando tarefa ${item.title}`)}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        

        {/* Lista de tarefas */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.subTitle}>Suas Tarefas</Text>
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item) => item.id.toString()} // Use o id como chave
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhuma tarefa disponível</Text>
            }
          />
        </View>
     

      </ScrollView>
      <TouchableOpacity
    style={styles.buttonAdd}
    onPress={() => console.log("Adicionar")}
  >
    <Text style={styles.plusSign}>+</Text>
  </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  list: {
    marginTop: 10,
  },
  taskContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    maxWidth: "80%",
    fontSize: 16,
    color: "#333",
  },
  editText: {
    color: "#FF6600",
    fontWeight: "bold",
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
  buttonAdd: {
    position: "absolute",
    bottom:30,
    right: 20,
    backgroundColor: "#FF6600",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  plusSign: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  
});
