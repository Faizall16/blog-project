import { useState } from "react";

export function useDisclosure(initialValue) {
  const [isOpen, setIsOpen] = useState(
    initialValue !== "undefined" ? initialValue : false
  );

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((val) => !val);

  return { isOpen, onOpen, onClose, onToggle };
}
