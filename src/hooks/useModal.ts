import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return { open, setOpen, message, setMessage };
};
