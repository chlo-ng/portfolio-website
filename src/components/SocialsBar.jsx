import PropTypes from "prop-types";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoGmail } from "react-icons/bi";

// TODO: replace placeholder hrefs with your real profile URLs.
const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/chlo-ng/",
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chlo-ng/",
    label: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:chloeng73@gmail.com",
    label: "Email",
  },
];

function SocialIcon({ name }) {
  if (name === "GitHub") {
    return <FiGithub size="1.25rem" />;
  }
  if (name === "LinkedIn") {
    return <LiaLinkedinIn size="1.5rem" />;
  }
  return <BiLogoGmail size="1.25rem" />;
}

function SocialsBar() {
  return (
    <div
      className="fixed left-12 top-1/2 z-20 hidden -translate-y-1/2 md:block"
      aria-label="Social links"
    >
      <div className="flex flex-col items-center gap-4 rounded-4xl bg-white/40 p-4 shadow-sm">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            <SocialIcon name={social.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SocialsBar;
