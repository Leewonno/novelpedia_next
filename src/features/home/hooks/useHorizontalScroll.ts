"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// 가로 스크롤 컨테이너 제어 (좌/우 이동 + 양 끝 도달 여부)
export function useHorizontalScroll<T extends HTMLElement>(amount = 300) {
  const ref = useRef<T>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollLeft = () =>
    ref.current?.scrollBy({ left: -amount, behavior: "smooth" });
  const scrollRight = () =>
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });

  return { ref, canScrollLeft, canScrollRight, scrollLeft, scrollRight };
}
