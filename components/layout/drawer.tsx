import { cn } from "@/lib/utils"

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
            <input id={props.id} type="checkbox" className="drawer-toggle" />

            <aside className="drawer-side">
                {/* Seperator */}
                <span className="absolute right-0 sm:block w-[1px] h-screen bg-gradient-to-b from-neutral-200 dark:from-neutral-800" />

                <label htmlFor={props.id} className="drawer-overlay"></label>
                {props.navbar && props.navbar()}
            </aside>

            <div className="drawer-content">


                {props.children}
            </div>
        </div>
    )
}