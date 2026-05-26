import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import type { EvidenceImage } from "@/types";
import { useEvidenceModal } from "./EvidenceModalContext";

type EvidenceImageButtonProps = {
  image: EvidenceImage;
  /**
   * When `natural`, the thumbnail keeps its intrinsic aspect ratio
   * (used by full-width screenshots inside info-cards). Otherwise the
   * 260px-capped thumbnail variant is used.
   */
  natural?: boolean;
  className?: string;
};

export function EvidenceImageButton({
  image,
  natural,
  className,
}: EvidenceImageButtonProps) {
  const t = useT();
  const { open } = useEvidenceModal();
  const finalClass = [
    "evidence-image-btn",
    natural ? "is-natural" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={finalClass}
      aria-label={`${image.caption}${t(STRINGS.evidence.expandAriaSuffix)}`}
      onClick={() => open(image)}
    >
      <img src={image.src} alt={image.caption} loading="lazy" />
      <span className="evidence-zoom-hint">
        <i className="bi bi-zoom-in" />
        {t(STRINGS.evidence.zoomHint)}
      </span>
    </button>
  );
}
