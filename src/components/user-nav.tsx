/* eslint-disable @typescript-eslint/ban-ts-comment */
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
 
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { useRouter } from "next/router"
import { userReducer } from "~/reducer/user-state"
import { openUrlInNewTab } from "~/lib/utils"

export function UserNav() {

    const router = useRouter()
    const {email , name , photo , type } = userReducer()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
            src={photo ? photo :"https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-1/312664468_1843304196015241_7999780237474237309_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHrIhGgdVYkjopqSmfADjpEgvGgEWqeKceC8aARap4px60Czdcrg3OwrvaRAv55JlgVoiTPcfW1piF7BzN4E2Xo&_nc_ohc=IbQJiPeNUuoAX9UF2_p&_nc_ht=scontent.falg5-2.fna&oh=00_AfCBSxZnUlSkJGecBRdvWHiqAWf5ce-WeJ5ZempC4lz0QQ&oe=64AC3CCD" }
            
            alt="@abdullah"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 bg-white" align="end"  forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="w-full flex items-center gap-x-2">
          <Avatar className="h-10 w-10 ">
            <AvatarImage
            src={photo ? photo :"https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-1/312664468_1843304196015241_7999780237474237309_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHrIhGgdVYkjopqSmfADjpEgvGgEWqeKceC8aARap4px60Czdcrg3OwrvaRAv55JlgVoiTPcfW1piF7BzN4E2Xo&_nc_ohc=IbQJiPeNUuoAX9UF2_p&_nc_ht=scontent.falg5-2.fna&oh=00_AfCBSxZnUlSkJGecBRdvWHiqAWf5ce-WeJ5ZempC4lz0QQ&oe=64AC3CCD" }
            
            alt="@abdullah"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col p-4 space-y-1">
            <p className="text-lg font-medium leading-none">{name}</p>
            <p className="text-md leading-none text-muted-foreground">
           {email}
            </p>
          </div>
          </div>
        
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem 
          
          onClick={() => router.push("/profile")}
         
          
          className={` cursor-pointer p-2 mr-4 text-zinc-300 rounded-lg ${
            //@ts-ignore
            router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
            "/profile"
              ? " text-black font-bold"
              : "text-zinc-900"
          }`}
          >
          Profil
          
          </DropdownMenuItem>
         
            <DropdownMenuItem 
            onClick={() => router.push("/applications")}
           
            className={` cursor-pointer  p-2 mr-4 text-zinc-300 rounded-lg ${
              //@ts-ignore
              router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
              "/applications"
              ? " text-black font-bold"
              : "text-zinc-900"
            }`}
            >
            les services
             
            </DropdownMenuItem>

            <DropdownMenuItem 
            onClick={() => router.push("/admin")}
           
            className={` cursor-pointer  p-2 mr-4 text-zinc-300 rounded-lg ${
              //@ts-ignore
              router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
              "/admin"
              ? " text-black font-bold"
              : "text-zinc-900"
            }`}
            >
            les utilisateurs
             
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem 
            onClick={() => router.push("/apiRequest")}
           
            className={` cursor-pointer  p-2 mr-4 text-zinc-300 rounded-lg ${
              //@ts-ignore
              router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
              "/apiRequest"
              ? " text-black font-bold"
              : "text-zinc-900"
            }`}
            >
            Api requests
             
            </DropdownMenuItem>
            <DropdownMenuItem 
            onClick={() => openUrlInNewTab("https://github.com/chrhi/chawiii#api-documentation")}
           
            className={` cursor-pointer  p-2 mr-4 text-zinc-300 rounded-lg `}
            >
            Docs
             
            </DropdownMenuItem>
          
        
         
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer  p-2" onClick={() => router.push("/")}>
        Se déconnecter
        
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}