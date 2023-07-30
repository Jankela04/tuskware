import { Skeleton } from "@/components/ui/Skeleton";
import React from "react";

function MammothsPageLoading() {
  return (
    <>
      <div className="mx-auto mt-8 max-w-4xl px-4 md:flex md:gap-8">
        <Skeleton className="hidden aspect-square w-96 md:block" />
        <div className="flex flex-col items-center md:items-start md:justify-between">
          <div>
            <Skeleton className="h-8 w-48" />
            <Skeleton className="mx-auto mt-2 h-4 w-24 md:mx-0" />
          </div>
          <Skeleton className="mt-4 block aspect-square w-full max-w-sm px-2 md:hidden" />
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Skeleton className="mt-8 h-6 w-16" />
            <div className="flex gap-5">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-16 max-w-4xl px-4 md:flex md:gap-8">
        <Skeleton className="hidden aspect-square w-96 md:block" />
        <div className="flex flex-col items-center md:items-start md:justify-between">
          <div>
            <Skeleton className="h-8 w-48" />
            <Skeleton className="mx-auto mt-2 h-4 w-24 md:mx-0" />
          </div>
          <Skeleton className="mt-4 block aspect-square w-full max-w-sm px-2 md:hidden" />
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Skeleton className="mt-8 h-6 w-16" />
            <div className="flex gap-5">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MammothsPageLoading;
