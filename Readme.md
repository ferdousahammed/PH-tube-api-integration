# ph-tube-api-integration

ph-tube-api-integration is a web application that dynamically populates HTML components with data from an API. It allows users to browse through different categories of videos and view video details including thumbnails, user profiles, titles, and view counts.

## Preview

![Preview](./images/preview.png)

## Features

- Dynamic fetching of category buttons from the API endpoint "https://openapi.programming-hero.com/api/videos/categories".
- Clicking on each category button fetches data from the corresponding category using the API endpoint "https://openapi.programming-hero.com/api/videos/category/${id}".
- Display of video cards containing thumbnail images, user profile pictures, titles, and view counts.
- Loading animation for fetching delay.
- Sorting of video cards by view count upon clicking the "Sort by View" button in the navbar.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ferdousahammed/PH-tube-api-integration.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ph-tube-api-integration
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

- Upon opening the application, category buttons (such as All, Music, Comedy, Drawing) are dynamically fetched from the API and added to the website.
- Clicking on each category button fetches data from the corresponding category and populates the webpage with video cards.
- Each video card contains thumbnail images, user profile pictures, titles, and view counts.
- Clicking the "Sort by View" button in the navbar sorts the video cards by view count.

## Technologies Used

- HTML
- CSS
- JavaScript

## API Endpoints

- Fetch category buttons: `https://openapi.programming-hero.com/api/videos/categories`
- Fetch videos by category: `https://openapi.programming-hero.com/api/videos/category/${id}`

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new Pull Request.

## Acknowledgements

- This project was developed as part of a learning exercise.
- Thanks to Programming Hero for providing the API used in this project.

Feel free to reach out with any questions or feedback!
