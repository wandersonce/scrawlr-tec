import PlusIcon from "../Icons/PlusIcon";

export default function UpvoteList() {
  return (
    <div className="flex  items-center justify-between gap-2">
      <ul className="flex min-h-16 w-full gap-2 rounded border border-slate-600 shadow-sm">
        <li></li>
      </ul>
      <button className="rounded-md bg-slate-600 p-5 transition-colors hover:bg-slate-500 hover:shadow-md">
        <PlusIcon iconColor="#FFF" />
      </button>
    </div>
  );
}
