import { cn } from "@/lib/utils"
import { Label } from '../label'

interface DrawerProps {
    children: React.ReactNode
    id: string
    navbar?: () => React.ReactNode
    onLinkClick?: () => void
}

export default function Drawer(props: DrawerProps) {
    return (
        <div className={cn(
            "drawer sm:drawer-open",
        )}>
            <input id={props.id} type="checkbox" className="drawer-toggle" aria-label="Drawer Toggle" />

            <aside className="drawer-side">
                {/* Seperator */}
                <span className="absolute right-0 sm:block w-[1px] h-screen bg-gradient-to-b from-neutral-200 dark:from-neutral-800" />

                <Label htmlFor={props.id} className="drawer-overlay"></Label>
                {props.navbar && props.navbar()}
            </aside>

            <div className="drawer-content">


                {props.children}
            </div>
        </div>
    )
}