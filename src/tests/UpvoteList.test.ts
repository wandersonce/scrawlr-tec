import { render, screen, test, expect } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import jest from "jest";
import { useListStore } from "../store/ListStore";
import UpvoteList from "../components/UpvoteList/UpvoteList";

jest.mock("../store/ListStore");

test("clicking the add button updates the selected state in the store", () => {
  const initialUpvotes = [{ id: "item1", selected: false }];
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
