import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let's Connect
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I'm always interested in discussing mobile engineering, Flutter, iOS development, enterprise applications, or new career opportunities. Feel free to reach out via email or connect with me on LinkedIn.
        </p>
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="hover:text-primary transition-colors"
        >
          📧 {DATA.contact.email}
        </Link>
        <Link
          href="tel:+201061253785"
          className="hover:text-primary transition-colors"
        >
          📱 +20 106 125 3785
        </Link>
      </div>
    </div>
  );
}

