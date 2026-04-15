import Image from "next/image";

type CharacterCard = {
  name: string;
  category: string;
  shortDescription: string;
  tags: ReadonlyArray<string>;
  mainImage: string;
};

type FeaturedExperiencesProps = {
  characters: ReadonlyArray<CharacterCard>;
};

export function FeaturedExperiences({
  characters,
}: FeaturedExperiencesProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {characters.map((character) => (
        <article
          key={character.name}
          className="glass-panel overflow-hidden rounded-[2rem]"
        >
          <div className="border-b border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,241,255,0.92))] p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow border-0 px-0 py-0 shadow-none">
                {character.category}
              </span>
              <Image
                src={character.mainImage}
                alt=""
                width={72}
                height={72}
                aria-hidden
              />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-semibold text-midnight">
              {character.name}
            </h3>
            <p className="section-copy mt-3 text-sm">
              {character.shortDescription}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {character.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[rgba(125,100,255,0.08)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
