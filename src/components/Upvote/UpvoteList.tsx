import { useEffect } from "react";

import PlusIcon from "../Icons/PlusIcon";
import VoteItem from "./VoteItem";
import { useListStore, useUpvoteItem } from "../../store/ListStore";

interface UpvoteListProps {
  id?: string;
}

export default function UpvoteList({ id }: UpvoteListProps) {
  const { upvoteItem, setUpvoteItem } = useUpvoteItem();
  const { addUpvote } = useListStore();

  useEffect(() => {}, []);

  const handleAddItem = () => {
    const newItem = {
      id: undefined,
      parentId: id,
      selected: false,
    };
    // setUpvoteItem(newItem);
    addUpvote(newItem, id);
  };

  return (
    <div className="flex  items-center justify-between gap-2">
      <ul className="flex min-h-16 w-full flex-wrap gap-2 rounded border border-slate-600 p-1 shadow-sm">
        {upvoteItem.map((item) => (
          <>
            {item.parentId === id ? (
              <li key={item.id} data-key={id} className="cursor-pointer">
                <VoteItem />
              </li>
            ) : null}
          </>
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
