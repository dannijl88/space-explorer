import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useEpic } from "./useEpic";
import { fetchEpic } from "../api/epic";

vi.mock("../api/epic", () => ({
    fetchEpic: vi.fn()
}))

const mockFetchEpic = vi.mocked(fetchEpic)

describe("useEpic", () => {

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("devuelve los datos cuando fetchNasaImages resuelve correctamente", async () => {
        const mockData = [{
            identifier: 1,
            caption: "Hola",
            image: "image",
            date: "15/03/1988",
            coords: {
                centroid_coordinates: {
                    lat: 11,
                    lon: 11
                }
            }
        }]
        mockFetchEpic.mockResolvedValue(mockData)

        const { result } = renderHook(() => useEpic())

        await waitFor(() => {
            expect(result.current.epic).toEqual(mockData)
        })
    })

    it("devuelve un error cuando fetchEpic no resuelve correctamente", async () => {
        const mockError = new Error("Ha habido un error inesperado")
        mockFetchEpic.mockRejectedValue(mockError)
        const { result } = renderHook(() => useEpic())
        await waitFor(() => {
            expect(result.current.error).toEqual(mockError.message)
        })
    })

    it("devuelve true mientras la promesa no se ha resuelto", async () => {
        const mockPromise = new Promise<never>(() => {})
        mockFetchEpic.mockImplementation(() => mockPromise)
        const { result } = renderHook(() => useEpic())
        await waitFor(() => {
            expect(result.current.isLoading).toEqual(true)
        })
    })
    
})