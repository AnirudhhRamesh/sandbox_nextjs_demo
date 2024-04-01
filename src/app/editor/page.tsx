'use client'

import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"

export default function Page(){
    const title = "Robert x Arnie"

    type Scribe = {title: string, description: string, transcript: string, blog: string}
    const [scribe, setScribe] = useState<Scribe>({title: "", description: "", transcript: "", blog: ""})
    
    useEffect(() => {
        //TODO: Replace with a database fetch
        const data:Scribe = {
            title: "Robert x Arnie",
            description: "A podcast where Robert and Arnie talk about the latest news and trends in the tech industry.",
            transcript: "This is a transcript of the podcast. You can edit it and see the changes in real time.",
            blog: "Here you'll have multiple generated code elements."
        }
        setScribe(data)
    }, [])

    return (
        <div className="flex flex-col container p-8">
            <div className="flex flex-col">
                <h1 className="text-foreground text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                <Separator className="my-4" />
            </div>
            <div>
                <div className="flex gap-4 w-full">
                    <div className="w-1/2">
                        <h2 className="text-foreground text-2xl lg:text-3xl font-bold mb-4">Transcript</h2>
                        <p>{scribe.transcript}</p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-foreground text-2xl lg:text-3xl font-bold mb-4">Editing area</h2>
                        <p>{scribe.blog}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

