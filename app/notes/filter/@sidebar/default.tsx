import Link from "next/link";
import css from "./SidebarNotes.module.css";
import { NoteTag } from "@/types/note";

const tags: (NoteTag | "All")[] = [
  "All",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
