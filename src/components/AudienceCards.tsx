// Accent colour per block, so the audiences read as distinct but related.
const accents = ["bg-gold", "bg-teal", "bg-ink"];

// Dots grow with the audience: one person, a leader with their team, a whole group.
function ScaleDots({ count, accent }: { count: number; accent: string }) {
  return (
    <span className="flex gap-1.5" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={`size-2 rounded-full ${accent}`} />
      ))}
    </span>
  );
}

// Row of audience blocks; `items` are [title, description] pairs, from individual to whole organisation.
export function AudienceCards({ items, className = "" }: { items: string[][]; className?: string }) {
  return (
    <ul className={`grid gap-5 md:grid-cols-3 md:gap-6 ${className}`}>
      {items.map(([title, description], i) => (
        <li key={title} className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8">
          <span className={`absolute inset-x-0 top-0 h-1 ${accents[i % accents.length]}`} aria-hidden />
          <ScaleDots count={i + 1} accent={accents[i % accents.length]} />
          <h3 className="mt-6 text-xl font-bold leading-8">{title}</h3>
          <p className="mt-3 leading-8 text-muted">{description}</p>
        </li>
      ))}
    </ul>
  );
}
