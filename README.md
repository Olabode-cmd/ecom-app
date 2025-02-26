# Expo Router Implementation

This project has been updated to use Expo Router v4 with the file-based routing approach. The structure follows the latest Expo Router documentation.

## Project Structure

```
ecommerce-app/
├── app/
│   ├── _layout.js         # Root Stack Navigator
│   ├── index.js           # Login Screen
│   ├── home.js            # Alternative Home Screen (not in tabs)
│   └── (tabs)/            # Tab Navigator Group
│       ├── _layout.js     # Tab Navigator Configuration
│       ├── index.js       # Home Tab
│       ├── profile.js     # Profile Tab
│       └── settings.js    # Settings Tab
├── app.json               # Expo Configuration
├── babel.config.js        # Babel Configuration with expo-router plugin
└── package.json           # Main entry point set to "expo-router/entry"
```

## Navigation Flow

- The app starts at the Login screen (app/index.js)
- After login, it navigates to the tabs section using `router.push('/(tabs)')`
- The tabs navigation contains Home, Profile, and Settings screens
- Users can navigate back to the login screen with Link components

## Key Features

- File-based routing with Expo Router
- Stack Navigation for the root layout
- Tab Navigation for the main app sections
- Proper routing configurations
- Support for deep linking with custom scheme "ecommerceapp"