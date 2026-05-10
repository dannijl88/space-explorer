import { vi, describe, it, expect, beforeEach, afterEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useApod } from "../hooks/useApod"

vi.mock("../hooks/useApod", () => ({
    useApod: vi.fn()
}))

const mockUseApod = vi.mocked(useApod)

describe("HomePage", () => {
    
})