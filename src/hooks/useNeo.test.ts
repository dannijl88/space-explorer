import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchNeo } from "../api/neo";
import { renderHook, waitFor } from "@testing-library/react";
import { useNeo } from "./useNeo";


vi.mock("../api/neo", () => ({
    fetchNeo: vi.fn()
}))

const mockFetchNeo = vi.mocked(fetchNeo)

describe("useNeo", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })
    it("devuelve los datos cuando fetchApod resuelve correctamente", async () => {
        const mockData = {
            near_earth_objects: {
                "2024-01-01": [{
                    id: 1,
                    name: "Asteroid",
                    estimated_diameter: {
                        kilometers: {
                            estimated_diameter_min: "5",
                            estimated_diameter_max: "10"
                        }
                    },
                    is_potentially_hazardous_asteroid: true,
                    close_approach_data: [
                        {
                            relative_velocity: { kilometers_per_hour: "1000" },
                            miss_distance: { kilometers: "500000" }
                        }
                    ]
                }]
            }
        }

        mockFetchNeo.mockResolvedValue(mockData)
        const { result } = renderHook(() => useNeo("15/03/1989", "15/03/1990"))
        await waitFor(() => {
            expect(result.current.neoData).toEqual(mockData)
        })
    })

    it("devuelve un error cuando fetchApod no resuelve correctamente", async () => {
        const mockError = new Error("Ha ocurrido un error")
        mockFetchNeo.mockRejectedValue(mockError)
        const { result } = renderHook(() => useNeo("15/03/1989", "15/03/1990"))
        await waitFor(() => {
            expect(result.current.error).toEqual(mockError.message)
        })
    })

    it("devuelve true mientras la promesa no se ha resuelto", async () => {
        const mockData = new Promise<never>(() => {})
        mockFetchNeo.mockImplementation(() => mockData)
        const { result } = renderHook(() => useNeo("15/03/1989", "15/03/1990"))
        await waitFor(() => {
            expect(result.current.isLoading).toEqual(true)
        })
    })

})