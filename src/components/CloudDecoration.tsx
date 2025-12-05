type CloudSize = 'sm' | 'md' | 'lg';
type CloudVariant = 'light' | 'medium' | 'dark';

interface CloudDecorationProps {
  size?: CloudSize;
  variant?: CloudVariant;
  className?: string;
}

const sizeClasses: Record<CloudSize, string> = {
  sm: 'w-16 h-6',
  md: 'w-24 h-9',
  lg: 'w-32 h-12',
};

const variantClasses: Record<CloudVariant, string> = {
  light: 'bg-[#3884ff]/15',
  medium: 'bg-[#3884ff]/20',
  dark: 'bg-[#3884ff]/25',
};

export default function CloudDecoration({
  size = 'md',
  variant = 'light',
  className = '',
}: CloudDecorationProps) {
  return (
    <div
      className={`cloud-decoration ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
}
