import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';

import ToDoItem from './components/ToDoItem';
import TodoInputField from './components/TodoInputField';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addToDo = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteToDo = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>

      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.todoContainer}>
              <ToDoItem index={index + 1} task={task} deleteToDo={() => deleteToDo(index)}/>
            </View>
          );
        })
        }
      </ScrollView>
      <TodoInputField addToDo={addToDo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
  },
  scrollView: {
    marginBottom: 70,
  },
  todoContainer: {
    marginTop: 20,
  }
});
