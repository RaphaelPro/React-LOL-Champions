export const ChampCard = ({ title, description, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p>{body}</p>
    </div>
  </div>
);
