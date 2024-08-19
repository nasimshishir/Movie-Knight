import { Compass, House, Library } from "lucide-react"
import React, { useState } from 'react'
import { usePathname } from "next/navigation"

function Sidebar() {
    return (
        <div className="w-28 shrink-0 mb-5 flex flex-col items-center">
            <div className="text-white flex flex-col items-center gap-2">
                <div className={`p-5 hover:bg-white/10 hover:backdrop-blur-md transition-all ease-in rounded-lg`}>
                    <House size={30} strokeWidth={1} />
                </div>
                <div className={`p-5 hover:bg-white/10 hover:backdrop-blur-md transition-all ease-in rounded-lg`}>
                    <Compass size={30} strokeWidth={1} />
                </div>
                <div className={`p-5 hover:bg-white/10 hover:backdrop-blur-md transition-all ease-in rounded-lg`}>
                    <Library size={30} strokeWidth={1} />                </div>
            </div>
        </div>
    )
}

export default Sidebar