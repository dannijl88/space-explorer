import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, test } from "vitest";
import { useApod } from "./useApod";
import { fetchApod } from "../api/apod";

vi.mock("../api/apod", () => ({
    fetchApod: vi.fn()
}))

const mockFetchApod = vi.mocked(fetchApod);

describe("useApod", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("devuelve los datos cuando fetchApod resuelve correctamente", async () => {
        const mockData = {
            title: "Test Galaxy",
            url: "https://example.com/image.jpg",
            explanation: "Una explicación de prueba",
            date: "2024-01-01",
            media_type: "image"
        }

        mockFetchApod.mockResolvedValue(mockData)

        const { result } = renderHook(() => useApod())

        await waitFor(() => {
            expect(result.current.apod).toEqual(mockData)
        })
    })

    it("devuelve un error cuando fetchApod no resuelve correctamente", async () => {

        const mockError = new Error("Error en la petición")

        mockFetchApod.mockRejectedValue(mockError)

        const { result } = renderHook(() => useApod())

        await waitFor(() => {
            expect(result.current.error).toEqual(mockError.message)
        })
    })

    it("devuelve true mientras la promesa no se ha resuelto", async () => {

        const mockPromise = new Promise<never>(() => {})
        
        mockFetchApod.mockImplementation(() => mockPromise)

        const { result } = renderHook(() => useApod())

        await waitFor(() => {
            expect(result.current.isLoading).toEqual(true)
        })
    })
})

