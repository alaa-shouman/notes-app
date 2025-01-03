import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const NotesPage = () => {
  const {id} = useLocalSearchParams();
  console.log('id', id)
  const note = useSelector((state:RootState) => state.notes.notes.find((note) => note.id === id));
  console.log('note', note)
  return (
    <View className='bg-yellow-100 h-full'>
      <Text>Content : {note?.content}</Text>
    </View>
  )
}

export default NotesPage