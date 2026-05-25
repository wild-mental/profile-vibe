import { createContext, useContext } from "react";
import type { EvidenceImage } from "@/types";

export type EvidenceModalContextValue = {
  open: (img: EvidenceImage) => void;
  close: () => void;
};

export const EvidenceModalContext =
  createContext<EvidenceModalContextValue | null>(null);

export function useEvidenceModal(): EvidenceModalContextValue {
  const ctx = useContext(EvidenceModalContext);
  if (!ctx) {
    throw new Error(
      "useEvidenceModal must be used inside <EvidenceModalProvider>",
    );
  }
  return ctx;
}
