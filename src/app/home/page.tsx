import { ImportPodcast } from "@/components/ImportPodcast"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Home = () => {
  return <div className="flex flex-col items-center h-screen container mx-auto p-8">
    <div className="flex items-center justify-between w-full">
        <div>
            <h1 className="text-foreground text-4xl lg:text-5xl font-bold mb-4">Scribes</h1>
            <p className="text-foreground text-xl lg:text-2xl mb-8">Your converted scribes. Import, edit and share from here.</p>
        </div>
        <ImportPodcast/>
    </div>
    <Separator className="my-8" />
    <div className="flex flex-col items-center justify-center h-screen container w-full">
            <h2 className="text-foreground text-3xl lg:text-4xl font-bold mb-4">No scribes yet</h2>
            <p className="text-foreground text-xl lg:text-2xl mb-8">Get started by adding in some podcasts to scribe!</p>
            <ImportPodcast/>
    </div>

  </div>
}

export default Home

