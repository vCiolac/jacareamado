import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";

// Pequena seleção complementar — a primeira foto ocupa o bloco maior
export default function PhotoMosaic() {
  const photos = siteConfig.mosaic.slice(0, 5);

  return (
    <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
      {photos.map((photo, i) => (
        <li
          key={i}
          className={`relative overflow-hidden rounded-2xl ${
            i === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-square"
          }`}
        >
          <Photo
            src={photo.src}
            alt={photo.alt}
            placeholder={photo.placeholder}
            configKey={`mosaic[${i}]`}
            sizes={i === 0 ? "(min-width: 768px) 448px, 100vw" : "(min-width: 768px) 224px, 50vw"}
            className="rounded-2xl"
          />
        </li>
      ))}
    </ul>
  );
}
