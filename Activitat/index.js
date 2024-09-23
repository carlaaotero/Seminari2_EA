//SEMINARI_2 -- Carla Otero Roca

// Funció para obtenir les dades d'un usuari i els seus posts 

async function fetchUserAndPosts(userId) {
  try {
      // Obtenir les dades de l'usuari des de l'endopoint d'usuaris
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await userResponse.json();

      // Obtenir els posts de l'usuari des de l'endpoint de posts
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const posts = await postsResponse.json();

      // Funcions d'alt nivell combinades
      
      // Filtrar els posts que tinguin més de 30 caràcters al títol
      const filteredPosts = posts.filter(post => post.title.length > 30);

      // Ordenar els posts per la longitud del body del post
      const sortedPosts = filteredPosts.sort((a, b) => a.body.length - b.body.length);

      // "Mapear" només els títols dels posts
      const titles = sortedPosts.map(post => post.title);

      // "Reduce" per obtenir el total de caràcters en tots els títols
      const totalTitleLength = titles.reduce((total, title) => total + title.length, 0);

      
      console.log("Usuario:", user);
      console.log("Posts filtrados y ordenados:", titles);
      console.log("Total de caracteres en los títulos:", totalTitleLength);

  } catch (error) {
      console.error('Error al obtener los datos:', error);
  }
}

// Trucar a la funció per a l'usuari amb id=1
fetchUserAndPosts(1);







