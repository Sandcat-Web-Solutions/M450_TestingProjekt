# Test concept 

# Test concept

## Composition of the Project and Test Objects

The application is comprised of two major parts. The frontend, (react) and the "backend" (a JSON Server)

**Frontend Test Objects and Environment**
The frontend contains both react components and javascript exported modules that will be tested. The jest library will be used for the tests. 
    - Modules: The single Methods of the Javascript modules will be tested with jest
    - Components: The functions and renderning of the Components will be tested. An abstraction for the sake of testing the react hooks will be made.

**Backend Test Objects and Environment**
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
    - the component should display the wishlist with the trip added

- Display Trips - Tests that the wishlists does not have any trips at the beginning
    Steps: 
    1. Render the component
    Expected behavior: 
    - the component should display the wishlist without any trips

- Remove Trip - Tests that trips can be removed from the wishlist
    Steps:
    1. Render the component with a trips already added
    2. Remove a trip from the wishlist
    Expected behavior: 
    - the component shoud display the wishlist without the removed trip

- Clear Wishlists - Test that the entire wishlist can be cleared
    Steps: 
    1. Start with trips already added to the wishlist
    2. Call the clearWishlist function
    Expected behavior:
    - the component should display the wishlist without any trips

### Backend Test Cases

- Get Trips - Able to get all trips
    Steps: 
    1. do a get request to /trips
    Expected results:
    - Status code should be 200
    - response should contain an array of trips

- Post Trips - Able to post a trip
    Steps: 
    1. do a post request to /trips with a correct payload
    Expected results:
    - Status code should be 201
    
- Get sigle Trip - Able to get a single trip by id
    Steps: 
    1. do a get request to /trips/{id}
    Expected results:
    - Status code should be 200
    - response should contain the trip

- Put single Trip - Able to update a single trip
    Steps:
    1. do a put request to /trips/{id}
    Expected results:
    - Status code should be 200
    - Trip should be updated

- Delete single Trip - Able to delete a single trip by id
    Steps:
    1. do a delete request to /trips/{id}
    Expected results:
    - Status code should be fitting
    - Trip should be deleted

## Roles and Responsibilities
- Software Tester 1 (Peter): Test backend data, later testing the modules of the Frontend. Check the tests of Tester 2 when complete.
- Software Tester 2 (Luc): Test the React Components of the Frontend. Check the tests of Tester 1 when complete.

## Development procedure
- most of the code is already provided. However there are a few areas that need to be implemented. We will be using the V - Modell to make sure we create tests during development. This way it will not require a big code rewrite if there is a defect, since the defect will be quickly taken into account. 

## Defect handling

### Finding Defects
- finding by failed tests
- finding by navigating the website

### Resolution
- The code related to the eg. failed test case will be fixed. The test will run again after
- continuous attemting to fix the code until the test passes