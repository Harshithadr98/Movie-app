import axios from "axios";
import Homepage from "../components/homepage"
import Topmovie from "../components/topmovie";

export default function Home({movies}) {

  return (
    <div>
     <Homepage />
    <Topmovie movies={movies.results} />
    </div>
  )
}
export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=3c26fa10758e578bf1c04582001abc90&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}
