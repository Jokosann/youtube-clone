type SvgButtonProps = React.SVGProps<SVGSVGElement>;

const YourVideos: React.FC<SvgButtonProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'inherit' }}
      {...props}
    >
      <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
    </svg>
  );
};

export default YourVideos;
