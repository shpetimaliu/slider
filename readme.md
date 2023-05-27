# Slide Image with JavaScript

This JavaScript code allows you to display and switch images in a slider on your web page. You can download the necessary files and follow the instructions below to integrate this slider into your project.

## Usage

1. Download the `script.js`, `style.css`, and `index.html` files.
2. Place the files in your project structure as follows:

   ```
   /css/style.css
   /js/script.js
   /images/img-1.jpeg
   /images/img-2.jpeg
   /images/img-3.jpeg
   /index.html
   ```

3. Open the `index.html` file in your preferred web browser.
4. View the images by clicking the "Next" and "Previous" buttons or play the slider by clicking the "Play" button.

## File Descriptions

- `script.js`: This file contains the JavaScript code that controls the image switching in the slider.

- `style.css`: This file contains the CSS styling to format the slider and control buttons.

- `index.html`: This file is the HTML page that provides the structure of the slider and includes the links to the CSS and JavaScript files.

## Modifying the Images

If you want to add or change the images in the slider, follow these steps:

1. Place your images in the `images` directory.
2. Open the `script.js` file.
3. Modify the `images` array by adding or removing the desired images. For example:

   ```javascript
   let images = [
     "/images/img-1.jpeg",
     "/images/img-2.jpeg",
     "/images/img-3.jpeg",
     "/images/img-4.jpeg",
   ];
   ```

   Make sure to adjust the index number used in the `nextImage` and `prevImage` functions to accommodate the change in the number of images.

4. Save the `script.js` file after your modifications.

## Modifying the Style

If you want to change the style of the slider, follow these steps:

1. Open the `style.css` file.
2. Modify the CSS code to change the appearance of the slider according to your preference.
3. Save the `style.css` file after your modifications.

## Contributing

If you'd like to contribute to this project, please open an [issue](https://github.com/shpetimaliu/slider/issues) or create a [pull request](https://github.com/shpetimaliu/slider/pulls) with your changes.

## License

This project is licensed under the [MIT License](https://github.com/shpetimaliu/slider/blob/main/LICENSE).
