ReceiptUpload

#Up-to-date dependencies [2018-Dec-02]:
"dependencies": {
    "expo": "^31.0.2",
    "firebase": "^5.5.8",
    "firebaseui": "^3.4.1",
    "native-base": "^2.8.1",
    "react": "16.5.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-31.0.0.tar.gz",
    "react-navigation": "^2.18.2"
   }

#Get it to work
1)npm install
2)npm start (gitbash)
	expo start (windows cmd)
3)open expo app on phone

#Possible build errors
1)Make sure correct npm: 
    npm install npm@latest -g
2)npm install -g expo-cli

-----------------------------------------
#Upload descriptions [under dotted lines]
#Format: 
	[date]: 
		fixes/issues
    [date]: fixes/issues {Trello task}
-----------------------------------------

[2018-Dec-02]:
    Added app icon
	Fixed keyboard errors
    Added password length error alert
    Added seperate FacebookLogin component
    Added Facebook login to register screen  
