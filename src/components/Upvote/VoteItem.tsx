import clsx from "clsx";

import ArrowUp from "../Icons/ArrowUp";

interface VoteItemProps {
  selected: boolean;
}

export default function VoteItem({ selected }: VoteItemProps) {
  return (
    <div className={clsx("p-2", selected ? "bg-[#E5E8FD]" : "bg-[#F4F6F8]")}>
      <ArrowUp
        iconColor={clsx(selected ? "#253CF2" : "#343A40")}
        className="h-[40px] w-[40px]"
      />
    </div>
  );
}
9;
