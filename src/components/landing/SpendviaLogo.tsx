interface SpendviaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SpendviaLogo = ({ className = "", size = "md" }: SpendviaLogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <span
      className={`font-semibold tracking-tight ${sizeClasses[size]} ${className}`}
    >
      <span className="gradient-text">Spend</span>
      <span className="text-foreground">via</span>
    </span>
  );
};

export default SpendviaLogo;
