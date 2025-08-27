"use client";

import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.client.module.css";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

export default function NotePreviewClient() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  const formattedDate = `Created at: ${note.createdAt}`;

  const close = () => router.back();

  return (
    <Modal onClose={close}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </Modal>
  );
}
