import Image from "next/image";
import Link from "next/link";


const Moviecard = ({ movie }) => {
    return (
        <Link href={`/moviedetails/${movie.id}`} passHref>
        <div className="bg-blue shadow-sm rounded-md cursor-pointer border-solid border-4 border-indigo-600">
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={300} height={500} className="rounded-t-md" />
            <div className="px-6 py-2 w-50 h-40 bg-sky-700 hover:bg-black ">
                <div className="font-bold text-white text-xl mb-1">{movie.title}</div>
                <p className="text-white text-base mb-1">Ratings: {movie.vote_average}</p>
            </div>
        </div>
        </Link>
    )
};

export default Moviecard;