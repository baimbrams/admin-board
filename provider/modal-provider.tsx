"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setModal(true);
  }, []);
  if (!modal) {
    return null;
  }
  return <StoreModal />;
};
