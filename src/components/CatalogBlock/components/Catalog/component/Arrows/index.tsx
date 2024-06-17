import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { AnimationControls } from "framer-motion";

const ITEMS_PER_PAGE = 5;

interface IArrows {
  head: number;
  tail: number;
  sortedCakesLength: number;
  setHeadAndTail: Dispatch<SetStateAction<number[]>>;
  animationStart: AnimationControls["start"];
}

const Arrows: FC<IArrows> = ({
  head,
  tail,
  sortedCakesLength,
  setHeadAndTail,
  animationStart,
}): ReactElement => {
  const isArrowNextDisabled = tail + ITEMS_PER_PAGE >= sortedCakesLength;
  const isArrowPrevDisabled = head - ITEMS_PER_PAGE < 0;

  return (
    <div className="absolute right-0 -bottom-12">
      <button
        aria-label="Previous cakes"
        disabled={isArrowPrevDisabled}
        onClick={async () => {
          await animationStart("exit");
          setHeadAndTail(() => [
            (head -= ITEMS_PER_PAGE),
            (tail -= ITEMS_PER_PAGE),
          ]);
        }}
        className={`relative ${isArrowPrevDisabled ? "opacity-60" : ""}`}
      >
        <FaAngleLeft className="w-8 h-8" />
        <span className="absolute w-8 h-8 rounded-full scale-150 border border-black/50 -translate-x-1/2 -translate-y-full shadow-2xl" />
      </button>
      <button
        aria-label="Next cakes"
        disabled={isArrowNextDisabled}
        onClick={async () => {
          await animationStart("exit");
          setHeadAndTail(() => [
            (head += ITEMS_PER_PAGE),
            (tail += ITEMS_PER_PAGE),
          ]);
        }}
        className={`ml-8 relative ${isArrowNextDisabled ? "opacity-60" : ""}`}
      >
        <FaAngleLeft className="rotate-180 w-8 h-8" />
        <span className="absolute w-8 h-8 rounded-full scale-150 border border-black/50 -translate-x-1/2 -translate-y-full shadow-2xl" />
      </button>
    </div>
  );
};

export default memo(Arrows);
