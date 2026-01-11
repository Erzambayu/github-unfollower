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

const showToast = ({ container, message, type, duration = 6000 }) => {
    if (container) {
        container.innerHTML = ""

        let iconToast = '';
        if (type === "warning") {
            iconToast = `
                <svg class="h-6 mr-3 shrink-0 fill-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
            `
        } else if (type === "success") {
            iconToast = `
                <svg class="h-6 mr-3 shrink-0 fill-success" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
            `
        } else if (type === "error") {
            iconToast = `
                <svg class="h-6 mr-3 shrink-0 fill-error" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            `
        } else if (type === "search") {
            iconToast = `
            <svg class="h-6 mr-3 shrink-0 text-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        
        `
        }
        container.insertAdjacentHTML("beforeend", `
            <div id="toast-item" class="p-3 max-w-sm flex items-center rounded-lg bg-background-box text-text-primary border border-border-box animate-animate-slide-in">
                ${iconToast}
                <span class="text-sm leading-relaxed">${message}</span>
            </div>
        `)

        const toastItemElem = document.getElementById("toast-item")
        setTimeout(() => {
            toastItemElem.classList.remove("animate-animate-slide-in")
            toastItemElem.classList.add("animate-animate-slide-out")
            setTimeout(() => {
                toastItemElem.remove()
            }, 500);
            // Wait 500ms to allow the "slide-out" animation to finish before removing the toast from DOM
        }, duration);
        // "duration" defines how long the toast should stay visible before starting the hide animation
    }
}

const getFromLocal = (key) => {
    const localStorageItem = localStorage.getItem(key)
    if (localStorageItem) {
        return JSON.parse(localStorageItem)
    } else {
        return null
    }
}
const addToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getUsersNotFollowingMe = ({ following, followers }) => {
    const usersNotFollowingMe = []

    following.forEach((user, username) => {
        if (!followers.has(username)) {
            usersNotFollowingMe.push(user)
        }
    });

    return usersNotFollowingMe
}
const getUsersINotFollowingBack = ({ followers, following }) => {
    const usersINotFollowingBack = []

    followers.forEach((user, username) => {
        if (!following.has(username)) {
            usersINotFollowingBack.push(user)
        }
    });

    return usersINotFollowingBack
}

const changeBtnStatus = ({ btn, status, text }) => {
    btn.disabled = !status;
    btn.textContent = text;
    btn.classList.toggle("cursor-not-allowed", !status);
    btn.classList.toggle("cursor-pointer", status);
}
const changeInputStatus = ({ input, status }) => {
    input.disabled = !status;
    input.classList.toggle("cursor-not-allowed", !status);
    input.classList.toggle("cursor-text", status);
}

const showSkeletonLoaders = ({ container }) => {
    container.innerHTML = ""
    for (let i = 1; i <= 9; i++) {
        container.insertAdjacentHTML("beforeend", `
            <div class="w-full p-2 bg-background-box border border-border-box rounded-md flex items-center animate-pulse">
                <div class="w-9 h-9 rounded-full bg-border-box"></div>
                <div class="w-1/3 h-3 ml-3 bg-border-box rounded-sm"></div>
            </div>
        `);
    }
}

// Theme Management
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    updateThemeIcons(savedTheme);
}

const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
    
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

const updateThemeIcons = (theme) => {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (theme === 'light') {
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
    } else {
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
    }
}

// Search History Management
const addToSearchHistory = (username) => {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    
    // Remove if already exists
    history = history.filter(item => item !== username);
    
    // Add to beginning
    history.unshift(username);
    
    // Keep only last 5
    if (history.length > 5) {
        history = history.slice(0, 5);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(history));
    displaySearchHistory();
}

const displaySearchHistory = () => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const recentSearchesDiv = document.getElementById('recent-searches');
    const container = document.getElementById('recent-searches-container');
    
    if (!container) return;
    
    if (history.length > 0) {
        recentSearchesDiv?.classList.remove('hidden');
        container.innerHTML = history.map(username => `
            <button class="recent-search-item px-3 py-1 text-sm bg-background-box border border-border-box rounded-md text-text-secondary hover:text-text-primary hover:border-btn-primary transition-all duration-200" data-username="${username}">
                ${username}
            </button>
        `).join('');
    } else {
        recentSearchesDiv?.classList.add('hidden');
    }
}

const clearSearchHistory = () => {
    localStorage.removeItem('searchHistory');
    displaySearchHistory();
}

// Export Functionality
const exportToCSV = (data, filename) => {
    const csvContent = [
        ['Username', 'Profile URL'],
        ...data.map(user => [user.userName, `https://github.com/${user.userName}`])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    downloadFile(blob, `${filename}.csv`);
}

const exportToJSON = (data, filename) => {
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    downloadFile(blob, `${filename}.json`);
}

const downloadFile = (blob, filename) => {
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Statistics Calculation
const updateStatistics = (followers, following) => {
    const followersCount = followers.size;
    const followingCount = following.size;
    
    // Calculate mutual follows
    let mutualCount = 0;
    followers.forEach((_, username) => {
        if (following.has(username)) {
            mutualCount++;
        }
    });
    
    const ratio = followingCount > 0 ? (followersCount / followingCount).toFixed(2) : '0';
    
    document.getElementById('stat-followers').textContent = followersCount.toLocaleString();
    document.getElementById('stat-following').textContent = followingCount.toLocaleString();
    document.getElementById('stat-mutual').textContent = mutualCount.toLocaleString();
    document.getElementById('stat-ratio').textContent = ratio;
    
    document.getElementById('stats-dashboard')?.classList.remove('hidden');
}

export {
    showPopup,
    hidePopup,
    showToast,
    getFromLocal,
    addToLocal,
    getUsersNotFollowingMe,
    getUsersINotFollowingBack,
    changeBtnStatus,
    changeInputStatus,
    showSkeletonLoaders,
    initTheme,
    toggleTheme,
    addToSearchHistory,
    displaySearchHistory,
    clearSearchHistory,
    exportToCSV,
    exportToJSON,
    updateStatistics,
}