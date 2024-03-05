import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ListState {
  listItem: UpvoteList[];
  addListItem: () => void;
}

export const useListStore = create<ListState>((set) => ({
  listItem: [],
  addListItem: () => {
    set((state) => ({
      listItem: [
        ...state.listItem,
        {
          id: uuidv4(),
          selected: false,
        },
      ],
    }));
  },
}));
