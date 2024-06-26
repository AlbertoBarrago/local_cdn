# Local CDN Example

This project demonstrates how to set up a local CDN to serve CSS, SCSS, and font files using Node.js and Express. The setup includes a local server that compiles SCSS to CSS and serves static files.

## Directory Structure
```
cdn_style_example/
├── css/
│ └── style.css
├── scss/
│ └── style.scss
├── fonts/
│ └── custom-font.woff2
└── server.js
```

## Prerequisites

- Node.js (download from [nodejs.org](https://nodejs.org/))
- npm (Node Package Manager, comes with Node.js)

## Setup Instructions

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/albertobarrago/cdn_style_example.git
    cd cdn_style_example
    ```
2.  ``` bash
    npm install express node-sass-middleware
    ```
3.  ``` bash
    node server.js
    ```

The server will start and listen on port 3000. You can access the local CDN at http://localhost:3000.


## Example

``` <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://localhost:3000/css/style.css">
        <title>Local CDN Example</title>
    </head>
    <body>
        <h1 class="yellow">Hello, World!</h1>
        <p>This text should be in the custom font.</p>
    </body>
</html>
```


