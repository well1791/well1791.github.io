# My resume site

> **NOTICE:** I'm using redwood, and so far for web is awesome!

## Stack
- [redwood](https://redwoodjs.com/docs/quick-start) base framework
- [stitches core](https://stitches.dev/docs/framework-agnostic) for CSS-IN-JSS
- [radix-ui/colors](https://www.radix-ui.com/docs/colors/getting-started/usage) for colors
- [radix-ui/react-icons](https://icons.modulz.app/) for icons
- [polished](https://polished.js.org/docs/) for awesomeness in CSS
- [date-fns](https://date-fns.org/docs/Getting-Started) for date manipulation/formatting
- [react-responsive](https://github.com/yocontra/react-responsive) for CSS media queries in JS
- [recoil](https://recoiljs.org/docs/introduction/core-concepts/) for state management
- [react-aria](https://react-spectrum.adobe.com/react-aria/why.html) and [react-stately](https://react-spectrum.adobe.com/react-stately/index.html) for a11y
- [react-spring/parallax](https://react-spring.io/components/parallax) for parallax effect

### Setup

To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
