"use client";
import * as React from "react";
import "./css/tooltip.css";

export const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      {showTooltip && (
        <span className="absolute transform -translate-y-12 mb-2 p-1.5 border text-slate-500 text-xs tracking-widest rounded-md z-10 transition-opacity duration-100 text-nowrap animate-out hover:scale-150 hover:-translate-y-2">
          {text}
        </span>
      )}
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </button>
    </div>
  );
};
