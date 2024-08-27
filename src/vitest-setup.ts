import '@testing-library/jest-dom'
import { server } from './mocks/server'

beforeAll(() => server.listen())
beforeEach(()=>server.resetHandlers())
afterAll(()=>server.close())