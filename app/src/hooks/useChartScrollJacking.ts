import { useEffect, type RefObject } from "react";

const MOBILE_QUERY = "(max-width: 734px)";

type ScrollJackRefs = {
  blockRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  stickyRef: RefObject<HTMLDivElement | null>;
  scrollerRef: RefObject<HTMLDivElement | null>;
};

/**
 * Hook that wires the ad-revenue chart's dual scroll behaviour:
 *
 * - Desktop (> 734px): wheel anywhere on the chart card is redirected to
 *   horizontal scroll on the inner scroller. Falls back to the page when
 *   the scroller is at either edge so the page can still scroll past.
 * - Mobile  (≤ 734px): the chart sticks to vertical-centre of the viewport
 *   inside a tall track, and vertical page scroll progress is mapped to
 *   the horizontal scrollLeft of the inner scroller (scroll-jacking).
 *
 * Implementation mirrors the original vanilla JS in
 * `05-business-profile-merged.html` 1:1 so visual behaviour is identical.
 */
export function useChartScrollJacking({
  blockRef,
  trackRef,
  stickyRef,
  scrollerRef,
}: ScrollJackRefs): void {
  useEffect(() => {
    const block = blockRef.current;
    const track = trackRef.current;
    const sticky = stickyRef.current;
    const scroller = scrollerRef.current;
    if (!block || !track || !sticky || !scroller) return;

    const isMobile = () => window.matchMedia(MOBILE_QUERY).matches;

    const onWheel = (e: WheelEvent) => {
      if (isMobile()) return;
      const dy = e.deltaY;
      if (dy === 0) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      const atStart = scroller.scrollLeft <= 0 && dy < 0;
      const atEnd = scroller.scrollLeft >= max && dy > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      scroller.scrollLeft += dy;
    };

    let ticking = false;
    const updateMobileScroll = () => {
      if (!isMobile()) return;
      const rect = track.getBoundingClientRect();
      const stickyHeight = sticky.offsetHeight ?? 0;
      const stickyTop = window.innerHeight * 0.5;
      const runway = rect.height - stickyHeight;
      if (runway <= 0) return;
      const past = stickyTop - rect.top;
      const progress = Math.min(Math.max(past / runway, 0), 1);
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      scroller.scrollLeft = progress * max;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateMobileScroll();
        ticking = false;
      });
    };

    const onResize = () => {
      if (isMobile()) updateMobileScroll();
    };

    block.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const raf = requestAnimationFrame(updateMobileScroll);

    return () => {
      block.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [blockRef, trackRef, stickyRef, scrollerRef]);
}
