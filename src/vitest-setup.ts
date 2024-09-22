import '@testing-library/jest-dom'
import { server } from './mocks/server'
import { vi } from 'vitest';

beforeAll(() => {
    server.listen()
    server.listHandlers();
})

afterEach(() => { 
    server.resetHandlers();
    vi.clearAllMocks()
})

afterAll(() => server.close())
