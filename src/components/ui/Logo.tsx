export function Logo({ variant = 'full' }: { variant?: 'full' | 'icon' }) {
  if (variant === 'icon') {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="4" fill="#E8521A"/>
        <path d="M8 26L14 10H18L24 26H20.5L19.2 22.5H12.8L11.5 26H8ZM13.8 19.8H18.2L16 13.5L13.8 19.8Z" fill="white"/>
        <path d="M25 10H28V26H25V10Z" fill="white" opacity="0.6"/>
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {/* Icon mark */}
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="5" fill="#E8521A"/>
        {/* Stylized R */}
        <path d="M9 28V10H19C21.2 10 23 10.6 24.2 11.9C25.4 13.1 26 14.7 26 16.5C26 17.9 25.6 19.1 24.9 20.1C24.2 21.1 23.2 21.8 21.9 22.2L26.5 28H22.5L18.3 22.5H12.5V28H9ZM12.5 19.5H18.8C20 19.5 20.9 19.2 21.5 18.6C22.1 18 22.4 17.2 22.4 16.2C22.4 15.2 22.1 14.4 21.5 13.8C20.9 13.2 20 12.9 18.8 12.9H12.5V19.5Z" fill="white"/>
        {/* Demolition accent bar */}
        <rect x="28" y="10" width="3" height="18" rx="1.5" fill="white" opacity="0.5"/>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-white text-xl tracking-wider">RAPID</span>
        <span className="font-display text-brand-orange text-xl tracking-wider">RENOVATION</span>
        <span className="font-body text-brand-concrete text-[9px] tracking-[0.25em] uppercase font-light mt-0.5">
          & Demolition LLC
        </span>
      </div>
    </div>
  )
}
