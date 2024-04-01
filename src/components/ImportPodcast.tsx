import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ImportPodcast() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Podcast</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Import Podcast</DialogTitle>
          <DialogDescription>
            Import a podcast from Spotify, Apple, YouTube or import from a local file.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              File
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              URL
            </Label>
            <Input
              id="username"
              defaultValue=""
              placeholder="https://www.youtube.com/.."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Convert Podcast</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
