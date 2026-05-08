import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useNasaImages } from "./useNasaImages";
import { fetchNasaImages } from "../api/nasaImage";

vi.mock("../api/nasaImage", () => ({
    fetchNasaImages: vi.fn()
}))

const mockFetchNasaImages = vi.mocked(fetchNasaImages);

describe("useNasaImages", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("devuelve los datos cuando fetchNasaImages resuelve correctamente", async () => {
        const mockData = {
            collection: {
                items: [
                    {
                        data: [{ title: "Test", description: "Desc", date_created: "2024-01-01", nasa_id: "123" }],
                        links: [{ href: "https://example.com/img.jpg", rel: "preview", render: "image" }]
                    }
                ]
            }
        }

        mockFetchNasaImages.mockResolvedValue(mockData)

        const { result } = renderHook(() => useNasaImages("galaxia"))

        await waitFor(() => {
            expect(result.current.nasaData).toEqual(mockData)
        })
    })

    it("devuelve un error cuando fetchNasaImages no resuelve correctamente", async () => {
    
        const mockError = new Error("Error en la petición")

        mockFetchNasaImages.mockRejectedValue(mockError)

        const { result } = renderHook(() => useNasaImages("galaxia"))

        await waitFor(() => {
            expect(result.current.error).toEqual(mockError.message)
        })
    })

    it("devuelve true mientras la promesa no se ha resuelto", async () => {
    
        const mockPromise = new Promise<never>(() => {})
        
        mockFetchNasaImages.mockImplementation(() => mockPromise)

        const { result } = renderHook(() => useNasaImages("galaxia"))

        await waitFor(() => {
            expect(result.current.isLoading).toEqual(true)
        })
    })
})