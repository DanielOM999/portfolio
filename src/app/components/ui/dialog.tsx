"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: () => void;
  children: ReactNode;
}

interface DialogContentProps {
  className?: string;
  children: ReactNode;
  onClose?: () => void;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onOpenChange}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DialogContent({
  className,
  children,
  onClose,
}: DialogContentProps) {
  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`relative glass-card rounded-2xl p-8 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {children}
    </motion.div>
  );
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="mb-6">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight gradient-text">
      {children}
    </h2>
  );
}

export function DialogDescription({ children }: { children: ReactNode }) {
  return <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{children}</p>;
}
