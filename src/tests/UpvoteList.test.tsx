import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import UpvoteList from "../components/Upvote/UpvoteList";

//Mock the ListItem values
jest.mock("../store/ListStore", () => ({
  useListStore: jest.fn().mockReturnValue({
    listItem: [
      {
        id: "list1",
        selected: false,
        upvotes: [
          { id: "1", parentId: "list1", selected: true },
          { id: "2", parentId: "list1", selected: true },
        ],
      },
      {
        id: "list2",
        selected: false,
        upvotes: [
          { id: "3", parentId: "list2", selected: false },
          { id: "4", parentId: "list2", selected: false },
        ],
      },
    ],
    addUpvote: jest.fn(),
    toggleSelected: jest.fn(),
  }),
}));

afterEach(cleanup);

test("clicking the add button updates the selected state in the store", async () => {
  //Create variables to pass with the component as required
  const initialUpvotes = [
    {
      id: "1",
      parentId: "list1",
      selected: true,
    },
  ];

  const listId = "list1";

  render(<UpvoteList id={listId} upvotes={initialUpvotes} />);

  // Click in the + button
  const button = await screen.getByRole("button", { name: "" });
  fireEvent.click(button);

  //get mocked values
  const mockedUseListStore =
    jest.requireMock("../store/ListStore").useListStore.mock.results[0].value
      .listItem[0];

  //do the match with the expected value
  expect(await mockedUseListStore.upvotes).toEqual([
    ...initialUpvotes,
    { id: expect.any(String), parentId: listId, selected: true },
  ]);
});
