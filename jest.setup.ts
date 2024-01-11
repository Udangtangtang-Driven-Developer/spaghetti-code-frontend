import "@testing-library/jest-dom";
import "@testing-library/jest-dom/matchers";
import { server } from "@udtt/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
