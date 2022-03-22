import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
    return (
        <div className="text-center pb-10">
            <div className="w-60 mx-auto pt-10">
                <Image src={"/banner.png"} width={200} height={200} layout="responsive" alt="banner" />
            </div>
            <h1 className="mt-10 text-2xl text-blue-700 uppercase font-bold">The Movies !!</h1>
            <p className="mt-10 text-gray-600">1000s of Movies on Demand</p>
        </div>
    )
};

export default Homepage;