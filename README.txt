ReceiptUpload

#Up-to-date dependencies [2018-Dec-06]:
"dependencies": {
    "expo": "^31.0.2",
    "firebase": "^5.5.8",
    "firebaseui": "^3.4.1",
    "native-base": "^2.8.1",
    "react": "16.5.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-31.0.0.tar.gz",
    "react-native-paper": "^2.2.8",
    "react-navigation": "^3.0.5",
    "react-navigation-material-bottom-tabs": "^1.0.0"
  }

#Get it to work
1)npm install
2)npm start (windows cmd)
	expo start (gitbash)
3)open expo app on phone

#Possible build errors
1)Make sure correct npm: 
    npm install npm@latest -g
2)npm install -g expo-cli 
    b)npm install expo-cli
3)When upgrading dependencies (navigation)
    a)delete metro-cache from %TEMP%
    b)expo start --clear
    c)npm start -- --reset-cache
4)Delete 'node_modules'
    b)npm install

-----------------------------------------
#Upload descriptions [under dotted lines]
#Format: 
	[date]: 
		fixes/issues
    [date]: fixes/issues {Trello task}
-----------------------------------------

[2018-Dec-19]
    Added upload picture from photo gallery
    Added snap picture
    Created naming convention for image storage
        ->images/year/month/[year][month][random number 1 - 99999]  
          
[2018-Dec-07]
    Updated Dependencies
    Fixed navigation bug (user is directed to dashboard once signedin)
    
[2018-Dec-05]
    Fixed caching error (view step 3 on error debugging)
    Updated React Navigation to V3
    Updated Expo ^31
    Fixed tabs for Dashboard
    Enabled swipe between tabs
    Using MaterialTopTabNavigator (bottom position)
    
[2018-Dec-03]:
    Deleted DashboardScreen
    Added SettingsTab
    Added UploadTab
    Added ViewTab

[2018-Dec-02]:
    Added app icon
	Fixed keyboard errors
    Added password length error alert
    Added seperate FacebookLogin component
    Added Facebook login to register screen  
