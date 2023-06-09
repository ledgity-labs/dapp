"use client";
import React, { FC, useLayoutEffect, useRef } from "react";
import { Button, Scroller, Card, Cube } from "@/components/ui";
import { clsx } from "clsx";
import { gsap } from "@/lib/gsap";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const HomeHero: FC<Props> = ({ className }) => {
  const heroSection = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth >= 640) {
      const ctx = gsap.context(() => {
        gsap.to(heroSection.current, {
          yPercent: -40,
          opacity: 0,
          scale: 1.4,
          scrollTrigger: {
            trigger: heroSection.current,
            start: "top top",
            end: "80% top",
            scrub: 1,
          },
        });
      });
      return () => ctx.revert();
    }
    return () => {};
  });

  return (
    <section
      className={twMerge(
        "relative min-h-[140vh] will-change-[transform,opacity]",
        "bg-[url('/assets/glow-light.webp')] bg-cover md:bg-center bg-[left_30%_bottom_0%]",
        "before:min-h-[140vh] before:absolute before:inset-0 before:bg-hero before:pointer-events-none before:opacity-[0.006] before:brightness-[250%] before:contrast-[600%]",
        "after:bg-gradient-to-b after:from-transparent after:to-bg after:absolute after:top-[100vh] after:w-screen after:h-[40vh] after:-z-0",
        className
      )}
    >
      <div
        ref={heroSection}
        className="relative flex -mt-[92px]  flex-col min-h-screen justify-center items-center gap-[7.5vh]"
      >
        <Cube size="tiny" className="right-12" />
        <Cube size="small" className="right-80 top-[35%] 2xl:block hidden" />
        <Cube size="small" className="right-14 top-10" />
        <Cube size="tiny" className="left-44 bottom-12 xl:hidden block" />
        <Cube size="small" className="left-44 bottom-12 xl:block hidden" />
        <Cube size="small" className="left-80 bottom-[30%] 2xl:block hidden" />
        <Cube size="small" className="-left-16 bottom-[40%]" />
        <Cube
          size="medium"
          className="sm:block hidden lg:right-44 md:right-16 sm:-right-0  lg:bottom-[10%] sm:bottom-0"
        />
        <Cube size="medium" className="lg:block hidden left-44 top-[10%]" />
        <Cube
          size="tiny"
          className="lg:block hidden lg:right-[47%] 2xl:right-[35%] right-[35%] -bottom-2"
        />
        <Cube size="small" className="left-[30%] -bottom-4 2xl:block hidden" />

        <h2 className="text-center leading-none font-heading xl:text-[7.1rem] lg:text-[6rem] md:text-[10vw] sm:text-[11vw] text-[14vw] sm:block inline-flex flex-col font-bold text-slate-700 relative">
          Stable
          <span> yield for</span>
          <br className="hidden sm:block" />
          <span className="text-indigo-300 text-transparent bg-clip-text bg-gradient-to-t from-indigo-300 to-indigo-500">
            stablecoins<span className="text-slate-700">.</span>
          </span>
        </h2>
        <section>
          <div className="sm:flex hidden content-around justify-around xl:gap-16 md:gap-10 sm:gap-8">
            <Card
              defaultGradient={true}
              className="relative flex lg:h-40 lg:w-44 md:h-36 md:w-40 sm:h-32 sm:w-36 h-24 w-24 flex-col items-center justify-center p-6"
            >
              <p className="mb-3 lg:text-5xl md:text-[2.75rem] sm:text-4xl text-2xl font-bold text-fg/80">
                7%
              </p>
              <h3 className="absolute bottom-3 sm:text-lg text-[0.92rem] font-semibold text-primary/50 font-heading">
                APY
              </h3>
            </Card>
            <Card
              defaultGradient={true}
              className="relative flex lg:h-40 lg:w-44 md:h-36 md:w-40 sm:h-32 sm:w-36 h-24 w-24 flex-col items-center justify-center p-6"
            >
              <p className="mb-3 lg:text-5xl md:text-[2.75rem] sm:text-4xl text-2xl font-bold text-fg/80">
                ±0.1%
              </p>
              <h3 className="absolute bottom-3 sm:text-lg text-[0.92rem] font-semibold text-primary/50 font-heading">
                1Y stability
              </h3>
            </Card>
            <Card
              defaultGradient={true}
              className="relative flex lg:h-40 lg:w-44 md:h-36 md:w-40 sm:h-32 sm:w-36 h-24 w-24 flex-col items-center justify-center p-6"
            >
              <p className="mb-3 lg:text-5xl md:text-[2.75rem] sm:text-4xl text-2xl font-bold text-fg/80">
                $8k
              </p>
              <h3 className="absolute bottom-3 sm:text-lg text-[0.92rem] font-semibold text-primary/50 font-heading">
                TVL
              </h3>
            </Card>
          </div>
          <div className="block sm:hidden">
            <Card>
              <ul className="flex justify-around h-28">
                <li className="relative flex items-center justify-center px-[7vw]">
                  <p className="mb-3 text-4xl font-bold text-fg/80">7%</p>
                  <h3 className="absolute bottom-3 text-[0.92rem] font-semibold text-primary/50 font-heading">
                    APY
                  </h3>
                </li>

                <li className={clsx("relative flex items-center justify-center px-[4vw]", "bg-fg/[5%]")}>
                  <p className="mb-3 text-4xl font-bold text-fg/80">±0.1%</p>
                  <h3
                    className={clsx(
                      "absolute bottom-3 text-[0.92rem] font-semibold text-primary/50 font-heading",
                      "whitespace-nowrap"
                    )}
                  >
                    1Y stability
                  </h3>
                </li>
                <li className="relative flex items-center justify-center px-[7vw]">
                  <p className="mb-3 text-4xl font-bold text-fg/80">$8k</p>
                  <h3 className="absolute bottom-3 text-base font-semibold text-primary/50 font-heading">
                    TVL
                  </h3>
                </li>
              </ul>
            </Card>
          </div>
        </section>
        <div className="flex flex-row flex-wrap px-8 justify-center items-center gap-14">
          <Button
            size="large"
            data-tf-popup="J2ENFK9t"
            data-tf-opacity="100"
            data-tf-size="100"
            data-tf-iframe-props="title=Subscribe to app release"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
          >
            Invest now
          </Button>
          <Button
            className="sm:block hidden"
            variant="outline"
            size="large"
            onClick={() => scrollTo(0, window.innerHeight - 97.4 - 50)}
          >
            Learn more
          </Button>
        </div>
        <Scroller className="absolute bottom-[4vh]" />
      </div>
    </section>
  );
};
export default HomeHero;
