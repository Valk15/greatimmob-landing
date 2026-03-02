import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <span
            className={cn(
                "font-heading text-2xl font-bold tracking-wider text-gold select-none",
                className
            )}
        >
            GREAT<span className="text-foreground">IMMOB</span>
        </span>
    );
}
