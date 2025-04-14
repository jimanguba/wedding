"use client";
import { useSearchParams } from "next/navigation";
import TravelModal from "./TravelModal";
import { Suspense } from "react";

export default function ModalManager() {
  const params = useSearchParams();
  const modalType = params.get("modal");

  return (
    <>
      <Suspense>{modalType === "travel" && <TravelModal />}</Suspense>
    </>
  );
}
