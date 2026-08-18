import Image from "next/image"

interface AnimatedLogoProps {
  className?: string
  showText?: boolean
  useSilver?: boolean
}

export function AnimatedLogo({ className = "", showText = true, useSilver = true }: AnimatedLogoProps) {
  return (
    <span className={`brand-lockup ${className}`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-aura" />
        <span className="brand-mark-ring" />
        <span className="brand-mark-sweep" />
        <Image
          className="brand-mark-image"
          src={useSilver ? "/images/logo-silver.webp" : "/images/logo-blue.png"}
          alt=""
          width={48}
          height={48}
          priority
        />
        <span className="brand-mark-node brand-mark-node-one" />
        <span className="brand-mark-node brand-mark-node-two" />
      </span>
      {showText && (
        <span className="brand-wordmark">
          <strong><span>IT</span> Club</strong>
          <small>of LNBTI</small>
        </span>
      )}
    </span>
  )
}
