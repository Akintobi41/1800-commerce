import { FC } from "react";


interface IProps extends React.SVGProps<SVGSVGElement> {
  size?: string,
  strokeWidth?: string,
  className?:string
  onClick?: React.MouseEventHandler<SVGSVGElement>; 
}

const CloseIcon: FC<IProps> = ({
  size = "size-6",
  strokeWidth = "1.5",
  className,
  onClick,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={`${size} ${className}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;
