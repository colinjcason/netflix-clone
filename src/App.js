import './App.css';
import Header from './components/Header'
import Movie from './components/Movie'
import useFetch from './hooks/useFetch'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  };

  const { data: originals } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.originals)
  const { data: trending } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.trending)
  const { data: now_playing } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.now_playing)
  const { data: popular } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.popular)
  const { data: top_rated } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.top_rated)
  const { data: upcoming } = useFetch('https://api.themoviedb.org/3', API_KEY, endpoints.upcoming)


  return (
    <div className="App">
      <Header />
      <Movie movies={originals} />
      <Movie movies={trending} />
      <Movie movies={now_playing} />
      <Movie movies={popular} />
      <Movie movies={top_rated} />
      <Movie movies={upcoming} />
    </div>
  );
}

export default App;
