import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import type { EvidenceImage } from "@/types";
import { EvidenceModalContext } from "./EvidenceModalContext";

type EvidenceModalProviderProps = {
  children: ReactNode;
};

export function EvidenceModalProvider({ children }: EvidenceModalProviderProps) {
  const [current, setCurrent] = useState<EvidenceImage | null>(null);

  const open = useCallback((img: EvidenceImage) => {
    setCurrent(img);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
  }, []);

  /** Esc-to-close + body scroll lock while modal is open. */
  useEffect(() => {
    if (!current) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [current, close]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <EvidenceModalContext.Provider value={value}>
      {children}
      {current
        ? createPortal(
            <EvidenceModalLightbox image={current} onClose={close} />,
            document.body,
          )
        : null}
    </EvidenceModalContext.Provider>
  );
}

type LightboxProps = {
  image: EvidenceImage;
  onClose: () => void;
};

function EvidenceModalLightbox({ image, onClose }: LightboxProps) {
  const t = useT();
  return (
    <div
      className="evidence-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
    >
      <div
        className="evidence-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="evidence-modal-close"
          aria-label={t(STRINGS.evidence.closeLabel)}
          onClick={onClose}
        >
          ×
        </button>
        <div className="evidence-modal-body">
          <img src={image.src} alt={image.caption} />
          <p className="evidence-modal-caption">{image.caption}</p>
        </div>
      </div>
    </div>
  );
}
