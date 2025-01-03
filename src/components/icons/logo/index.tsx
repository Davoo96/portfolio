type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="29"
    fill="none"
  >
    <path
      fill="url(#a)"
      fill-rule="evenodd"
      d="M28.412 18.6c.383-1.3.588-2.676.588-4.1 0-1.194-.144-2.355-.417-3.465L32 13.109c1.3.79 1.278 2.682-.038 3.442l-3.549 2.048Zm0 0C26.644 24.61 21.084 29 14.5 29 6.492 29 0 22.508 0 14.5S6.492 0 14.5 0c6.814 0 12.53 4.7 14.083 11.035L12.196 1.082c-1.333-.81-3.038.15-3.038 1.71v23.46c0 1.54 1.667 2.502 3 1.732l16.254-9.385Z"
      clip-rule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1="29.047"
        x2="0"
        y1="14.5"
        y2="14.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE597" />
        <stop offset="1" stop-color="#AAFF82" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
