"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { HomeCardList } from "./common/HomeCardList";
import { HomeTitle } from "./common/HomeTitle";

type HomeCardContainerProps = {
  title: string;
};

const SCROLL_AMOUNT = 300;

export function HomeCardContainer({ title }: HomeCardContainerProps) {
  const { ref, canScrollLeft, canScrollRight, scrollLeft, scrollRight } =
    useHorizontalScroll<HTMLDivElement>(SCROLL_AMOUNT);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <HomeTitle>{title}</HomeTitle>
        <div className="flex gap-2">
          <button
            type="button"
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="이전"
          >
            <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-background-1 rounded-full p-1 text-foreground-1" />
          </button>
          <button
            type="button"
            className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="다음"
          >
            <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-background-1 rounded-full p-1 text-foreground-1" />
          </button>
        </div>
      </div>
      <HomeCardList ref={ref} />
    </div>
  );
}
