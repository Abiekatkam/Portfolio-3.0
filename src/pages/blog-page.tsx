import PreFooter from "../components/views/pre-footer";
import Footer from "../components/views/footer";
import AnimatedText from "../components/routes/animated-text";
import BorderCard from "../components/views/border-card";
import AnimatedContainer from "../components/views/animated-container";
import { blogPosts, NavigationPages } from "../lib/constants";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import type { BlogPost } from "../lib/types";
import { cn } from "../lib/utils";
import PageNavigation from "../components/views/page-navigation";

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
      </div>
      <BorderCard>
        <div className="max-w-7xl ">
          <AnimatedContainer className="flex flex-col gap-8 sm:pt-10">
            {/* Mobile */}
            <div className="flex flex-col gap-4 sm:hidden">
              <FeaturedBlogCard post={featuredPost} className="h-[300px]" />

              <StandardBlogCard
                post={sideTopPost}
                className="h-[260px] sm:col-span-1"
              />

              <StandardBlogCard
                post={sideBottomPost}
                className="h-[260px] sm:col-span-1"
              />
            </div>

            {/* Desktop */}
            <div className="relative hidden h-[400px] sm:flex">
              <FeaturedBlogCard post={featuredPost} className="w-[72%]" />

              <CompactBlogCard
                post={sideTopPost}
                className="absolute -top-12 right-0 h-[45%] w-1/4"
              />

              <CompactBlogCard
                post={sideBottomPost}
                className="absolute bottom-0 right-0 h-[60%] w-1/4"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <StandardBlogCard
                post={bottomLeftPost}
                className="h-[260px] sm:col-span-1"
              />

              <StandardBlogCard
                post={bottomMiddlePost}
                className="h-[260px] sm:col-span-1"
              />

              <StandardBlogCard
                post={bottomRightPost}
                className="h-[260px] sm:col-span-2"
              />
            </div>
          </AnimatedContainer>
        </div>
      </BorderCard>
      <PageNavigation previous={NavigationPages[2]} />
      <PreFooter />
      <Footer />
    </div>
  );
};

function FeaturedBlogCard({
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
        "group relative overflow-hidden rounded-2xl border shadow",
        className,
      )}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
          {post.source}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="mb-2 text-xs text-white/70">{post.author}</p>

        <h2 className="line-clamp-2 font-Bricolage-Grotesque text-xl capitalize font-bold text-white">
          {post.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-white/70">{post.readTime}</span>

          <ArrowRightIcon
            className="text-zinc-200 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
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
