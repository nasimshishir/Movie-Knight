'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselContainer from "@/components/CarouselContainer";
import { Movie } from "@/lib/types/types";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=87d5452c214ce446e6b996e06e10fa52")
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <div>
      <div className="border-1 rounded-3xl mx-10 mb-10 flex gap-10">
        <div className="relative rounded-3xl overflow-hidden h-80 w-full">
          <Image src={`https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg`} alt={movies[0]?.original_title ?? "Banner Image"} fill className="object-cover" />
        </div>
        <div className="relative rounded-3xl overflow-hidden h-80 w-full">
          <Image src={`https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg`} alt={movies[0]?.original_title ?? "Banner Image"} fill className="object-cover" />
        </div>
      </div>
      <div className="px-20 py-12 rounded-3xl bg-white/30 mx-10 mb-10 backdrop-blur-md">
        <CarouselContainer data={movies} sectionTitle="Popular Movies" />
      </div>
      <div className="px-20 py-12 rounded-3xl bg-white/30 mx-10 mb-10 backdrop-blur-md">
        <CarouselContainer data={movies} sectionTitle="Trending Movies" />
      </div>
    </div>
  );
}
