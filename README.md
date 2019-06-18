#Cripto APP

This is an App to retrieve the information from the ROR API developed.

This app will simple retrieve data from the server and show on screen.

To run this application you'll need to have installed on your machine:

1. React Native
2. An Android Simulator, I used Genymotion 
3. The API created on this repo:
[CriptoAPI](https://github.com/pedrocecchetti/criptoapi)

## Instructions

- After you should clone this repo:
```git clone https://github.com/pedrocecchetti/criptoApp.git```
- You should run your emulator
- After that just run:
```react-native run-android```
- After the app builded, run the command:
```adb reverse tcp:3000 tcp:3000```
(This will give access to your emulator to the port 3000 on you machine)
- Run the API on another terminal
- After that just reload the app and it will load the info retrieved from the API.

