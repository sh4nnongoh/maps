// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom/extend-expect";
import { ReactNode } from "react";
const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode[] }) => children
}));
