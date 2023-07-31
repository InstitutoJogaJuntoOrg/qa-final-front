import { ReactNode } from "react"
import { LayoutContainer } from "./styles"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    )
}