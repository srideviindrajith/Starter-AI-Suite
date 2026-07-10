interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    neutral: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-700/50 text-dark-300 border border-dark-600/50',
  };

  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
