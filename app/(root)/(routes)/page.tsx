"use client";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { SignIn, UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetUpPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <>
      <h1>Root Page</h1>
    </>
  );
};

export default SetUpPage;
