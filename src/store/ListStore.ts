import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ListState {
  listItem: UpvoteList[];
  setListItem: (item: UpvoteList | undefined) => void;
}

export const useListStore = create<ListState>((set) => ({
  listItem: [],
  setListItem: (item: UpvoteList | undefined) => {
    set((state) => ({
      listItem: [
        ...state.listItem,
        {
          id: item ? item.id : uuidv4(),
          selected: item ? item.selected : false,
        },
      ],
    }));
  },
}));
