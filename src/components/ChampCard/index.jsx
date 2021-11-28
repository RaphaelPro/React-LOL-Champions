export const ChampCard = ({ title, description, cover, body, urlInfo, id }) => (
  <div className="post">
    <img src={cover} alt={title} />

    <div className="post-content">
      <h1>{title}</h1>

      <h3>{description}</h3>
      <p>{body}</p>
      <a target="_blank" href={urlInfo} rel="noreferrer">
        Saiba mais
      </a>
    </div>
  </div>
);
