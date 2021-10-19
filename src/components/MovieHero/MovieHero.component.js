import React from "react";
import { BsHeartFill, BsDot } from "react-icons/bs";
import { BiChevronRight, BiShareAlt } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri"

import CastSlider from "../PosterSlider/CastSlider.component";
import Cast from "../MovieHero/Cast.component";
import Crew from "../MovieHero/Crew.component";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_1VACoqGLc6UCxP",
        amount: 500*100,
        currency: "INR",
        name: "Book My Show",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

const MovieHeroMd = () => {
    return (
        <>
        <div className="flex flex-row w-full h-full">
            <img
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="Shang-Chi: The legend of the Ten Rings"
                className="rounded-lg w-full h-full"
            />
        </div>
        </>
    )
}

const MovieHeroLg = () => {
    return (
        <>
        {/* <div className="md:hidden" style={{height: "calc(180vw)"}}>
            <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>

        <div className="hidden md:block lg:hidden">
            <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div> */}

        {/* <div className="relative w-full flex flex-col" style={{height: "40rem"}}> */}
            {/* <div className="absolute w-full h-full z-10" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
            <div className="absolute z-30 w-64 h-96 left-60 top-24 rounded-xl">
                <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="poster"
                className="w-full h-full"
                />
            </div>
            <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="w-full h-full"
            /> */}
        {/* </div> */}

        <div className="relative w-full flex flex-col" style={{height: "40rem"}}>
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="Shang-Chi: The legend of the Ten Rings"
                    className="rounded-lg h-full w-full"
                />
                    
                <div className="absolute z-10 h-full w-full" 
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} 
                />

                <div className="absolute flex flex-row z-20 p-10 gap-10">
                    <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt="poster"
                        className="rounded-lg" 
                    />

                    <div className="flex flex-col itmes-center gap-6">
                        
                        <h1 className="text-4xl font-bold text-white">
                            Shang-Chi and the Legend of the Ten Rings
                        </h1>
                        
                        <span className="flex flex-row items-baseline gap-3">

                            <BsHeartFill className="text-2xl text-pink-600" />

                            <h1 className="text-3xl font-bold text-white">
                                91%
                            </h1>

                            <p className="flex flex-row items-center">
                                <h3 className="font-bold text-white">
                                    37.6K rating
                                </h3>

                                <BiChevronRight className="text-white" />
                            </p>

                        </span>

                        <div className="flex flex-row justify-between bg-movie-50 p-3 rounded text-white w-96">
                            
                            <div className="flex flex-col">

                                <h3 className="text-md font-bold">
                                    Add your rating & review
                                </h3>

                                <h4>
                                    Your ratings matter
                                </h4>
                            </div>

                            <div className="bg-white text-black p-3 rounded-md">
                                <p className="font-bold">Rate Now</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-2 font-bold w-1/2">
                            <div className="bg-white rounded p-2">
                                <p >
                                    2D, 3D, IMAX 2D, MX4D, 4DX
                                </p>
                            </div>

                            <div className="bg-white rounded p-2">
                                <p className="font-bold">
                                    English, Kannada, Tamil, Hindi, Telugu, Malayalam
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-row text-white gap-1 items-center">
                            <span className="flex flex-row items-center">
                                <p>2h 12m</p>
                            </span>

                            <span className="flex flex-row items-center">
                                <BsDot className="text-2xl" />
                                <p>UA</p>
                            </span>

                            <span className="flex flex-row items-center">
                                <BsDot className="text-2xl" />
                                <p>Action, Adventure, Fantasy</p>
                            </span>

                            <span className="flex flex-row items-center">
                                <BsDot className="text-2xl" />
                                <p>3 Sept, 2021</p>
                            </span>

                        </div>
                        
                        <div className="container w-full h-full">
                            <div className="bg-red-600 rounded px-1 py-2 w-1/4 flex justify-center hover:bg-red-700">
                                <p className="font-bold text-xl text-white cursor-pointer " onClick={launchRazorPay}>
                                    Book Tickets
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-end">
                        <div className="">
                            <div className="bg-movie-50 bg-opacity-80 rounded-lg px-10 py-4">
                                <BiShareAlt className="text-3xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const MovieDetail = (props) => {
    return (
        <>
        <div className="py-10 px-10 lg:px-52 flex flex-col gap-8">
        <div className="container w-full h-full lg:hidden">
            <div className="bg-red-600 rounded px-1 py-2 w-1/4 flex justify-center">
                <p className="font-bold text-xl text-white cursor-pointer" onClick={launchRazorPay}>
                    Book tickets
                </p>
            </div>
        </div>

            <div className="flex flex-col gap-7 lg:w-3/4">
                <h2 className="text-2xl font-bold">About the movie</h2>
                <p>
                    Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
                </p>
            </div>
            
            {/* <div className="h-1 w-full bg-gray-200 rounded">
            </div> */}

            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Applicable offers</h2>
                <div>
                    <h6 className="text-lg font-bold">Filmy Pass</h6>
                    <div className="bg-yellow-100 border-dashed border-2 border-yellow-400 rounded p-2 lg:w-2/5 md:w-3/4 flex flex-row gap-3">
                        
                        <RiMovie2Line className="text-4xl text-red-500"/>
                        <p className="text-gray-500">
                            Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                        </p>

                    </div>
                </div>
            </div>

            {/* <div className="h-1 w-full bg-gray-200 rounded">
            </div> */}

            <div>
                <CastSlider title="Cast" images={Cast} isDark={false} isCircle={true} />
            </div>

            {/* <div className="h-1 w-full bg-gray-200 rounded">
            </div> */}

            <div>
                <CastSlider title="Crew" images={Crew} isDark={false} isCircle={true} />
            </div>

        </div>
        </>
    )
};

const MovieHero = () => {
    return (
        <>
        <div>
            <div className="md:hidden">
                <MovieHeroMd />
                <MovieDetail />
            </div>
            <div className="hidden lg:hidden md:flex flex-col">
                <MovieHeroMd />
                <MovieDetail />
            </div>
            <div className="hidden lg:flex flex-col">
                <MovieHeroLg />
                <MovieDetail />
            </div>
        </div>
        </>
    );
}

export default MovieHero;