import {
    showPopup,
    hidePopup,
    addToLocal,
    getFromLocal,
    showToast,
    changeBtnStatus,
} from "../helpers/helper.js";
import { getRateLimit } from "../services/service.js";


window.addEventListener("load", () => {
    const loaderElem = document.getElementById("loader")
    setTimeout(() => {
        loaderElem.classList.remove("flex")
        loaderElem.classList.add("hidden")
    }, 500);
    // Wait 0.5 seconds before hiding the loader to ensure it's visible for at least half a second


    const popupTokenElem = document.getElementById("popup-token")
    const popupTokenOpenBtn = document.getElementById("popup-token-open")
    const popupTokenHideBtn = document.getElementById("popup-token-hide")
    const popupTokenOverlay = document.getElementById("popup-token-overlay")
    const popupTokenSubBtn = document.getElementById("popup-token-sub")
    const popupTokenInput = document.getElementById("popup-token-input")
    const toastContainer = document.getElementById("toast-container")



    // Controls the showing and hiding of the popup
    popupTokenOpenBtn.addEventListener("click", () => {
        popupTokenInput.value = getFromLocal("token")
        showPopup(popupTokenElem)
    })
    popupTokenHideBtn.addEventListener("click", () => hidePopup(popupTokenElem))
    popupTokenOverlay.addEventListener("click", () => hidePopup(popupTokenElem))

    // Store the token in local storage
    popupTokenSubBtn.addEventListener("click", async () => {
        const tokenValue = popupTokenInput.value.trim()
        if (tokenValue) {
            const originalText = popupTokenSubBtn.textContent;
            changeBtnStatus({
                btn: popupTokenSubBtn,
                status: false,
                text: "Checking token...",
            });

            const getRateLimitRes = await getRateLimit(tokenValue)

            if (getRateLimitRes.resources) {
                showToast({ container: toastContainer, message: "Token has been successfully saved!", type: "success", duration: 4000 })
                addToLocal("token", tokenValue)
                hidePopup(popupTokenElem)
            } else if (getRateLimitRes.status === "401") {
                showToast({ container: toastContainer, message: "Invalid token. Please try again.", type: "error", duration: 4000 })
            } else {
                showToast({ container: toastContainer, message: "An unexpected error occurred. Please try again.", type: "error", duration: 4000 })
            }
            
            changeBtnStatus({
                btn: popupTokenSubBtn,
                status: true,
                text: originalText,
            });
        } else {
            showToast({ container: toastContainer, message: "Please enter your token.", type: "error", duration: 4000 })
        }
    })

    // Trigger submit on Enter key press in token input
    popupTokenInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            popupTokenSubBtn.click()
        }
    });


})