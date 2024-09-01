import { cn } from '../../utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn('px-3 py-[6px] bg-[#eee] text-black font-medium rounded-lg text-sm', className)}
    >
      {children}
    </button>
  );
};

export default Button;
