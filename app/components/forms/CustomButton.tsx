interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      className={`w-full py-4 bg-aw hover:bg-awDark text-white text-center rounded-xl transition cursor-pointer ${className}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default CustomButton;
