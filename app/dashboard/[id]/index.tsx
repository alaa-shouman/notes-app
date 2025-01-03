import { View, Text } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { TextInput } from "react-native-paper";
import debounce from "lodash/debounce";
import { updateNote } from "@/store/notesSlice";

const NotesPage = () => {
  const { id } = useLocalSearchParams();
  const note = useSelector((state: RootState) =>
    state.notes.notes.find((note) => note.id === id)
  );
  console.log("note", note);

  const [additionalText, setAdditionalText] = useState(note?.content || "");
  const dispatch = useDispatch();

  useEffect(() => {
    setAdditionalText(note?.content || "");
  }, [note]);

  const saveNoteContent = useCallback(
    debounce((content: string) => {
      if (note) {
        console.log("saving ...");
        dispatch(updateNote({ id: note.id, content }));
      }
    }, 1000),
    [dispatch, note]
  );

  const handleTextChange = (text: string) => {
    setAdditionalText(text);
    saveNoteContent(text);
  };

  return (
    <View className="bg-yellow-100 p-5 h-full">
      <Text className="text-5xl font-bold text-center bg-yellow-100 text-slate-700">
        {note?.title}
      </Text>
      <TextInput
        className="bg-yellow-100 p-3 h-full text-slate-900 font-bold text-xl "
        multiline
        placeholder="Enter notes here..."
        value={additionalText}
        onChangeText={handleTextChange}
        textColor="#0f172a"
        style={{ fontSize: 24 }}
      />
    </View>
  );
};

export default NotesPage;
