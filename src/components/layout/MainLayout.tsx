"use client";
import React, { useState } from "react";
import NavigationBar from "../ui/Navigation/NavigationBar/NavigationBar";
import StickyNote from "@/components/ui/Navigation/StickyNote/StickyNote";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
  const [notes, setNotes] = useState([
    {
      id: "tab1",
      content: <div>Tab 1 Content</div>,
      styles: { backgroundColor: "#d1f7c4" },
    },
    {
      id: "tab2",
      content: <div>Tab 2 Content</div>,
      styles: { backgroundColor: "#f0f0f0" },
    },
  ]);

  const handleCloseNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleMaximizeNote = (id: string) => {
    console.log(`Maximize note: ${id}`);
  };

  return (
    <div className="main-screen">
      <NavigationBar />
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          id={note.id}
          onClose={handleCloseNote}
          onMaximize={handleMaximizeNote}
          initialPosition={{ x: 100, y: 100 }}
          styles={note.styles}
        
          header={
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <span>Custom Header for {note.id}</span>
              <div>
                <button
                  style={{
                    backgroundColor: "#ff5f57",
                    border: "none",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    marginRight: "5px",
                  }}
                  onClick={() => handleCloseNote(note.id)}
                >
                  ✕
                </button>
                <button
                  style={{
                    backgroundColor: "#28c940",
                    border: "none",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                  }}
                  onClick={() => handleMaximizeNote(note.id)}
                >
                  ⬜
                </button>
              </div>
            </div>
          }
        >
          {note.content}
        </StickyNote>
      ))}
    </div>
  );
};

export default MainLayout;