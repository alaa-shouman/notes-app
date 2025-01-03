import { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addNote, deleteNote } from "@/store/notesSlice";
import { useRouter } from "expo-router";

export default function DashboardPage() {
  const notes = useSelector((state: RootState) => state.notes.notes);
  console.log("notes", notes);
  const dispatch = useDispatch();
  const router = useRouter();
  const [noteInput, setNoteInput] = useState("");

  const handleAddNote = () => {
    if (noteInput.trim()) {
      dispatch(addNote(noteInput));
      setNoteInput("");
    }
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4 text-center">
        Notes Dashboard
      </Text>

      <TextInput
        className="border border-gray-300 rounded p-2 mb-2 bg-white rounded-full shadow-md p-5"
        placeholder="Enter a note"
        value={noteInput}
        onChangeText={setNoteInput}
      />
      <Button mode="contained" onPress={handleAddNote} className="mb-4" buttonColor="#FFD700">
        Add Note
      </Button>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            className="flex-1 m-1 p-3 border border-gray-300 rounded bg-yellow-100 shadow-md"
            onPress={() => {
              router.push(`/dashboard/${item.id}`);
              console.log("item.id", item.id);
            }}
          >
            <View>
              <Text className="text-lg font-bold text-yellow-900">
                {item.content.length > 30
                  ? `${item.content.substring(0, 30)}...`
                  : item.content}
              </Text>
              <Text className="text-sm text-gray-600 mt-1">
                {item.timestamp}
              </Text>
            </View>
            <Button
              mode="text"
              className="bg-red-300"
              onPress={() => handleDeleteNote(item.id)}
              textColor="#D11A2A"
            >
              Delete
            </Button>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-4">
            No notes added yet.
          </Text>
        }
      />
    </View>
  );
}
