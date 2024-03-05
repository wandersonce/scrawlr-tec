import { useListStore } from "../../store/ListStore";
import UpvoteList from "./UpvoteList";

export default function UpvoteWrapper() {
  const { listItem, addListItem } = useListStore();

  return (
    <section className="min-w-[380px] rounded bg-white p-6 shadow">
      <h3 className="mb-2 text-xl font-bold">UpVote List</h3>
      <ul className="flex flex-col items-start justify-stretch">
        {listItem.map((item) => (
          <li key={item.id}>
            <UpvoteList />
          </li>
        ))}
      </ul>

      <button
        className="mt-8 rounded bg-slate-400 px-5 py-2 font-bold text-white transition hover:bg-slate-600"
        onClick={() => addListItem()}
      >
        Add New List
      </button>
    </section>
  );
}
