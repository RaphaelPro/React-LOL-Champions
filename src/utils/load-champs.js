export const loadChamps = async () => {
  //const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  //const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  const champsResponse = fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json"
  );
  const [/*posts, photos*/ champs] = await Promise.all([
    //postResponse,
    //photoResponse,
    champsResponse,
  ]);

  // const postsJson = await posts.json();
  // const photosJson = await photos.json();
  const champsJson = await champs.json();
  console.log(champsJson);
  //Zipper
  const postsAndPhotos = Object.values(champsJson.data).map((champ, index) => {
    var champSimpleName = champ.name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("'", "-");
    return {
      //...post,
      title: champ.name,
      body: champ.blurb,
      description: champ.title,
      cover: `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${champ.image.full}`,
      urlInfo: `https://www.leagueoflegends.com/pt-br/champions/${champSimpleName}/`,
      //cover: photosJson[index].url,
    };
  });

  return postsAndPhotos;
};
