import { useEffect } from "react";

import { useListStore } from "../../store/ListStore";

import UpvoteList from "./UpvoteList";

export default function UpvoteWrapper() {
  const { listItem, setListItem } = useListStore();

  useEffect(() => {
    //Add initial 3 list items if not defined on localStorage
    const localStorageItems = JSON.parse(
      localStorage.getItem("listItem") || '""',
    );

    if (localStorageItems.length !== 0) {
      localStorageItems.map((item: UpvoteList) => {
        setListItem(item);
      });
    } else {
      for (let i = 0; i < 3; i++) {
        setListItem(undefined);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(listItem));
  }, [listItem]);

  return (
    <section className="w-[600px] rounded bg-white p-6 shadow">
      <h3 className="mb-2 text-xl font-bold">UpVote List</h3>
      <ul className="flex flex-col items-start justify-stretch gap-4">
        {listItem.map((item) => (
          <li key={item.id} data-key={item.id} className="w-full">
            <UpvoteList id={item.id} upvotes={item.upvotes} />
          </li>
        ))}
      </ul>

      <button
        className="mt-8 rounded bg-slate-600 px-5 py-2 font-bold text-white transition hover:bg-slate-500"
        onClick={() => setListItem(undefined)}
      >
        Add New List
      </button>
    </section>
  );
}
