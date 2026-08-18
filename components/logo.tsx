import { AnimatedLogo } from "./animated-logo"

export function Logo({ className = "", useSilver = false }: { className?: string; useSilver?: boolean }) {
  return <AnimatedLogo className={className} useSilver={useSilver} />
}
