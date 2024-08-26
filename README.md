# Comedy Show Finder

Comedy Show Finder is a simple React application that allows users to search for and view comedy videos from YouTube. This app utilizes the YouTube Data API to fetch video results based on the user's search query.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for comedy videos using a search bar.
- Display a list of video results with titles.
- Embedded video player to watch selected videos.
- Responsive design for desktop and mobile devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- A valid YouTube Data API key.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/comedy-show-finder.git
    cd comedy-show-finder
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project to store your YouTube API key:

    ```
    REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will run on `http://localhost:3000`.

## Usage

1. Open the application in your browser by navigating to `http://localhost:3000`.
2. Enter a search query (e.g., "stand-up comedy") into the search bar.
3. View the list of results and click on a video to watch it.

## Configuration

The application uses the YouTube Data API to fetch video results. You need to provide a valid YouTube API key to access the API.

- Replace the placeholder API key in `App.js` with your own key:

    ```javascript
    const API_KEY = "AIzaSyCIyJAXOc5SKiKKkdh66YP42H18It0qITQ";
    ```

## Project Structure

