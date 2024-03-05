import { useEffect } from "react";
import { useUpvoteItem } from "../../store/ItemListStore";
import PlusIcon from "../Icons/PlusIcon";
import VoteItem from "./VoteItem";

interface UpvoteListProps {
  id: string;
}

export default function UpvoteList({ id }: UpvoteListProps) {
  const { upvoteItem, setUpvoteItem } = useUpvoteItem();

  useEffect(() => {}, []);

  const handleAddItem = () => {
    setUpvoteItem(undefined);
  };

  return (
    <div className="flex  items-center justify-between gap-2">
      <ul className="flex min-h-16 w-full flex-wrap gap-2 rounded border border-slate-600 p-1 shadow-sm">
        {upvoteItem.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <VoteItem />
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
