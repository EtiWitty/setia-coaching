import { useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { Container, PageHeader, TextLink } from "../components/ui";
import { useI18n } from "../i18n";
import { posts, type Post, type PostType } from "../posts";
import { pageHref } from "../router";

const formatDate = (date: string, lang: string) =>
  new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-GB", { dateStyle: "long" }).format(new Date(date));

function PostCard({ post }: { post: Post }) {
  const { t, lang } = useI18n();
  const b = t.blog;
  const isArticle = post.type === "article";
  const href = isArticle ? pageHref("blog", post.slug) : post.url;
  const action = isArticle ? b.readMore : post.type === "video" ? b.watch : b.listen;
  return (
    <li className="flex flex-col rounded-2xl border border-line bg-white p-7">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="font-semibold text-gold">{b.types[post.type]}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
      </div>
      <h2 className="mt-4 text-xl font-bold leading-8">{post.title[lang]}</h2>
      <p className="mt-3 flex-1 leading-8 text-muted">{post.summary[lang]}</p>
      {href && (
        <a
          href={href}
          {...(isArticle ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="mt-6 self-start font-medium underline decoration-gold decoration-2 underline-offset-8 hover:decoration-ink"
        >
          {action}
        </a>
      )}
    </li>
  );
}

function PostList() {
  const { blog } = useI18n().t;
  const [filter, setFilter] = useState<PostType | "all">("all");
  const types = (["article", "video", "podcast"] as const).filter((type) => posts.some((p) => p.type === type));
  const shown = filter === "all" ? posts : posts.filter((p) => p.type === filter);

  if (posts.length === 0) {
    return <p className="text-lg leading-9 text-muted">{blog.empty}</p>;
  }
  return (
    <>
      {types.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {(["all", ...types] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
              className={`h-10 rounded-full border px-4 text-sm transition-colors ${
                filter === type ? "border-ink bg-ink text-ink-foreground" : "border-line hover:border-ink"
              }`}
            >
              {blog.filters[type]}
            </button>
          ))}
        </div>
      )}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
}

function Article({ slug }: { slug: string }) {
  const { t, lang } = useI18n();
  const post = posts.find((p) => p.slug === slug && p.type === "article");
  return (
    <section>
      <Container className="py-20 sm:py-28">
        <article className="mx-auto max-w-2xl">
          {post ? (
            <>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="font-semibold text-gold">{t.blog.types.article}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              </div>
              <h1 className="mt-6 text-3xl font-extrabold leading-[1.4] sm:text-4xl">{post.title[lang]}</h1>
              <div className="mt-10 space-y-6 text-lg leading-9">
                {post.body?.[lang].map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              </div>
            </>
          ) : (
            <p className="text-lg leading-9 text-muted">{t.blog.notFound}</p>
          )}
          <TextLink href={pageHref("blog")} className="mt-14">
            {t.blog.back}
          </TextLink>
        </article>
      </Container>
    </section>
  );
}

export function Blog({ slug }: { slug?: string }) {
  const { blog } = useI18n().t;
  if (slug) return <Article slug={slug} />;
  return (
    <>
      <PageHeader title={blog.title} intro={blog.intro} />
      <section>
        <Container className="py-20 sm:py-28">
          <PostList />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
