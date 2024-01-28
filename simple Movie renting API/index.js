class Movie {
  constructor(title, genre, rating, price) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.price = price;
  }

  toString() {
    return `${this.title} (${this.genre}, ${this.rating}, $${this.price})`;
  }
}

class MovieStore {
  constructor(movies) {
    this.movies = movies;
  }

  findMoviesByGenre(genre) {
    return this.movies.filter((movie) => movie.genre === genre);
  }

  findMoviesByRating(rating) {
    return this.movies.filter((movie) => movie.rating === rating);
  }

  findMoviesByPrice(price) {
    return this.movies.filter((movie) => movie.price === price);
  }

  rentMovie(title) {
    const movieIndex = this.movies.findIndex((movie) => movie.title === title);

    if (movieIndex === -1) {
      return `Sorry, we don't have "${title}" in stock.`;
    } else {
      const rentedMovie = this.movies[movieIndex];
      this.movies.splice(movieIndex, 1);
      return `You have rented "${rentedMovie.title}" for $${rentedMovie.price}. Enjoy!`;
    }
  }
}

const movies = [
  new Movie("The Shawshank Redemption", "Drama", "9.3", 2.99),
  new Movie("The Godfather", "Crime", "9.2", 3.99),
  new Movie("The Dark Knight", "Action", "9.0", 4.99),
  new Movie("The Lord of the Rings: The Fellowship of the Ring", "Adventure", "8.8", 1.99),
  new Movie("Forrest Gump", "Drama", "8.8", 2.99),
];

const movieStore = new MovieStore(movies);
console.log(movieStore.findMoviesByGenre("Drama"));
console.log(movieStore.findMoviesByRating("9.0"));
console.log(movieStore.findMoviesByPrice(2.99));
console.log(movieStore.rentMovie("The Dark Knight"));
console.log(movieStore.rentMovie("The Dark Knight"));
