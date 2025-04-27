const showPopup = (popupElement) => {
    if (popupElement) {
        popupElement.classList.remove("animate-animate-fade-out")
        popupElement.classList.add("animate-animate-fade-in")
        popupElement.classList.remove("hidden")
        popupElement.classList.add("flex")
    }
};
const hidePopup = (popupElement) => {
    if (popupElement) {
        popupElement.classList.remove("animate-animate-fade-in")
        popupElement.classList.add("animate-animate-fade-out")
        setTimeout(() => {
            popupElement.classList.remove("flex")
            popupElement.classList.add("hidden")
        }, 200);
        // The value 200 ensures that the popup is hidden only after the fade-out animation (0.2s) has completed.
    }
}


export {
    showPopup,
    hidePopup,
}