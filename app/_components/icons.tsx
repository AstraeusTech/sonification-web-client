let sizeConfig = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

interface IconProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function ChevronDown({ className, size }: IconProps) {
  const sizeClass = size ? sizeConfig[size] : sizeConfig.sm;
  const classes = sizeClass + ' ' + (className ? className : '');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
