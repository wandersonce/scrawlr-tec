interface UpvoteList {
  id?: string;
  upvotes?: [ListItem] | [];
  selected: boolean;
}

interface ListItem {
  id?: string;
  parentId?: string;
  selected: boolean;
}
