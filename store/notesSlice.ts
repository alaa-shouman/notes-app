import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes.push({
        id: Date.now().toString(),
        title: action.payload,
        content: "",
        timestamp: new Date().toLocaleString(),
      });
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (
      state,
      payload: PayloadAction<{ id: string|string[]; content: string }>
    ) => {
      const note = state.notes.find((note) => note.id === payload.payload.id);
      if (note) {
        note.content = payload.payload.content;
      }
    },
  },
});

export const { addNote, deleteNote,updateNote } = notesSlice.actions;
export default notesSlice.reducer;
