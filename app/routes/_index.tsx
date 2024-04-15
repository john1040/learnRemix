import type { MetaFunction } from "@remix-run/cloudflare";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <MaxWidthWrapper>
      <div className="max-w-5xl flex-col gap-5 items-center justify-center">
        <Button>hello</Button>
        <h1 className="text-3xl font-bold underline text-red-600">
          Hello world!
        </h1>
      </div>
    </MaxWidthWrapper>


  );
}
