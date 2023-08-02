
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



# UZH Deep Dive into Blockchain: Self Sovereign Identity App

This is the script responsible for the process of minting a Self Sovereign Identity by the government on the Hedera Hashgraph and assigning it to a created account.

## Available Scripts

These are the available scripts to run the SSID app:

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Tech Stack

**SDKs:** Hedera

**Client:** React Native, Expo


## Features

Our app incorporates two main features. 

The primary feature is querying the Hedera Hashgraph smart contract and fetch the Identity and show it to the user themselves. 

The other feature is the ability to only show limited data and not reveal the whole identity as proof (e.g: proof of adulthood)

## Acknowledgements

 - [Hedera SDK Documentation](https://docs.hedera.com/hedera/sdks-and-apis/sdks)
 - [Expo Documentation](https://docs.expo.dev/)
## Support

For support, email anthonychemalygr@gmail.com.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://anthonychemaly.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anthonycchemaly)


## Authors

- [@anthonychemaly](https://www.github.com/anthonychemaly)

