import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../ui/empty";
import { HomeIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative flex w-full h-[500px] items-center justify-center overflow-hidden">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="font-Bricolage-Grotesque mask-b-from-20% mask-b-to-80% font-extrabold text-9xl">
            404
          </EmptyTitle>
          <EmptyDescription className="-mt-8 text-nowrap text-foreground/80 text-lg">
            The page you're looking for might have been <br />
            moved or doesn't exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button
              className="flex items-center gap-2"
            >
              <HomeIcon size={16} />
              <Link to="/">Visit Home</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
