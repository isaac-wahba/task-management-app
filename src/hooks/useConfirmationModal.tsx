import { useState } from "react";

export const useConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState<
    (() => void) | null
  >(null);

  const openModal = (onConfirm: () => void) => {
    setIsOpen(true);
    setConfirmationAction(() => onConfirm);
  };

  const closeModal = () => {
    setIsOpen(false);
    setConfirmationAction(null);
  };

  const handleConfirm = () => {
    if (confirmationAction) {
      confirmationAction();
      closeModal();
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleConfirm,
  };
};
