import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TripList from './TripList';
import userEvent from '@testing-library/user-event';

jest.mock('./api', () => ({
  testTrips: [
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
      startTrip: "2021-06-23T09:00:00",
      endTrip: "2021-06-27T16:56:00",
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
  ],
}));


describe("TripList Component", () => {
  const mockAddToWishlist = jest.fn();

  test("renders TripList component", () => {
    renderTriplist();
    expect(screen.getByText('Triplist-Catalog')).toBeInTheDocument();
  });
  test("Display Trips - should display all trips without any filters", () => {
    renderTriplist();
    expect(screen.getByText(/BT01/)).toBeInTheDocument();
    expect(screen.getByText(/BT02/)).toBeInTheDocument();
    expect(screen.getByText(/BT03/)).toBeInTheDocument();
  });

  test("renders filtered month correctly", async () => {
    renderTriplist();
    const comboBox = screen.getByRole("combobox");
    expect(comboBox).toBeInTheDocument();
    userEvent.selectOptions(comboBox, comboBox.children[2]);

    await waitFor(() => {
      expect(screen.getByText(/BT01/)).toBeInTheDocument();
      expect(screen.getByText(/Found 1 trip for the month of Feb/))
      expect(screen.queryByText(/BT02/)).toBeNull();
      expect(screen.queryByText(/ BT03/)).toBeNull();
    });
  });

  test('addToWishlist adds a trip to the wishlist', async () => {
    renderTriplist();
  
    const addToWishlistButtons = screen.getAllByText(/Add to Wishlist/);
  
    userEvent.click(addToWishlistButtons[0]);
  
    await waitFor(() => {
      expect(mockAddToWishlist).toHaveBeenCalledWith({
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
      });
    });
  });
  
  function renderTriplist() {
    render(<TripList addToWishlist={mockAddToWishlist} />);
  }
  

});

