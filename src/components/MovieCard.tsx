'use client'
import { Media, Movie, TvShow } from "@/lib/types/types";
import Image from "next/image";
import React, { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


interface MovieCardProps {
    data: Media;
}

function MovieCard({ data }: MovieCardProps) {

    const title = 'title' in data ? data.title : data.name;

    return (
        <div className="flex flex-col gap-2">
            <div className="relative w-40 h-60 rounded-3xl overflow-hidden">
                <Image src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={title} fill className="object-cover" />
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <h2 className="text-white text-center text-md">{title.length > 20 ? title.slice(0, 17) + '...' : title}</h2>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{title}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default MovieCard;