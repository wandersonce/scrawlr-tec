import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface UpVoteItem {
  upvoteItem: ListItem[];
  setUpvoteItem: (ListItem: UpvoteList | undefined) => void;
}

export const useUpvoteItem = create<UpVoteItem>((set) => ({
  upvoteItem: [],
  setUpvoteItem: (item: ListItem | undefined) => {
    set((state) => ({
      upvoteItem: [
        ...state.upvoteItem,
        {
          id: item ? item.id : uuidv4(),
          selected: item ? item.selected : false,
        },
      ],
    }));
  },
}));
