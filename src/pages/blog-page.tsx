import PreFooter from "../components/views/pre-footer";
import Footer from "../components/views/footer";
import AnimatedText from "../components/routes/animated-text";
import BorderCard from "../components/views/border-card";
import AnimatedContainer from "../components/views/animated-container";
import { blogPosts } from "../lib/constants";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import type { BlogPost } from "../lib/types";
import { cn } from "../lib/utils";

const BlogPage = () => {
  const [
    featuredPost,
    sideTopPost,
    sideBottomPost,
    bottomLeftPost,
    bottomMiddlePost,
    bottomRightPost,
  ] = blogPosts;

  return (
    <div className="p-4 md:p-10">
      <BorderCard>
        <div className="max-w-7xl">
          <div className="mb-10 w-full">
            <h1 className="text-4xl font-bold font-Bricolage-Grotesque mb-1">
              <AnimatedText className="font-bold">
                Engineering Insights
              </AnimatedText>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              A collection of technical deep dives, architectural decisions,
              lessons learned, and practical guides on software engineering, AI,
              distributed systems, and modern web development.
            </p>
          </div>
          <AnimatedContainer className="flex flex-col gap-8">
            <div className="relative flex h-[400px] flex-col gap-4 sm:flex-row">
              <FeaturedBlogCard post={featuredPost} />

              <CompactBlogCard
                post={sideTopPost}
                className="absolute -top-12 right-0 h-[45%] w-full sm:w-1/4"
              />

              <CompactBlogCard
                post={sideBottomPost}
                className="absolute bottom-0 right-0 h-[60%] w-full sm:w-1/4"
              />
            </div>

            <div className="flex h-[300px] flex-col gap-8 sm:flex-row">
              <StandardBlogCard
                post={bottomLeftPost}
                className="w-full sm:w-[24%]"
              />

              <StandardBlogCard
                post={bottomMiddlePost}
                className="w-full sm:w-[24%]"
              />

              <StandardBlogCard
                post={bottomRightPost}
                className="w-full sm:w-[48%]"
              />
            </div>
          </AnimatedContainer>
        </div>
      </BorderCard>

      <PreFooter />
      <Footer />
    </div>
  );
};

function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={post.url}
      target="_blank"
      className="group relative w-full sm:w-[72%] overflow-hidden rounded-xl border shadow"
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute top-6 left-6 flex flex-col gap-2 text-zinc-900">
        <span className="rounded-lg bg-white/70 px-2 py-1 text-sm font-semibold">
          {post.source}
        </span>

        <span className="w-fit rounded-lg bg-white/40 px-2 py-1 text-xs font-semibold">
          {post.author}
        </span>
      </div>

      <h2 className="absolute bottom-6 left-6 rounded-2xl bg-white text-zinc-900 font-Bricolage-Grotesque capitalize p-3 text-lg font-semibold">
        {post.title}
      </h2>

      <ArrowRightIcon className="absolute top-6 right-6 rounded-full bg-white p-6 text-zinc-900 transition-transform group-hover:rotate-12" />
    </Link>
  );
}

function CompactBlogCard({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <Link
      to={post.url}
      target="_blank"
      className={cn(
        "group absolute overflow-hidden rounded-xl border shadow",
        className,
      )}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-xs text-white/80">{post.source}</p>

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-white">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

function StandardBlogCard({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <Link
      to={post.url}
      target="_blank"
      className={cn(
        "group relative overflow-hidden rounded-xl border shadow",
        className,
      )}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute top-4 left-4">
        <span className="rounded-lg bg-white/80 text-zinc-900 px-2 py-1 text-xs font-semibold">
          {post.source}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="line-clamp-2 font-Bricolage-Grotesque text-lg font-semibold text-white">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs text-white/80">
          {post.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-white/70">
          <span>{post.readTime}</span>

          <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default BlogPage;
