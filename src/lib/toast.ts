"use client";

import { toast } from "sonner";

export const toastSuccess = (msg: string, desc?: string) =>
  toast(msg, {
    description: desc,
    icon: "✅",
    style: {
      backgroundColor: "#22c55e",
      color: "white",
    },
  });

export const toastError = (msg: string, desc?: string) =>
  toast(msg, {
    description: desc,
    icon: "❌",
    style: {
      backgroundColor: "#f87171",
      color: "white",
    },
  });
