import React, {useState, useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);
    // console.log(popularMovies);

    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-24">
                <h1 className="text-2xl font-bold text-gray-800 px-2 py-2">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-navCol-300 py-16">
                <div className="container mx-auto px-24">
                    <div className="flex">
                        <img 
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                        alt="Rupay"
                        className="w-full h-full"
                        />
                    </div>
                    {/* <Premier /> */}
                    <PosterSlider images={popularMovies} title="Premiere" subtitle="Brand New Release Every Friday" isDark={true} />
                </div>
            </div>
        </div>

        <div className="container mx-auto px-24">
            <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false} />
        </div>

        <div className="container mx-auto px-24">
            <PosterSlider images={popularMovies} title="Outdoor Events" isDark={false} />
        </div>
        </>
    );
};

export default HomePage;