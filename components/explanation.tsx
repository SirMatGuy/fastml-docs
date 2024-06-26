"use client";


import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { IconActivity, IconBolt, IconBrandCouchdb, IconBrandMongodb, IconBrandOpenai, IconBrandPython, IconClock, IconCloud, IconDatabase, IconPepper, IconSql, IconUser } from "@tabler/icons-react";
import DotPattern from "./magicui/dot-pattern";
import IconBrandTensor from "./icons/tensor";
import IconBrandKeras from "./icons/keras";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <section  className="mx-auto max-w-sm lg:max-w-4xl min-w-0 space-y-2  overflow-hidden">
      <div
        className="relative flex w-full max-w-sm lg:max-w-4xl items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex mx-auto h-full w-full flex-row items-stretch justify-between gap-10">
          {/* <div className="flex flex-col justify-center">
            <Circle ref={div1Ref}>
              <IconUser className="text-black" />
            </Circle>
          </div> */}
          <div className="flex flex-col justify-center gap-2 text-black">
            <Circle ref={div2Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconDatabase className="w-full h-full " />
            </Circle>
            <Circle ref={div3Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandMongodb className="w-full h-full " />
            </Circle>
            <Circle ref={div4Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandCouchdb className="w-full h-full " />
            </Circle>
            <Circle ref={div5Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconSql className="w-full h-full " />
            </Circle>
          </div>
          <div className="flex flex-col justify-center text-black">
            <Circle ref={div6Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandPython className="w-full h-full " />
            </Circle>
          </div>
          <div className="flex flex-col justify-center gap-2 text-black">
            <Circle ref={div7Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandOpenai className="w-full h-full " />
            </Circle>
            <Circle ref={div8Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandTensor className="w-full h-full " />
            </Circle>
            <Circle ref={div9Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconBrandKeras className="w-full h-full " />
            </Circle>

          </div>
          <div className="flex flex-col justify-center text-black">
            <Circle ref={div10Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconActivity className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-col justify-center text-black">
            <Circle ref={div11Ref} className=" size-10 lg:size-16 lg:p-5">
              <IconCloud className="h-6 w-6" />
            </Circle>
          </div>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          )}
        />

        {/* AnimatedBeams */}

        {/* <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div3Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div5Ref}
          duration={3}
        /> */}
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div6Ref}
            duration={3}

            
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div6Ref}
            duration={3}
          />
        </>
        <>
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div7Ref}
            duration={3}
          />
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div8Ref}
            duration={3}
          />
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div9Ref}
            duration={3}
          />
        </>
        <>
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={div8Ref}
            toRef={div9Ref}
            duration={3}
          />
        </>
        <>
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={div8Ref}
            toRef={div10Ref}
            duration={3}
          />
              <AnimatedBeam
            containerRef={containerRef}
            fromRef={div10Ref}
            toRef={div11Ref}
            duration={3}
          />
        </>
      
      </div>
    </section>
  );
}
