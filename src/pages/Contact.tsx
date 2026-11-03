import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Container, PageHeader } from "../components/ui";
import { contact } from "../config";
import { useI18n } from "../i18n";

function Detail({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-soft text-ink">{icon}</span>
      <div>
        <div className="text-sm text-muted">{label}</div>
        <div className="mt-1 font-medium leading-7">{children}</div>
      </div>
    </li>
  );
}

function ContactForm() {
  const { contact: c } = useI18n().t;
  const f = c.form;
  const [sent, setSent] = useState(false);

  // No backend: compose the message in the visitor's email app.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [f.name, f.company, f.email, f.phone, f.topic, f.message]
      .map((label, i) => `${label}: ${data.get(["name", "company", "email", "phone", "topic", "message"][i]) ?? ""}`)
      .join("\n");
    const subject = `${data.get("topic")} — ${data.get("name")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base outline-none transition focus:border-ink focus:ring-2 focus:ring-gold/40";

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-2xl border border-line bg-white p-6 sm:grid-cols-2 sm:p-8">
      <h2 className="text-xl font-bold sm:col-span-2">{f.title}</h2>
      <label className="text-sm font-medium">
        {f.name}
        <input name="name" required autoComplete="name" className={input} />
      </label>
      <label className="text-sm font-medium">
        {f.company}
        <input name="company" autoComplete="organization" className={input} />
      </label>
      <label className="text-sm font-medium">
        {f.email}
        <input name="email" type="email" required autoComplete="email" dir="ltr" className={input} />
      </label>
      <label className="text-sm font-medium">
        {f.phone}
        <input name="phone" type="tel" autoComplete="tel" dir="ltr" className={input} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        {f.topic}
        <select name="topic" className={input}>
          {f.topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        {f.message}
        <textarea name="message" required rows={5} className={`${input} h-auto py-3`} />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex h-13 w-full items-center justify-center rounded-md bg-ink px-7 font-semibold text-ink-foreground transition-colors hover:bg-ink-soft sm:w-auto"
        >
          {f.submit}
        </button>
        {sent && (
          <p role="status" className="mt-4 rounded-md bg-gold-soft p-4 text-sm leading-7">
            {f.success}
          </p>
        )}
      </div>
    </form>
  );
}

export function Contact() {
  const { t, lang } = useI18n();
  const c = t.contact;
  const address = contact.address[lang];
  const hasDetails = Boolean(contact.email || contact.phone || contact.whatsapp || address);

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} />
      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {hasDetails ? (
            <ul className="space-y-7">
              {contact.email && (
                <Detail icon={<Mail className="size-5" aria-hidden />} label={c.details.email}>
                  <a href={`mailto:${contact.email}`} dir="ltr" className="hover:underline">
                    {contact.email}
                  </a>
                </Detail>
              )}
              {contact.phone && (
                <Detail icon={<Phone className="size-5" aria-hidden />} label={c.details.phone}>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} dir="ltr" className="hover:underline">
                    {contact.phone}
                  </a>
                </Detail>
              )}
              {contact.whatsapp && (
                <Detail icon={<MessageCircle className="size-5" aria-hidden />} label={c.details.whatsapp}>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {c.details.whatsappAction}
                  </a>
                </Detail>
              )}
              {address && (
                <Detail icon={<MapPin className="size-5" aria-hidden />} label={c.details.address}>
                  {address}
                </Detail>
              )}
            </ul>
          ) : (
            <p className="text-lg leading-9 text-muted">{c.pending}</p>
          )}
          {contact.email && <ContactForm />}
        </Container>
      </section>
    </>
  );
}
