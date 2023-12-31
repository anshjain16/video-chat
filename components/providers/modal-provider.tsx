"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server-modal";
import { ManageMembersModal } from "../modals/manage-members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  return (
    <>
      <CreateServerModal></CreateServerModal>
      <InviteModal></InviteModal>
      <EditServerModal></EditServerModal>
      <ManageMembersModal></ManageMembersModal>
      <CreateChannelModal></CreateChannelModal>
      <LeaveServerModal></LeaveServerModal>
      <DeleteServerModal></DeleteServerModal>
    </>
  );
};
