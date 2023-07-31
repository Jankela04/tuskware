"use client";
import React from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";

type Image = {
  name: string;
  url: string;
};

type ImageCarouselProps = {
  images: Image[];
  options?: EmblaOptionsType;
} & React.HTMLAttributes<HTMLDivElement>;

function ImageCarousel({ images, options, className }: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, idx) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={idx}>
              <div className="aspect-square">
                <Image
                  key={idx}
                  src={image.url}
                  alt={image.name}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex flex-row justify-center gap-4">
          {images.map((img, idx) => (
            <Button
              key={idx}
              onClick={() => scrollTo(idx)}
              comp="button"
              variant="outline"
              className={cn(
                "relative h-24 w-24 rounded-none border-border",
                idx === selectedIndex && "ring-1 ring-primary"
              )}
            >
              <Image src={img.url} alt={img.name} fill />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
