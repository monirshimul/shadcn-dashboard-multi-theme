'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"
import { LogOut, Palette, Settings, User } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { NavigationMenuDemo } from "./navComp/nav-menu"

const themeWithColor = [{ name: "default", color: "#129990" }, { name: "green", color: "#1F7D53" }, { name: "blue", color: "#4D55CC" }, { name: "rose", color: "#E50046" }]

const Navbar = () => {

    const [curTheme, setCurTheme] = useState<boolean>(false)
    const { setTheme } = useTheme()
    const [selectedTheme, setSelectedTheme] = useState('default')
    const [hasHydrated, setHasHydrated] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("app-theme")
        console.log("saved theme", saved)
        if (saved && themeWithColor.find(val => val.name === saved)) {
            setSelectedTheme(saved)
        }
        setHasHydrated(true)
    }, [])

    useEffect(() => {
        if (!hasHydrated) return
        const html = document.documentElement
        themeWithColor.forEach((t) => {
            if (t.name !== 'default') html.classList.remove(`theme-${t.name}`)
        })

        if (selectedTheme !== 'default') {
            html.classList.add(`theme-${selectedTheme}`)
        }
        localStorage.setItem("app-theme", selectedTheme)
    }, [selectedTheme, hasHydrated])

    useEffect(() => {
        const themeCookie = document.cookie
            .split("; ")
            .find(row => row.startsWith("theme="))
            ?.split("=")[1]

        if (themeCookie === "dark") {
            setCurTheme(true)
            setTheme("dark")
        } else {
            setCurTheme(false)
            setTheme("light")
        }
    }, [])



    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedTheme(e.target.value)
    // }

    const getThemeVal = (val: boolean) => {
        setCurTheme(val)
        setTheme(val ? "dark" : "light")
        document.cookie = `theme=${val ? "dark" : "light"}; path=/; max-age=31536000`
    }
    return (
        <nav className="flex items-center justify-between shadow-md shadow-primary/20 p-2 bg-background">
            <SidebarTrigger className="-ml-1" />
            <NavigationMenuDemo />
            <div className="flex items-center gap-1">

                {/* <Link href={"#"}>Dashboard</Link> */}
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}

                {/* <Toggle size="lg" onPressedChange={(press: boolean) => getThemeVal(press)} aria-label="Toggle italic">
                    {
                        !curTheme ? (<Moon size={44} className="text-primary" strokeWidth={2} />) : (<Sun size={44} className="text-primary " strokeWidth={2} />)
                    }
                </Toggle> */}

                {/* <Select
                    value={selectedTheme}
                    onValueChange={(value) => setSelectedTheme(value)}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Themes</SelectLabel>
                            {themes.map((t) => (
                                <SelectItem key={t} value={t}>
                                    {t === 'default' ? 'Default' : t.charAt(0).toUpperCase() + t.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select> */}

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Toggle size="lg">
                            <Palette className="text-sidebar-primary" />
                        </Toggle>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="flex justify-between items-center">
                            Dark  <Switch checked={curTheme} onCheckedChange={(press: boolean) => getThemeVal(press)} className="bg-primary cursor-pointer" />
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {themeWithColor.map((t) => (
                            <DropdownMenuItem
                                key={t.name}
                                onClick={() => setSelectedTheme(t.name)}
                                className={`font-bold cursor-pointer ${selectedTheme === t.name ? "text-primary" : ""}`}

                            >
                                <div className="w-4 h-4 rounded shadow" style={{ background: t.color }}>

                                </div>
                                {/* <PaintBucket className={`h-[1.2rem] w-[1.2rem] mr-2`} style={{ color: t.color }} /> */}

                                {t.name === "default" ? "Default" : t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* <select value={selectedTheme} onChange={handleChange} className="border p-2 rounded">
                    {themes.map((t) => (
                        <option key={t} value={t}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </option>
                    ))}
                </select> */}

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Toggle size="lg">
                            <Settings className="text-sidebar-primary" />
                        </Toggle>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Profile

                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Logout
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}

export default Navbar