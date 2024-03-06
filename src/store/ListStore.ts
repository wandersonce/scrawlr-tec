import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ListState {
  listItem: UpvoteList[];
  setListItem: (item: UpvoteList | undefined) => void;
  addUpvote: (upVoteItem: ListItem, id: string) => void;
  toggleSelected: (id: string) => void;
}

interface UpVoteItem {
  upvoteItem: ListItem[];
  setUpvoteItem: (ListItem: ListItem | undefined) => void;
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
          upvotes: item?.upvotes ? item.upvotes : [],
        },
      ],
    }));
  },
  addUpvote: (upVoteItem: ListItem, id) => {
    set((state) => ({
      listItem: state.listItem.map((list) =>
        list.id === id
          ? { ...list, upvotes: [...list.upvotes, upVoteItem] }
          : list,
      ),
    }));
  },
  toggleSelected: (id: string) => {
    set((state) => ({
      listItem: state.listItem.map((list) =>
        list.id === id
          ? {
              ...list,
              selected: true,
              upvotes: list.upvotes.map((item) => ({
                ...item,
                selected: true,
              })),
            }
          : {
              ...list,
              selected: false,
              upvotes: list.upvotes.map((item) => ({
                ...item,
                selected: false,
              })),
            },
      ),
    }));
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
