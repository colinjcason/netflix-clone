const Movie = ({ title, movies }) => {  

  return (
    <div className='h-20 w-20 mx-auto m-10'>
      <h3>{title}</h3>
      <div className='flex'>
        {movies.map(movie => (
          <img 
            key={movie.id}
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt='' />
        ))}
      </div>
    </div>
  )
}

export default Movie
