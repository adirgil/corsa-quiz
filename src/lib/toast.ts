"use client";

import { toast } from "sonner";

export const toastSuccess = (msg: string, desc?: string) =>
  toast(msg, {
    description: desc,
    icon: "✅",
    style: {
      backgroundColor: "#22c55e", // Green
      color: "white",
    },
  });

export const toastError = (msg: string, desc?: string) =>
  toast(msg, {
    description: desc,
    icon: "❌",
    style: {
      backgroundColor: "#ef4444", // Red
      color: "white",
    },
  });
