import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpvoteList from "../components/Upvote/UpvoteList";

jest.mock("../store/ListStore");

test("clicking the add button updates the selected state in the store", () => {
  const initialUpvotes = [
    {
      id: "list32",
      parentId: "list1",
      selected: false,
    },
  ];

  const listId = "list1";

  render(<UpvoteList id={listId} upvotes={initialUpvotes} />);

  const button = screen.getByRole("button", { name: /add/i });
  userEvent.click(button);

  const mockedUseListStore =
    jest.requireActual("../store/ListStore").useListStore;
  const listStore = mockedUseListStore();

  expect(listStore.listItem).toEqual([
    ...initialUpvotes,
    { id: expect.any(String), parentId: listId, selected: true },
  ]);
});
