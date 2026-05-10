import {it, expect, vi, describe} from "vitest"
import {fireEvent, render, screen} from "@testing-library/react"
import NavBar from "./Navbar"
import { MemoryRouter } from "react-router-dom"

describe("Navbar", () => {
    it("renderiza el título y el menu correctamente", () => {
        render(
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        )

        expect(screen.getByText("SpaceExplorer")).toBeInTheDocument()
        expect(screen.getByText("Inicio")).toBeInTheDocument()
        expect(screen.getByText("Galeria Nasa")).toBeInTheDocument()
        expect(screen.getByText("Epic")).toBeInTheDocument()
        expect(screen.getByText("Neo")).toBeInTheDocument()
    })

    it("al hacer click en el menú hamburguesa el ul añade la clase --open", () => {
        const handleClick = vi.fn()
        render(
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        )

        fireEvent.click(screen.getByRole("img"))
        const ul = screen.getByRole("list")
        expect(ul).toHaveClass("navbar-header__link-container--open")
        
    })

    it("cada enlace apunte a su ruta correcta", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        )

        expect(screen.getByText("Inicio")).toHaveAttribute("href", "/")
        expect(screen.getByText("Galeria Nasa")).toHaveAttribute("href", "/nasa-gallery")
        expect(screen.getByText("Epic")).toHaveAttribute("href", "/epic")
        expect(screen.getByText("Neo")).toHaveAttribute("href", "/neo")
    })
})
