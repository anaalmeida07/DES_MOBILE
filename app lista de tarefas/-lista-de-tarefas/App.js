// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Carrega as tarefas salvas ao iniciar o aplicativo
  useEffect(() => {
    loadTasks();
  }, []);

  // Função para carregar as tarefas salvas do AsyncStorage
  const loadTasks = async () => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem('tasks');
      if (tasksFromStorage !== null) {
        setTasks(JSON.parse(tasksFromStorage));
      }
    } catch (error) {
      console.error('Error loading tasks', error);
    }
  };

  // Função para salvar as tarefas no AsyncStorage
  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks', error);
    }
  };

  // Adiciona uma nova tarefa à lista
  const addTask = () => {
    if (input.length > 0) {
      const newTask = { id: Date.now().toString(), title: input };
      setTasks([...tasks, newTask]);
      saveTasks([...tasks, newTask]);
      setInput('');
    } else {
      Alert.alert('Erro', 'Por favor, insira um nome para a tarefa.');
    }
  };

  // Remove uma tarefa da lista
  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Renderiza cada item da lista de tarefas
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeTask(item.id)}>
      <View style={styles.task}>
        <Text style={styles.taskText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Digite uma tarefa..."
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={addTask}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginTop: 20 }}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  task: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    width: 280,
  },
  taskText: {
    fontSize: 16,
  },
});
