import PropTypes from "prop-types";
import { useLenis } from "../lenis/LenisProvider";
import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function SectionNav({ nextSection, nextLabel }) {
  const lenis = useLenis();

  const goToNext = () => {
    if (lenis) {
      lenis.scrollTo(`#${nextSection}`, { offset: 0 });
    } else {
      document
        .getElementById(nextSection)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={goToNext}
      className="group absolute bottom-8 flex flex-col items-center gap-2 text-secondary transition-colors duration-300 hover:text-primary"
      aria-label={`Scroll to ${nextLabel}`}
    >
      <span className="font-sans-serif font-medium text-xs uppercase tracking-widest">
        {nextLabel}
      </span>
      <HiOutlineArrowSmallDown
        size={20}
        className="font-medium transition-transform duration-300 group-hover:translate-y-1"
      />
    </button>
  );
}

SectionNav.propTypes = {
  nextSection: PropTypes.string.isRequired,
  nextLabel: PropTypes.string.isRequired,
};
