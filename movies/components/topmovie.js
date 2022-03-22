import Moviecard from "./moviecard";

const Topmovie = ({movies}) => {
    return(
    <div className="bg-black container max-w-7xl mx-auto pb-10 px-4">
    <h1 className="text-blue-2xl">Must-Watch Movies</h1>
    <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
    {movies.map(movie => <Moviecard  movie ={movie} key={movie.id} /> )}
    </div>
    </div>
    );
}
export default Topmovie;