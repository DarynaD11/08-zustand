"use client";

import css from "./TagsMenu.module.css";
import Link from "next/link";
import type { NoteTag } from "@/types/note";
import { useState } from "react";

const tags: (NoteTag | "All")[] = [
  "All",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
];

export default function TagsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Notes ▾
      </button>
      {open && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`}
                className={css.menuLink}
                onClick={() => setOpen(false)}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
