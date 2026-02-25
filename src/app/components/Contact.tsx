"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check, User, Mail, MessageSquare, Send, AlertCircle } from "lucide-react";
import Button from "@/src/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/app/components/ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      setIsLoading(false);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setIsLoading(false);
      setError("Failed to send message. Please check your connection and try again.");
    }
  };

  const resetAndClose = () => {
    onClose();
    setIsSuccess(false);
    setError(null);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent
        className="w-[calc(100%-2rem)] max-w-md text-white"
        onClose={resetAndClose}
      >
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            I&apos;d love to hear from you. Send me a message and I&apos;ll get
            back to you as soon as I can.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center space-y-4 py-12"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
                <Loader2 className="relative h-10 w-10 animate-spin text-blue-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">
                Sending your message...
              </p>
            </motion.div>
          ) : isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center space-y-4 py-12"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: [0, 1.3, 0.9, 1.1, 1], rotate: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.1,
                }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl" />
                <div className="relative rounded-full bg-linear-to-br from-green-400 to-emerald-500 p-3">
                  <Check className="h-6 w-6 text-white" />
                </div>
              </motion.div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  Message sent!
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Thanks for reaching out. I&apos;ll reply soon.
                </p>
              </div>
              <Button
                onClick={resetAndClose}
                className="mt-2 bg-white/10 text-white hover:bg-white/20"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Name
                </label>
                <div className="input-glow flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-200">
                  <User className="h-4 w-4 shrink-0 text-gray-500" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Email
                </label>
                <div className="input-glow flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-200">
                  <Mail className="h-4 w-4 shrink-0 text-gray-500" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Message
                </label>
                <div className="input-glow rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-200">
                  <div className="flex gap-3">
                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What would you like to say?"
                      rows={4}
                      className="w-full resize-none bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </motion.div>
              )}

              {/* Privacy notice */}
              <p className="text-[11px] leading-relaxed text-gray-500">
                Your information is only used to respond to your message and is
                not shared with third parties.
              </p>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetAndClose}
                  className="border-blue-400/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                >
                  Cancel
                </Button>
                <button
                  type="submit"
                  className="cursor-pointer glow-blue inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <Send className="h-3.5 w-3.5" />
                  Send Message
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
