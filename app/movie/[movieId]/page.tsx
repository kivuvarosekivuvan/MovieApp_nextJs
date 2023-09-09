'use client';
import { getMovieDetails } from "@/app/Utilities/utils";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    const path = usePathname();
    console.log({ path });
  
    useEffect(() => {
      (async () => {
        const movieId = parseInt(path);
        const movieDetails = await getMovieDetails(movieId);
        console.log({ movieDetails });
      })();
    }, []);
  
    return (
      <div>
        <p>Details are here</p>
      </div>
    );
  };
  
  export default MovieDetails;