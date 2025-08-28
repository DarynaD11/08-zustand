import { NewNoteData } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
  draft: NewNoteData;
  setDraft: (newNote: NewNoteData) => void;
  clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (newNote: NewNoteData) => set({ draft: newNote }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "draft",
    }
  )
);
