"use client";

import React, { useState, JSX } from "react";
import { motion } from "motion/react";
import { useDeviceType } from "@/hooks/useDeviceType";
import "./StickyNote.scss";

interface StickyNoteProps {
  id: string; // Unique identifier for the sticky note
  isOpen: boolean; // Flag to control the visibility of the sticky note
  initialPosition: { x: number; y: number }; // Initial position of the sticky note
  onClose: (id: string) => void; // Callback when the sticky note is closed
  onMaximize?: (id: string) => void; // Callback when the sticky note is maximized
  children: React.ReactNode; // Content inside the sticky note
  styles?: React.CSSProperties; // Custom styles for the sticky note
  header?: JSX.Element; // Custom header content
  isFixed?: boolean; // Flag to control if the sticky note is fixed or absolute
}

const StickyTab: React.FC<StickyNoteProps> = ({
  id,
  initialPosition = { x: 100, y: 100 },
  onClose,
  onMaximize,
  isOpen,
  children,
  styles = {},
  header,
  isFixed = false
}) => {
  const { isTablet, isDesktop } = useDeviceType();
  const [position, setPosition] = useState(initialPosition);

  if (!isTablet && !isDesktop) {
    return null; // Render nothing on mobile devices
  }

  if (!isOpen) {
    return null; // Render nothing if isOpen is false
  }

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    setPosition({
      x: position.x + info.offset.x,
      y: position.y + info.offset.y
    });
  };

  const handleClose = () => {
    if (onClose) {
      onClose(id);
    }
  };

  const handleMaximize = () => {
    if (onMaximize) {
      onMaximize(id);
    }
  };

  return (
    <motion.div
      className="sticky-note"
      drag={isFixed ? false : true}
      dragConstraints={{ top: 0, left: 0, right: 1000, bottom: 1000 }}
      onDrag={handleDrag}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      dragMomentum={false}
      style={{
        x: position.x,
        y: position.y,
        ...styles
      }}
    >
      <div className="sticky-note-header">
        {header ? (
          header
        ) : (
          <>
            <button className="close-button" onClick={handleClose}>
              ✕
            </button>
            <button className="maximize-button" onClick={handleMaximize}>
              ⬜
            </button>
          </>
        )}
      </div>
      <div className="sticky-note-content">{children}</div>
    </motion.div>
  );
};

export default StickyTab;
