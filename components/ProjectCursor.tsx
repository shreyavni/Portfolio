"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectCursor() {
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    setMounted(true);

    const move = (event: MouseEvent) => {
      const targetElement =
        event.target instanceof Element ? event.target : null;
      const card = targetElement?.closest<HTMLElement>("[data-project-card]");
      if (!card) {
        setVisible(false);
        setProjectName("");
        return;
      }
      target.current = { x: event.clientX, y: event.clientY };
      setProjectName(card.dataset.projectCard ?? "Project");
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const animate = () => {
      setPosition((current) => ({
        x: current.x + (target.current.x - current.x) * 0.18,
        y: current.y + (target.current.y - current.y) * 0.18,
      }));
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  if (!mounted || !visible) return null;

  return createPortal(
    <span
      aria-hidden="true"
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{ left: position.x, top: position.y }}
    >
      <span className="project-cursor-arrow">◆</span>
      <span className="project-cursor-label">{projectName}</span>
    </span>,
    document.body,
  );
}
