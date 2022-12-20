import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../../components/card/card"
import PopularList from "../../components/popularList/popularList";


const Home = () => {
    const [ movies, setMovies ] = useState([]);
    const [ recentlyViewed, setRecentlyViewed ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a67df05ef4e3dd535d2b32898c2185dc&page=1")
        .then((res) => res.json())
        .then((data) =>{
            setMovies(data.results);
        });
    }, []);

    useEffect(() => {
        const movieRecentlyViewed = JSON.parse(
            localStorage.getItem('react-movie-app-favourits')
        );
        setRecentlyViewed(movieRecentlyViewed);
    }, []);

    const saveToLocalStorge = (items) => {
        localStorage.setItem('react-movie-app-favourits', JSON.stringify(items))
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(searchTerm){
            
        fetch("https://api.themoviedb.org/3/search/movie?api_key=a67df05ef4e3dd535d2b32898c2185dc&query="+searchTerm)
        .then((res) => res.json())
        .then((data) =>{
            setMovies(data.results);
        });
        setSearchTerm("");
        }
    };
    const handleOnChange = (e) =>{
        setSearchTerm(e.target.value);
    };

    const addRecentlyViewed = (movie) => {
        const newMovieList = [...recentlyViewed, movie];
        setRecentlyViewed(newMovieList);
        saveToLocalStorge(newMovieList); 
    };

    const RemoveRecentlyViewed = (movie) => {
        const newMovieList = recentlyViewed.filter(
            (recentlyViewed) => recentlyViewed.imdbID !== movie.imdbID
        );
        setRecentlyViewed(newMovieList);
    }
    
    return (
        <>
        <div className="searchBox">
            <form onSubmit={handleOnSubmit}> 
                <input type="text" placeholder="Type to search" className="search" value={searchTerm} onChange={handleOnChange}/>
            </form>
            
         </div> 
        <PopularList/>
        <h1>EC Movies App</h1>
        <div className="movies-container">
        {movies.map(movie => (
        <Cards movie={movie}
        handelRecentlyViewed ={(movie)=> addRecentlyViewed(movie)}
         />
         ))}
        </div>
        <div>
         <h2>Recently Viewed</h2>
         <div className="button-container">
            <button className="button" onClick={RemoveRecentlyViewed}>Remove All</button>
         </div>
        </div>
        
        <div className="movies-container bottom" >
            {recentlyViewed.map(recentlyViewed => (
              <Cards movie={recentlyViewed}/>
                ))}
            </div>
        </>
    );
}

export default Home