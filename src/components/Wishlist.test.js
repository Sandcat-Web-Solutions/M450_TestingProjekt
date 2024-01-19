import React, { useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wishlist from "./Wishlist";

const wishlistMock = [
    {
        id: 1,
        title: "BT01",
        description: "San Francisco World Trade Center on new Server/IOT/Client002",
        startTrip: "2021-02-13T00:00:00",
        endTrip: "2021-02-15T16:56:00",
        meetings: [
            {
                id: 1,
                title: "One Conference",
                description: "Key Note on One Conference",
            },
            {
                id: 2,
                title: "Zero Conference",
                description: "Workshop Zero on One Conference",
            },
        ],
    },
    {
        id: 2,
        title: "BT02",
        description: "Santa Clara Halley on new Server/IOT/Client",
        startTrip: "2021-02-23T09:00:00",
        endTrip: "2021-02-27T16:56:00",
        meetings: [
            {
                id: 3,
                title: "One Conference",
                description: "HandsOn on One Conference",
            },
            {
                id: 4,
                title: "One Conference",
                description: "Key Note on One Conference",
            },
        ],
    },
    {
        id: 3,
        title: "BT03",
        description: "San Cose City Halley on Docker/IOT/Client",
        startTrip: "2021-12-13T09:00:00",
        endTrip: "2021-12-15T16:56:00",
        meetings: [
            {
                id: 5,
                title: "One Conference",
                description: "Key Note on One Conference",
            },
        ],
    },
];


describe("Wishlist Component", () => {

    const mockRemoveFromWishlist = jest.fn();
    const clearWishlistMock = jest.fn();

    test("renders Wishlist component properly", () => {
        renderWishlist();
        expect(screen.getByText(/Wishlist/)).toBeInTheDocument();
    });

    test("Removing wish works correctly", async () => {
        renderWishlist();

        const removeButtons = screen.getAllByText(/delete Item/);
        userEvent.click(removeButtons[0]);

        await waitFor(() => {
            expect(mockRemoveFromWishlist).toHaveBeenCalledWith(wishlistMock[0]);
            expect(mockRemoveFromWishlist).toHaveBeenCalledTimes(1);
        });
    });

    test("Clearing the wishlist works correctly", async () => {
        renderWishlist();

        const clearButton = screen.getByText(/empty wishlist/);
        userEvent.click(clearButton);

        await waitFor(() => {
            expect(clearWishlistMock).toHaveBeenCalledTimes(1);
        });
    });


    function renderWishlist() {
        render(<Wishlist wishlist={wishlistMock} removeFromWishlist={mockRemoveFromWishlist} clearWishlist={clearWishlistMock}/>);
    }
});

