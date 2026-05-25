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
      aria-label={`${image.caption} 이미지 확대 보기`}
      onClick={() => open(image)}
    >
      <img src={image.src} alt={image.caption} loading="lazy" />
      <span className="evidence-zoom-hint">
        <i className="bi bi-zoom-in" />
        원본 보기
      </span>
    </button>
  );
}
