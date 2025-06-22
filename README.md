# 🌄 chakra-ui-slideshow

A simple, customizable slideshow component built with **React**, **Chakra UI**, and **Motion**. Designed to be used in modern React projects, this package allows you to display a responsive image carousel with swipe, auto-play, selectors, and more.

---

## ✨ Features

- Responsive image slideshow
- Auto-play with configurable slide duration
- Swipe support (touch and mouse)
- Navigation arrows (optional)
- Image selectors (dots)
- Text overlay per image
- Chakra UI + Motion integration
- Built for component reusability

---

## 📦 Installation

```bash
npm install git+https://github.com/Goaty-yagi/chakra-ui-image-slideshow

```

📦 Peer Dependencies

The chakra-ui-slideshow package relies on the following peer dependencies, which must be installed in your project for proper functionality. These are not bundled with the package to avoid version conflicts.

Install them manually if not already included in your app:

```bash
npm install react react-dom @chakra-ui/react @emotion/react @emotion/styled framer-motion motion popmotion

```

Here’s a list of required peer versions:

```json
"peerDependencies": {
    "@chakra-ui/react": "^3.21.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "motion": "^12.18.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
```

## 🛠 Usage

```tsx
import { ChakraProvider } from "@chakra-ui/react";
import Slideshow from "chakra-ui-slideshow";

const images = [
  { url: "/images/slide1.jpg", text: "Welcome to the slideshow!" },
  { url: "/images/slide2.jpg", text: "Second slide description" },
  { url: "/images/slide3.jpg", text: "Another awesome image" },
];

export default function App() {
  return (
    <ChakraProvider>
      <Slideshow
        images={images}
        slideDuration={4000}
        arrowConfig={{ disable: false }}
        selectorConfig={{ disable: false }}
        textConfig={{ disable: false }}
        imageConfig={{ grab: true }}
      />
    </ChakraProvider>
  );
}
```

## 📘 Props

| Prop            | Type                                                              | Default   | Description                             |
|-----------------|-------------------------------------------------------------------|-----------|-----------------------------------------|
| `images`        | `{ url: string, text?: string }[]`                                | required  | List of images with optional text       |
| `slideDuration` | `number`                                                          | `5000`    | Slide change interval (in milliseconds) |
| `arrowConfig`   | `{ disable?: boolean, style?: React.CSSProperties }`              | `undefined` | Disable or style arrows               |
| `selectorConfig`| `{ disable?: boolean }`                                           | `undefined` | Show/hide bottom selector dots       |
| `textConfig`    | `{ disable?: boolean }`                                           | `undefined` | Show/hide image text overlay         |
| `imageConfig`   | `{ grab?: boolean }`                                              | `undefined` | Enable/disable drag gesture          |

🧩 Storybook

This package supports Storybook for local component previews.

```bash
npm run storybook
```

## 📝 License
ISC © Nobuhiro Funahashi