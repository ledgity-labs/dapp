import { FC } from "react";
import { Button, Cube, FadeIn } from "@/components/ui";

const HomeCTA: FC = () => {
  return (
    <FadeIn>
      <section className="relative pb-52 flex justify-center gap-8 items-center px-10 flex-wrap">
        <Cube size="large" className="right-48 bottom-[10%]" />
        <h3 className="text-center font-semibold text-4xl font-heading ">
          Ready to get <span className="whitespace-nowrap">started ?</span>
        </h3>
        <Button
          data-tf-popup="J2ENFK9t"
          data-tf-opacity="100"
          data-tf-size="100"
          data-tf-iframe-props="title=Subscribe to app release"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          size="large"
        >
          Take me to the app
        </Button>
      </section>
    </FadeIn>
  );
};
export default HomeCTA;
