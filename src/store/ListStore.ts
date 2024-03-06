import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ListState {
  listItem: UpvoteList[];
  setListItem: (item: UpvoteList | undefined) => void;
  addUpvote: (upVoteItem: ListItem, id: string) => void;
  toggleSelected: (id: string) => void;
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
  addUpvote: (upVoteItem: ListItem, id: string) => {
    set((state) => ({
      listItem: state.listItem.map((list) => ({
        ...list,
        selected: list.id === id ? true : false, // Set selected based on id
        upvotes:
          list.id === id
            ? [
                ...list.upvotes.map((item) => ({ ...item, selected: true })),
                { ...upVoteItem, selected: true },
              ] // Add new item, set upvotes to true
            : list.upvotes.map((item) => ({ ...item, selected: false })), // Reset selection in other lists' upvotes
      })),
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
