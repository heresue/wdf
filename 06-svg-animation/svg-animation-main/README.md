# SVG Animation

## Description

-   Animation using svg
-   Because svg is part of html, elements of html can be used.
-   The elements of svg can be styled using css.

## Stack

-   HTML
-   CSS
-   SVG

## Preview

https://oddodd.io/svg-animation/

## How to

-   위에서 굴려내려오는 공

```css
.cls-10-op {
    animation: rotation2 1s linear;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    transform-box: fill-box;
    transform-origin: center;
}

@keyframes rotation2 {
    0% {
        transform: translateY(-200px);
    }
    80% {
        transform: translateY(0);
    }
    95% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}
```
