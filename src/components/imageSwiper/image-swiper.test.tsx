import { vi } from "vitest";
import ImageSwiper from "./ImageSwiper";
import { render, screen } from "@testing-library/react";
import React from "react";




vi.mock('swiper/modules', () => ({
    Navigation: (props) => null,
    Pagination: (props) => null,
    Scrollbar: (props) => null,
    A11y: (props) => null,
    Autoplay: (props) => null,
}))


describe('test swiper elements', () => {
    const mockImages = [
        {
            fields: { file: { url: "image1.jpg" } },
        },
        {
            fields: { file: { url: "image2.jpg" } },
        },
    ];

    test("renders loading animation when images are empty", () => {
        render(<ImageSwiper images={[]} />);

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    }),
        test("renders swiper with images when images are provided", () => {
            render(<ImageSwiper images={mockImages} />);

            const images = screen.getAllByRole("img");
            expect(images).toHaveLength(mockImages.length);
            expect(images[0]).toHaveAttribute("src", "image1.jpg");
            expect(images[1]).toHaveAttribute("src", "image2.jpg");
        }),

        test("renders all slides in the Swiper", () => {
            const mockImages = [
                { fields: { file: { url: "image1.jpg" } } },
                { fields: { file: { url: "image2.jpg" } } },
            ];
            render(<ImageSwiper images={mockImages} />);

            // Ensure SwiperSlide components are rendered
            const slides = screen.getAllByTestId("swiper-slide");
            expect(slides).toHaveLength(mockImages.length); // Check the number of slides matches the mock images
        }),

        test("renders fallback image when fields are missing", () => {
            const mockImagesWithMissingData = [
                { fields: { file: { url: "image1.jpg" } } }, // valid image
                {}, // image with missing fields
            ];
            render(<ImageSwiper images={mockImagesWithMissingData} />);

            const images = screen.getAllByRole("img");
            expect(images[1]).toHaveAttribute("src", "https://miro.medium.com/v2/resize:fit:640/format:webp/0*mv8MNRLDNNnt5f72.gif");
        });
})