/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { useRouter } from "next/router"

export function UserNav() {

    const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-1/312664468_1843304196015241_7999780237474237309_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHrIhGgdVYkjopqSmfADjpEgvGgEWqeKceC8aARap4px60Czdcrg3OwrvaRAv55JlgVoiTPcfW1piF7BzN4E2Xo&_nc_ohc=IbQJiPeNUuoAX9UF2_p&_nc_ht=scontent.falg5-2.fna&oh=00_AfCBSxZnUlSkJGecBRdvWHiqAWf5ce-WeJ5ZempC4lz0QQ&oe=64AC3CCD" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end"  forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">abdullah jsk</p>
            <p className="text-xs leading-none text-muted-foreground">
              mahdi.chahri55@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
          Profil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
          les services
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" >
          les employés
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem >
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/")}>
        Se déconnecter
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}