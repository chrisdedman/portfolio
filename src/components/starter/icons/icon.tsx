export const CdrLogo = ({
  width = 100,
  height = 100,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" fill="#18B6F6" />

    <circle cx="50" cy="50" r="35" fill="#AC7EF4" />


    <path
      d="M30 50 C 30 25, 70 25, 70 50"
      fill="none"
      stroke="white"
      strokeWidth="10"
    />

    <path
      d="M56 37 L 56 63 Q 56 68, 60 68 L 70 68 Q 78 68, 78 60 L 78 40 Q 78 32, 70 32 L 60 32 Q 56 32, 56 37 Z"
      fill="white"
    />
  </svg>
);
