import { ChampCard } from "../ChampCard";

export const Champions = ({ champions }) => (
  <div className="posts">
    {champions.map((champ) => (
      <ChampCard
        key={champ.id}
        title={champ.title}
        description={champ.description}
        body={champ.body}
        id={champ.id}
        cover={champ.cover}
      />
    ))}
  </div>
);
