type SvgButtonProps = { active?: boolean } & React.SVGProps<SVGSVGElement>;

const SvgLight = (props: SvgButtonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'inherit' }}
      {...props}
    >
      <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
    </svg>
  );
};

const SvgDark = (props: SvgButtonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'inherit' }}
      {...props}
    >
      <path d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z"></path>
    </svg>
  );
};

const Subscriptions: React.FC<SvgButtonProps> = ({ active, ...props }) => {
  return !active ? <SvgLight {...props} /> : <SvgDark {...props} />;
};

export default Subscriptions;
