import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function QuickInfoBar() {
  const { quickInfo } = siteConfig;

  const rows = [
    { icon: Clock, text: quickInfo.hours },
    { icon: MapPin, text: quickInfo.address },
    { icon: Phone, text: quickInfo.phones.join("  •  ") },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-5">
      <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-navy/10 sm:grid-cols-3 sm:gap-6 sm:p-7">
        {rows.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky-deep">
              <Icon className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <p className="text-sm font-medium leading-snug text-ink/80">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
