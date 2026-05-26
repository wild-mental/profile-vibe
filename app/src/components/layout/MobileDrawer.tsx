import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS } from "@/data/nav";
import { LanguageToggle } from "./LanguageToggle";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const t = useT();

  return (
    <div className={`mobile-drawer${open ? " open" : ""}`}>
      <LanguageToggle className="is-drawer" />
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {t(link.label)}
        </a>
      ))}
      <a href={`mailto:${CONTACT_EMAIL}`} onClick={onClose}>
        {t(STRINGS.nav.contact)}
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        {t(STRINGS.nav.linkedin)}
      </a>
    </div>
  );
}
