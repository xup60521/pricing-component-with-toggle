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