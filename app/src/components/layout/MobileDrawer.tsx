import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS } from "@/data/nav";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <div className={`mobile-drawer${open ? " open" : ""}`}>
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
      <a href={`mailto:${CONTACT_EMAIL}`} onClick={onClose}>
        Contact
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        LinkedIn
      </a>
    </div>
  );
}
