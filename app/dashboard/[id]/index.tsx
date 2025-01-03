import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { TextInput } from 'react-native-paper';

const NotesPage = () => {
  const {id} = useLocalSearchParams();
  console.log('id', id)
  const note = useSelector((state:RootState) => state.notes.notes.find((note) => note.id === id));
  console.log('note', note)
  return (
    <View className="bg-yellow-100 h-full">
      <Text className="text-5xl font-bold text-center mt-5 text-slate-700">
        {note?.title}
      </Text>
      <TextInput
        className="h-full bg-yellow-100"
        multiline
        placeholder="Enter notes here..."
      />
    </View>
  );
}

export default NotesPage