# Test concept 

# Test concept

## Composition of the Project and Test Objects

The application is comprised of two major parts. The frontend, (react) and the "backend" (a JSON Server)

**Frontend Test Objects**
The frontend contains both react components and javascript exported modules that will be tested. The jest library will be used for the tests. 
    - Modules: The single Methods of the Javascript modules will be tested with jest
    - Components: The functions and renderning of the Components will be tested. An abstraction for the sake of testing the react hooks will be made.

**Backend Test Objects**
- The JSON data provided by the server will be tested
- Postman test scripts will be used to test the "backend" responses

## Test Cases

### Frontend Test Cases

- Display Trips - Tests that component contains all trips without any filters
    Steps: 
    1. Render the component
    Expected behavior:
    - the component should contain all trips

- Filter Trips - Tests the filtering function by specific months
    Steps: 
    1. Render the component
    2. Select a month from the menu
    Expected behavior:
    - the component should contian trips from the given month
    - the component should contain the amount of trips in the selected month
    - the component should correctly display the filter

- Add trips - Tests that trips can be added to the wishlist
    Steps: 
    1. Render the component 
    2. Add a trip to the wishlist 
    Expected behavior:
    - the component should display the wishlist with the trips


### Backend Test Cases



## Roles and Responsibilities
- Software Tester 1 (Peter): Test backend data, later testing the modules of the Frontend. Check the tests of Tester 2 when complete.
- Software Tester 2 (Luc): Test the React Components of the Frontend. Check the tests of Tester 1 when complete.







