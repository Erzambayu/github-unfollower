# 🕵🏻 GitHub Unfollower Detector

A powerful tool to detect GitHub users who **don't follow you back** and those **you don't follow back**.  
Easily analyze your followers and following lists with an intuitive interface and advanced features.

🔗 [Live Demo](https://erzambayu.github.io/github-unfollower/)

---
## ✨ Features

### Core Features
- 🔎 Detect users you follow but they don't follow you back
- 🔎 Detect users who follow you but you don't follow back
- 🔓 GitHub token support for accounts with 6,000+ connections — enabling analysis of up to **hundreds of thousands** of users
- 👮 Token is stored **locally** in your browser — never sent anywhere
- 📱 Fully responsive and mobile-friendly interface

### New Features (v2.0)
- 🌓 **Dark/Light Theme Toggle** - Switch between dark and light themes with smooth transitions
- 📊 **Statistics Dashboard** - View detailed stats including:
  - Total followers count
  - Total following count
  - Mutual connections
  - Follower-to-following ratio
- 🔍 **Search & Filter** - Quickly find specific users in your lists with real-time search
- 🔤 **Sort Options** - Sort results alphabetically (A-Z or Z-A)
- 📥 **Export to CSV** - Export your results for external use or record-keeping
- 🕐 **Search History** - Access your last 5 searches with one click
- ✨ **Enhanced UI/UX** - Smooth animations, hover effects, and improved visual feedback

---
## 🚀 How to Use

1. **Enter your GitHub username** in the search field
2. Click "Search User" or press Enter
3. View the results in two categories:
   - People you follow but they don't follow back
   - People who follow you but you don't follow back
4. Use the **search bars** to filter results
5. Use the **sort dropdowns** to organize lists
6. Click the **export button** to download results as CSV
7. Toggle between **dark and light themes** using the button in the header

### For Large Accounts (6,000+ connections)
If you have many followers/following, you'll need a GitHub Personal Access Token:
1. Go to [GitHub Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select the `user` scope
4. Copy the token and paste it in the app
5. The token is stored locally and never transmitted

---
## ⚠️ Note About Performance

If you have a large number of followers or following, the analysis might take **several minutes** to complete.

---
## 📸 Demo

<img src="public/img/demo/demo.JPG" alt="GitHub Unfollower Screenshot">

---

## 🎨 UI/UX Improvements

### Theme Customization
- Seamlessly switch between dark and light modes
- Theme preference is saved locally
- Smooth color transitions across all elements

### Enhanced Interactions
- Hover effects on all interactive elements
- Loading animations for better user feedback
- Smooth page transitions
- Custom scrollbar styling

### Data Management
- Real-time search across results
- Alphabetical sorting options
- One-click export to CSV format
- Recent searches saved for quick access

---

## 🛠️ Technical Details

### Built With
- HTML5
- CSS3 (Tailwind CSS v4.1.3)
- Vanilla JavaScript (ES6+)
- GitHub REST API

### Local Storage Usage
- Theme preference
- GitHub token (never transmitted to external servers)
- Search history (last 5 searches)

---

## 📋 Changelog

### Version 2.0 - UI/UX Overhaul (January 2026)

#### New Features
- ✅ Dark/Light theme toggle with smooth transitions
- ✅ Statistics Dashboard (followers, following, mutual, ratio)
- ✅ Real-time search and alphabetical sorting
- ✅ Export to CSV functionality
- ✅ Search history with quick access
- ✅ Enhanced animations and hover effects
- ✅ Custom scrollbar styling
- ✅ Lazy loading for images

#### Technical Improvements
- ✅ Modularized helper functions
- ✅ Global state management for filtering
- ✅ Optimized render functions
- ✅ Better error handling

#### Bug Fixes
- Fixed pagination issues with filtered results
- Improved error messages
- Better API rate limit handling

### Version 1.0 - Initial Release
- GitHub unfollower detection
- Token support for large accounts
- Basic pagination
- Responsive design
- Toast notifications

---

## 📝 License

MIT License - see LICENSE file for details

---

## 👨‍💻 Contributors

- Original Author: [Nima Kian](https://github.com/nimakian)
- Updated by: [Erzam Bayu](https://github.com/Erzambayu)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
