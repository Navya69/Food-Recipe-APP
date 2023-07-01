Food Recipe App
This is a Food Recipe App built with React that allows users to search for recipes based on their query and displays food items along with calorie information. The app utilizes the Edamam API for fetching recipe data.

Installation
Clone the repository:


git clone <repository-url>
Navigate to the project directory:


cd food-recipe-app
Install the dependencies:


npm install
Create a developer account on Edamam and obtain your YOUR_APP_ID and YOUR_APP_KEY.

Open the App.js file and replace YOUR_APP_ID and YOUR_APP_KEY with your own credentials:


const YOUR_APP_ID = "your-app-id";
const YOUR_APP_KEY = "your-app-key";
Start the application:


npm start
Open your browser and visit http://localhost:3000 to see the Food Recipe App.

Usage
Enter a food item or recipe in the search input field.
Click the "Search" button or press Enter to fetch recipes based on the search query.
The app will display the food items along with calorie information retrieved from the Edamam API.
If there are no results, or if the search field is empty, no products will be displayed.
You can perform multiple searches by entering a new query and clicking "Search" again.
The app utilizes the OneSignal library for push notifications. The initialization is done in the useEffect hook.
Dependencies
The app utilizes the following dependencies:

react: JavaScript library for building user interfaces.
react-dom: Provides DOM-specific methods that can be used at the top level of an app.
react-onesignal: Library for integrating OneSignal push notifications into a React application.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.
