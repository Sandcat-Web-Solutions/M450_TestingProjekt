import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";
import Wishlist from "./components/Wishlist";
import TripList from "./components/TripList";
//import useFetch from "./services/useFetch";
//import {getBusinessTrips} from "./services/tripsService";
/*it("ret without crashing", () => {
  shallow(<App />);
});*/

/*it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to biztrips</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});*/

/*test('App renders a heading', () => {
  render(<App />)

  screen.getByRole('heading', {
    name: "Welcome to biztrips 2024 - Juhui",
  })

});*/

/*describe("SearchForm", () => {
  test("renders SearchForm", () => {
    render(<renderTrip/>);
    expect(screen.getByRole("heading", { name: /location search/i })
    ).toBeVisible();

    expect(screen.getByRole("textbox", { name: /choose an origin \(optional\)/i })
    ).toBeVisible();

    expect(screen.getByRole("textbox", { name: /choose a destination/i})
    ).toBeVisible();

    expect(screen.getByRole("button", { name: /search/i })
    ).toBeVisible();
  });
});*/
//
// test('the fetch fails with an error', async () => {
//   await expect(getBusinessTrips()).rejects.toMatch('error');
// });

// test('the data is peanut butter', async () => {
//   await expect(getBusinessTrips()).resolves.toContain('San Francisco World Trade Center on new Server/IOT/Client ');
// });

//
// test('the data is peanut butter', async () => {
//   await expect(useFetch()).resolves.toBe('peanut butter');
// });

//----


describe("App component", () => {
  test("Renders Wishlist and Triplist", () => {
    render(<App/>);
    expect(screen.getByText(/Welcome to biztrips 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Triplist-Catalog/)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist is empty/)).toBeInTheDocument();
  })
});
