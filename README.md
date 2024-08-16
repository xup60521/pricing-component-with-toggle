# **Frontend Mentor Challenge - Pricing component with toggle**

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC "https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

        - [Switch animation](#switch-animation)

- [Resources](#resources)

## Overview

Users should be able to:

- View the optimal layout for the component depending on their device's screen size

- Control the toggle with both their mouse/trackpad and their keyboard

- **Bonus**: Complete the challenge with just HTML and CSS (not implemented)

Links:

- GitHub Repo: <https://github.com/xup60521/pricing-component-with-toggle>

- Website: <https://xup60521.github.io/pricing-component-with-toggle/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for switch button animation

### What I learned

#### switch animation

```ts
import gsap from "gsap";

const switchBtn = document.getElementById("switch") as HTMLButtonElement;

let isAnnually = true;

switchBtn?.addEventListener("click", () => {
    if (isAnnually) {
        switchBtn.disabled = true;
        changeToMonthlyPrice()
        gsap.to("#switch  div", {
            x: "1.5rem",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                isAnnually = false;
                switchBtn.disabled = false;
            },
        });
    } else {
        switchBtn.disabled = true;
        changeToAnnuallyPrice()
        gsap.to("#switch  div", {
            x: "0",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                isAnnually = true;
                switchBtn.disabled = false;
            },
        });
    }
});

function changeToMonthlyPrice() {
    const basicPrice = document.getElementById("basic-price") as HTMLSpanElement
    const professionalPrice = document.getElementById("professional-price") as HTMLSpanElement
    const masterPrice = document.getElementById("master-price") as HTMLSpanElement
    basicPrice.innerHTML = "19.99"
    professionalPrice.innerHTML = "24.99"
    masterPrice.innerHTML = "39.99"
}

function changeToAnnuallyPrice() {
    const basicPrice = document.getElementById("basic-price") as HTMLSpanElement
    const professionalPrice = document.getElementById("professional-price") as HTMLSpanElement
    const masterPrice = document.getElementById("master-price") as HTMLSpanElement
    basicPrice.innerHTML = "199.99"
    professionalPrice.innerHTML = "249.99"
    masterPrice.innerHTML = "399.99"
}
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>