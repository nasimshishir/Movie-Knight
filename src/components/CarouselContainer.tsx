import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MovieCard from "./MovieCard"
import { Media } from "@/lib/types/types"

interface CarouselContainerProps {
    data: Media[],
    sectionTitle: string
}

function CarouselContainer({ data, sectionTitle }: CarouselContainerProps) {
    return (
        <div className="m">
            <p className="mb-8 text-white font-semibold text-2xl uppercase">{sectionTitle}</p>
            <Carousel opts={{
                align: "start",
            }}
                className="w-full max-w-screen-2xl">
                <CarouselContent className="-ml-4">
                    {data.map((item: Media, idx) => {
                        return (
                            <CarouselItem key={idx} className="basis-1/16">
                                <MovieCard data={item} />
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselContainer