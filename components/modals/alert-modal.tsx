"use clinet";

import { useEffect, useState } from "react";
import Modal from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Modal
      title="Apakah anda yakin?"
      isOpen={isOpen}
      onClose={onClose}
      description="This action cannot be undone"
    >
      <div className="pt-6 flex items-center justify-end space-x-2 w-full">
        <Button disabled={loading} onClick={onClose} variant={"outline"}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm} variant={"destructive"}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
