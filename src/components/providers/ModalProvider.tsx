"use client";
import React, { useEffect, useState } from "react";
import CreateChannelModal from "../modals/CreatePortfolio";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateChannelModal />
    </>
  );
};

export default ModalProvider;
