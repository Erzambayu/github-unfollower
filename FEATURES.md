# 🎯 Feature Documentation - GitHub Unfollower Detector v2.0

## Table of Contents
1. [Theme System](#theme-system)
2. [Statistics Dashboard](#statistics-dashboard)
3. [Search & Filter](#search--filter)
4. [Export Functionality](#export-functionality)
5. [Search History](#search-history)
6. [UI/UX Enhancements](#uiux-enhancements)

---

## 🌓 Theme System

### Description
Users can toggle between dark and light themes to match their preference or reduce eye strain.

### Features
- **Dark Theme (Default)**: Dark background with high contrast text
- **Light Theme**: Clean white background with comfortable reading colors
- **Smooth Transitions**: 300ms color transitions when switching themes
- **Persistent**: Theme preference saved to localStorage

### How to Use
1. Click the sun/moon icon in the top-right corner of the header
2. Theme switches instantly with smooth color transitions
3. Your preference is automatically saved

### Technical Details
- Theme state stored in `localStorage` with key: `theme`
- CSS variables dynamically updated via `.light-theme` class
- Icons switch visibility based on current theme

---

## 📊 Statistics Dashboard

### Description
A comprehensive overview of your GitHub social connections displayed in an easy-to-read grid.

### Metrics Displayed

#### 1. Followers
- Total number of people following you
- Formatted with thousands separators for readability

#### 2. Following
- Total number of people you follow
- Shows your network reach

#### 3. Mutual Connections
- Users who both follow you AND you follow back
- Highlighted in green to show positive connections
- Calculated in real-time from your data

#### 4. Follower Ratio
- Followers ÷ Following ratio
- Helps understand your account's reach
- Values > 1.0 mean more followers than following
- Values < 1.0 mean more following than followers

### Visual Features
- 4-column responsive grid (2 columns on mobile)
- Hover effects with subtle shadows
- Color-coded for quick understanding
- Smooth fade-in animation when displayed

---

## 🔍 Search & Filter

### Description
Powerful tools to quickly find specific users in your results without scrolling through pages.

### Search Functionality

#### Real-time Search
- Type in the search box to filter results instantly
- Searches through usernames
- Case-insensitive matching
- Updates pagination automatically

#### How It Works
1. Type username or partial username
2. Results filter in real-time
3. Pagination adjusts to filtered results
4. Clear search to see all results again

### Sort Options

#### Available Sort Methods
1. **Default**: Original API order
2. **A to Z**: Alphabetical ascending
3. **Z to A**: Alphabetical descending

#### Features
- Dropdown selector above each list
- Maintains current page when possible
- Persists during search operations
- Instant application of sorting

### Technical Implementation
```javascript
// Search filters the array
const filtered = users.filter(user => 
    user.userName.toLowerCase().includes(searchTerm)
);

// Sort modifies the order
sorted.sort((a, b) => a.userName.localeCompare(b.userName));
```

---

## 📥 Export Functionality

### Description
Download your results as CSV files for external analysis, record-keeping, or sharing.

### Features

#### Export Formats
- **CSV (Comma-Separated Values)**: Universal format compatible with Excel, Google Sheets, etc.
- Headers included: Username, Profile URL
- UTF-8 encoding for international characters

#### What Gets Exported
1. **Not Following Back List**
   - All users you follow who don't follow back
   - Filename format: `{username}_not_following_back.csv`

2. **Not Followed Back List**
   - All users who follow you but you don't follow
   - Filename format: `{username}_not_followed_back.csv`

### How to Use
1. Perform a search for a GitHub user
2. Wait for results to load
3. Click the download icon (↓) next to the section title
4. File downloads automatically to your default download folder

### CSV Format Example
```csv
Username,Profile URL
octocat,https://github.com/octocat
torvalds,https://github.com/torvalds
```

### Use Cases
- **Backup**: Keep historical records of your connections
- **Analysis**: Import into spreadsheet tools for further analysis
- **Comparison**: Track changes over time
- **Sharing**: Share lists with others
- **Data Migration**: Use in other tools or scripts

---

## 🕐 Search History

### Description
Quick access to your recent searches without retyping usernames.

### Features

#### Auto-Save
- Automatically saves usernames after successful searches
- Stores last 5 searches
- Most recent at the top

#### Display
- Shows below search bar when history exists
- Clickable badges for each username
- Hover effect indicates interactivity

#### Clear History
- "Clear History" button removes all saved searches
- Confirmation via toast notification

### How to Use
1. **View History**: Appears automatically if you have previous searches
2. **Quick Search**: Click any username badge to search again
3. **Clear All**: Click "Clear History" link to remove all

### Storage Details
- Stored in localStorage with key: `searchHistory`
- Array format: `["username1", "username2", ...]`
- Automatically removes duplicates
- Maintains order with most recent first

### Privacy
- All data stored locally in your browser
- No data sent to any server
- Clear browser data to remove history

---

## ✨ UI/UX Enhancements

### Visual Improvements

#### 1. Smooth Transitions
- **Duration**: 200-300ms for most transitions
- **Properties**: Colors, borders, shadows, transforms
- **Easing**: Natural ease-in-out curves

#### 2. Hover Effects
- **Cards**: Lift effect (translateY -2px) with shadow
- **Buttons**: Color darkening + shadow enhancement
- **Links**: Color change to primary brand color
- **Border**: Changes to primary color on hover

#### 3. Loading States
- **Skeleton Loaders**: Animated placeholders while loading
- **Button States**: "Please wait" text with disabled state
- **Progress Indication**: Clear visual feedback

#### 4. Animations
- **Slide-in**: Toasts slide from right (500ms)
- **Fade-in**: Modals fade with scale (300ms)
- **Fade-out**: Smooth removal (200ms)
- **Pulse**: Loading skeletons pulse continuously

### Accessibility Improvements

#### 1. Color Contrast
- **Dark Theme**: High contrast white text on dark background
- **Light Theme**: Dark text on light background
- **WCAG Compliant**: Meets AA standards for readability

#### 2. Interactive Elements
- Clear hover states
- Cursor changes (pointer, not-allowed, text)
- Disabled states visually distinct
- Focus indicators on inputs

#### 3. Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md)
- Touch-friendly button sizes (44x44px minimum)
- Readable text sizes (14px minimum)

### Performance Optimizations

#### 1. Lazy Loading
- Profile images load on-demand
- Reduces initial page load
- Better performance with many results

#### 2. Efficient Rendering
- Pagination limits DOM elements
- Only 9 items per page
- Smooth page transitions

#### 3. Event Handling
- Debounced search (real-time but optimized)
- Event delegation where applicable
- Clean event listener management

### User Feedback

#### 1. Toast Notifications
- **Success**: Green with checkmark
- **Error**: Red with X icon
- **Warning**: Yellow with alert icon
- **Info**: Blue with search icon

#### 2. Loading Indicators
- Spinner overlay during initial load
- Skeleton loaders during data fetch
- Button loading states

#### 3. Empty States
- "No users found" message with icon
- Clear indication when lists are empty
- Helpful messaging

---

## 🎯 Best Practices & Tips

### For Users

1. **Start Simple**: Try without a token first
2. **Use Token for Large Accounts**: If you have 6,000+ connections
3. **Export Regularly**: Keep backups of your data
4. **Check Ratio**: Aim for a ratio close to 1.0 for balanced networking
5. **Use Search**: Don't scroll through hundreds of results

### For Developers

1. **State Management**: Global variables track current data
2. **Modular Functions**: Each feature in separate function
3. **Error Handling**: All API calls wrapped in try-catch
4. **User Experience**: Loading states for all async operations
5. **Local Storage**: Used for persistence, not sensitive data

---

## 🔧 Customization

### Changing Colors
Edit `src/styles/input.css`:
```css
--color-btn-primary: #4f46e5; /* Change primary button color */
--color-success: #238C61; /* Change success color */
```

### Adjusting Items Per Page
Edit `app.js`:
```javascript
itemsPerPage: 9, // Change to desired number
```

### Modifying Toast Duration
```javascript
showToast({ ..., duration: 5000 }); // milliseconds
```

---

## 📱 Mobile Experience

### Optimizations
- Responsive grid (2 columns → 1 column on mobile)
- Touch-friendly button sizes
- Optimized spacing for smaller screens
- Readable font sizes

### Gestures
- Tap to interact (no hover required)
- Swipe-friendly pagination buttons
- Pinch-to-zoom on images

---

## 🔒 Privacy & Security

### What We Store Locally
- Theme preference
- Search history (usernames only)
- GitHub token (if provided)

### What We Don't Do
- No data sent to external servers (except GitHub API)
- No tracking or analytics
- No cookies
- No user identification

### Your Data
- All data stored in browser localStorage
- Cleared when you clear browser data
- Never shared or transmitted
- Full control remains with you

---

**Last Updated**: January 11, 2026  
**Version**: 2.0
