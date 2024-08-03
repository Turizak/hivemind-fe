import { SvgProps } from "../types";

const CreateIcon: React.FC<SvgProps> = ({
  xmlns = 'http://www.w3.org/2000/svg',
  viewBox = '0 0 24 24',
  fill = 'none',
  strokeWidth = 2,
  stroke = 'currentColor',
  className = 'w-6 h-6',
  ...props
}) => {
  return (
    <svg
      xmlns={xmlns}
      viewBox={viewBox}
      fill={fill}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default CreateIcon;
