import { server } from "./mocks/server.js";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
