import { v4 as uuidv4 } from "uuid";

import { useListStore } from "../../store/ListStore";

import PlusIcon from "../Icons/PlusIcon";
import VoteItem from "./VoteItem";

interface UpvoteListProps {
  id?: string;
  upvotes: ListItem[];
}

export default function UpvoteList({ id, upvotes }: UpvoteListProps) {
  const { addUpvote, toggleSelected } = useListStore();

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      parentId: id,
      selected: false,
    };

    addUpvote(newItem, id!);
  };

  const handleToggleSelected = () => {
    toggleSelected(id!);
  };

  return (
    <div className="flex  items-center justify-between gap-2">
      <ul className="flex min-h-16 w-full flex-wrap gap-2 rounded border border-slate-600 p-1 shadow-sm">
        {upvotes.map((item) => (
          <li
            key={item.id}
            data-key={id}
            onClick={() => handleToggleSelected()}
            className="cursor-pointer"
          >
            <VoteItem selected={item.selected} />
          </li>
        ))}
      </ul>
      <button
        className="rounded-md bg-slate-600 p-5 transition-colors hover:bg-slate-500 hover:shadow-md"
        onClick={() => handleAddItem()}
      >
        <PlusIcon iconColor="#FFF" />
      </button>
    </div>
  );
}
