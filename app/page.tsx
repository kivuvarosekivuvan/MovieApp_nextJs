'use client';
import { useEffect, useState } from "react";
import {NEXT_PUBLIC_IMAGE_BASE_URL } from "./config";
import { getMovies } from "./Utilities/utils";
import { it } from "node:test";
interface Movie {
  id: number;
  poster_path: string;
  title: string;
  genre_id: number[];
  overview: string;
}
type MovieData = {
  results: Movie[];
};
export default function Home() {
  const [movies, setMovies] = useState<MovieData | null>(null);
  // const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    (async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
        console.log({ movies: moviesData });
      }
      catch (error) {
        console.error('Error fetching movies:', error);
      }
    })();
  }, []);
  return (
  <main>
  <div className="grid grid-cols-5 gap-4 bg-white">
    {movies &&
      movies.results.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden bg-white p-4 rounded shadow transition-transform hover:transform hover:translate-y-0 hover:-translate-x-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <div className="relative group">
            <img
              src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
              className="w-full h-auto mb-2 transition-opacity group-hover:opacity-75"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-base">{item.overview}</p>
            </div>
          </div>
        </div>
      ))}
  </div>
</main>
  );
}