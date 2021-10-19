import React from "react"

const CastPoster = (props) => {
    return (
        <>
        <div className="container w-full h-full flex flex-col items-start gap-2 px-3">
            <div className="h-2/3 w-full">
                <img src={props.src} alt={props.title} 
                    className={
                        `w-full h-full ${
                            props.isCircle ? "rounded-full": "rounded-xl"
                        }`
                    }/>
            </div>
            <h3
                className={`text-lg font-bold ${
                    props.isDark ? "text-white": "text-gray-700"
                }`}>
                {props.title}
            </h3>
            <p
            className={`text-lg ${
                    props.isDark ? "text-white": "text-gray-700"
                }`}>
                {props.subtitle}
            </p>
        </div>
        </>
    );
}

export default CastPoster;