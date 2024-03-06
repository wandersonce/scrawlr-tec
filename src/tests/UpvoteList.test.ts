import { render, screen, fireEvent } from "@testing-library/react";
import UpvoteList from "../components/Upvote/UpvoteList";
import { useListStore } from "../store/ListStore";


jest.mock('./useListStore', () => ({
  useListStore: jest.fn().mockReturnValue({
    listItem: [
      {
        id: 'list1',
        selected: false,
        upvotes: [
          { id: 1, content: 'Upvote 1', selected: false },
          { id: 2, content: 'Upvote 2', selected: false },
        ],
      },
      {
        id: 'list2',
        selected: false,
        upvotes: [
          { id: 3, content: 'Upvote 3', selected: false },
          { id: 4, content: 'Upvote 4', selected: false },
        ],
      },
    ],
  }),
}));

test('clicking on an upvote item in a list sets its selected state to true and resets other lists and their upvotes', () => {
  // Render the UpvoteList component
  render(<UpvoteList />);

  // Find the first upvote item (adjust selector based on your component)
  const firstUpvoteItem = screen.getByText('Upvote 1');

  // Simulate clicking on the upvote item
  fireEvent.click(firstUpvoteItem);

  // Directly call the mocked addUpvote function with correct arguments
  (useListStore as any).mockReturnValue.addUpvote({ id: 1, content: 'Upvote 1' }, 'list1');

  // Get all upvote items in the first and second lists (adjust selectors)
  const firstListUpvotes = screen.getAllByText(/Upvote [1-2]/);
  const secondListUpvotes = screen.getAllByText(/Upvote [3-4]/);

  // Adjust assertions based on your component's rendering of "selected" state
  // Example using class name:
  firstListUpvotes.forEach((item) => {
    expect(item.classList.contains('selected')).toBe(true);
  });

  secondListUpvotes.forEach((item) => {
    expect(item.classList.contains('selected')).toBe(false);
  });
});