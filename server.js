const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();
const port = 3000;

// Correct the paths
const scssPath = path.join(__dirname, 'scss');
const cssPath = path.join(__dirname, 'css');
const fontsPath = path.join(__dirname, 'fonts');

// Debug log for paths
console.log('SCSS source directory:', scssPath);
console.log('CSS destination directory:', cssPath);
console.log('Fonts directory:', fontsPath);

// Configure node-sass-middleware
app.use(
    sassMiddleware({
        src: scssPath,
        dest: cssPath,
        debug: true,
        outputStyle: 'compressed',
        prefix: '/css'
    })
);

// Serve static files from the 'css' directory
app.use('/css', express.static(cssPath));

// Serve static files from the 'fonts' directory
app.use('/fonts', express.static(fontsPath));

// Start the server
app.listen(port, () => {
    console.log(`Local CDN server is running at http://localhost:${port}`);
});
