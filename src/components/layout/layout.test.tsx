import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { vi } from "vitest";
import Layout from ".";
import { server } from "../../mocks/server";
import TestComponentWrapper from "../../mocks/TestComponentWrapper";

const MockComponent = () => (
  <TestComponentWrapper>
    <Layout />
  </TestComponentWrapper>
);

beforeEach(() => {
  window.scrollTo = vi.fn();
});

describe("layout", () => {
  test("test layout", () => {
    server.use(
      http.get(
        "https://cloud.appwrite.io/v1/account",
        async () => {
          return HttpResponse.json(
            {
              $id: "66b09eaa00239f5c3bb4",
              $createdAt: "2024-08-05T09:43:08.566+00:00",
              $updatedAt: "2024-09-13T14:12:09.159+00:00",
              name: "Moyinoluwa",
              registration: "2024-08-05T09:43:08.564+00:00",
              status: true,
              labels: [],
              passwordUpdate:
                "2024-08-05T09:43:08.564+00:00",
              email: "akintobi41moyinoluwa@gmail.com",
              phone: "",
              emailVerification: false,
              phoneVerification: false,
              mfa: false,
              prefs: {},
              targets: [
                {
                  $id: "66b09eac974524a2b3e1",
                  $createdAt:
                    "2024-08-05T09:43:08.619+00:00",
                  $updatedAt:
                    "2024-08-05T09:43:08.619+00:00",
                  name: "",
                  userId: "66b09eaa00239f5c3bb4",
                  providerId: null,
                  providerType: "email",
                  identifier:
                    "akintobi41moyinoluwa@gmail.com",
                },
              ],
              accessedAt: "2024-09-13T14:12:09.157+00:00",
            },
            { status: 200 }
          );
        }
      )
    );

    render(<MockComponent />);
    expect(
      screen.getByTestId("layout-routes")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("header")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("access")
    ).toBeInTheDocument();
  });
});
