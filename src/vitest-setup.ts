import '@testing-library/jest-dom'
import { server } from './mocks/server'
import { vi } from 'vitest';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
    server.listen()
    server.listHandlers();
})

afterEach(() => { 
    server.resetHandlers();
    vi.clearAllMocks()
    cleanup();
})

afterAll(() => server.close())
