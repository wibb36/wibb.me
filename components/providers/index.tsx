import { ThemeProvider } from 'next-themes'

export function Providers({ children, ...rest }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" {...rest}>{children}</ThemeProvider>
}