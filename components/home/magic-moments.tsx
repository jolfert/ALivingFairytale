import Image from "next/image";
import type { MediaAsset } from "@/data/types";

type MagicMomentsProps = {
  photos: ReadonlyArray<MediaAsset>;
};

/**
 * Polaroid-style filmstrip of real party photos. Horizontal snap scroll on
 * every breakpoint — the slight alternating tilt only kicks in on larger
 * screens where it reads as a photo wall rather than clutter.
 */
export function MagicMoments({ photos }: MagicMomentsProps) {
  return (
    <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-8 lg:px-8">
      {photos.map((photo, index) => (
        <figure
          key={`${photo.src}-${index}`}
          className={`w-[64%] max-w-[15rem] shrink-0 snap-center overflow-hidden rounded-[1rem] border-[6px] border-white bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-magical sm:w-[15rem] ${
            index % 2 === 0 ? "sm:-rotate-[1.3deg]" : "sm:rotate-[1.3deg]"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-44 w-full rounded-[0.6rem] object-cover sm:h-52"
            style={{ objectPosition: photo.objectPosition }}
          />
        </figure>
      ))}
    </div>
  );
}
