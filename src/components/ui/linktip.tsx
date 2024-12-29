import Link from "next/link";
import { Tooltip } from ">/tooltip";

interface LinkTipProps {
  href: string;
  tooltipText: string;
  children: React.ReactNode;
  lang?: string;
  className?: string;
}

export function LinkTip({
  href,
  tooltipText,
  children,
  lang,
  className = "underline decoration-wavy decoration-secondary",
}: LinkTipProps): React.JSX.Element {
  return (
    <Tooltip
      tips={
        <p
          className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl omnes"
          lang={lang}
        >
          {tooltipText}
        </p>
      }
    >
      <Link className={className} href={href} lang={lang} prefetch>
        {children}
      </Link>
    </Tooltip>
  );
}
