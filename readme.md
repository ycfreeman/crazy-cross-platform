## Description

prototype of cross platform code with:
- react (react-dom)
- react-native
- rxjs
- redux
- react-redux
- redux-observable

### Web
|         |            |
| :--- |:---|
| entry point | index.js |
| build tool | webpack |
| build config | webpack.config.js |

### ios
|         |            |
| :--- |:---|
| entry point | index.ios.js |
| build tool | react-native-cli / xcode |
| project path | ios/app.xcodeproj |

### android
|         |            |
| :--- |:---|
| entry point | index.android.js |
| build tool | react-native-cli / android studio / gradlew / (buck?) |
| gradle path | android/gradle/ |