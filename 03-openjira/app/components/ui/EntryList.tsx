import { List, Paper } from "@mui/material";
import EntryCard from "./EntryCard";
import { EntryStatus } from "../../interfaces/entry.interface";
import { useContext, useMemo, DragEvent } from "react";
import EntriesContext from "../../context/entries/EntriesContext";
import UiContext from "../../context/ui/UiContext";
import styles from "./entry.module.css";

interface Props {
  status: EntryStatus;
}

const EntryList = ({ status }: Props) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UiContext);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id);
    if (entry) {
      updateEntry({ ...entry, status });
    }
    endDragging();
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 150px)",
          overflowY: "auto",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.7 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
