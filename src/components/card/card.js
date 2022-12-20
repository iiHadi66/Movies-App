import React, {useEffect, useState} from "react";
import "./card.css"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

const Cards = ({movie, handelRecentlyViewed }) => {
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() =>{
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
     {
        isLoading
        ?
        <div className="card">
            <SkeletonTheme color="#202020" highlightColor= "#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
         <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"whitesmoke"}}> 
        <div className="card" key={movie.id}>
            <img className="card__img" alt="logo" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
            <div className="card__overlay" onClick={() =>handelRecentlyViewed(movie)}>
                <div className="card__title">{movie?movie.original_title:""}</div>
                <div className="card__runtime">
                    {movie?movie.release_data:""}
                    <span className="card__rating">{movie?movie.vote_average:""}<i className="fad fa-star"/></span>
                    </div>
                    <div className="card__description">{movie?movie.overview.slice(0,118)+"...":""}</div>
            </div>
        </div>
        </Link>
     }
    </>
}
export default Cards