# Directory App

Directory App is a simple web application that allows users to manage and retrieve information about individuals. It features an intuitive interface with two main tabs: "Add New Person" and "Retrieve Information".

## Features

### Add New Person Tab
- Create a table with columns for Name, Date of Birth, Aadhar Number, Mobile Number, and Age.
- The Age field is automatically calculated based on the Date of Birth.
- Dynamically add rows with empty input fields using a dedicated button.
- Each row includes two buttons: "Save" and "Delete".
- The "Save" button saves the input information in a list of objects in local storage.
- The "Delete" button removes the row from the table. If the row was saved, it's also deleted from local storage.

### Data Validation
- Aadhar Number must be 12 digits.
- Mobile Number must be 10 digits.
- All input fields must be filled before storing data in local storage.

### Retrieve Information Tab
- Users can enter an Aadhar Number in a form.
- The app queries the local storage to find a match.
- If a match is found, the details associated with the Aadhar Number are displayed in a table.
- If no match is found, a message "No match found" is displayed.

## Technologies Used
- React.js: Used for building the user interface and managing components.
- React Router DOM: Used for navigation and managing tabs.
- Local Storage: Used to store and retrieve data locally in the browser.

## Installation and Usage
1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Access the application in your web browser at the provided URL.

Feel free to explore, contribute, and enhance the Directory App according to your needs.

## License
This project is licensed under the [MIT License](LICENSE).
