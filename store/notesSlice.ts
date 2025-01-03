import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  titek: string;
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
        content: action.payload,
        timestamp: new Date().toLocaleString(), 
      });
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
