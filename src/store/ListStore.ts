import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ListState {
  listItem: UpvoteList[];
  setListItem: (item: UpvoteList | undefined) => void;
  addUpvote: (upVoteItem: ListItem) => void;
}

interface UpVoteItem {
  upvoteItem: ListItem[];
  setUpvoteItem: (ListItem: UpvoteList | undefined) => void;
}

export const useListStore = create<ListState>((set, get) => ({
  listItem: [],
  setListItem: (item: UpvoteList | undefined) => {
    set((state) => ({
      listItem: [
        ...state.listItem,
        {
          id: item ? item.id : uuidv4(),
          selected: item ? item.selected : false,
          upvotes: item?.upvotes ? item.upvotes : [],
        },
      ],
    }));
  },
  addUpvote: (upVoteItem: ListItem) => {
    console.log("here");
  },
}));

export const useUpvoteItem = create<UpVoteItem>((set) => ({
  upvoteItem: [],
  setUpvoteItem: (item: ListItem | undefined) => {
    set((state) => ({
      upvoteItem: [
        ...state.upvoteItem,
        {
          id: item == undefined ? item!.id : uuidv4(),
          parentId: item?.parentId ? item.parentId : "",
          selected: item?.selected ? item.selected : false,
        },
      ],
    }));
  },
}));
