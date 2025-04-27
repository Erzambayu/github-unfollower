import {
    showPopup,
    hidePopup,
} from "../helpers/helper.js";


const popupTokenElem = document.getElementById("popup-token")
const openPopupTokenBtn = document.getElementById("open-popup-token")
const hidePopupTokenBtn = document.getElementById("hide-popup-token")
const popupTokenOverlay = document.getElementById("popup-token-overlay")



// Controls the showing and hiding of the popup
openPopupTokenBtn.addEventListener("click", () => showPopup(popupTokenElem))
hidePopupTokenBtn.addEventListener("click", () => hidePopup(popupTokenElem))
popupTokenOverlay.addEventListener("click", () => hidePopup(popupTokenElem))