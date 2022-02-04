# Reward Points App
### Reward Points App with React : 상벌점을 관리할 수 있는 어플
* https://reward-points-app.web.app/#/ -> 해당 사이트에 접속하면 볼 수 있습니다.
* 군대에 있을 때 심심해서 상벌점을 줄 수 있는 어플을 만들어보았습니다.
* 제가 소속되어 있었던 중대에서 실제로 사용해보았습니다! (생각보다 반응이 좋았습니다 ㅎㅎ)
* 상점은 사유에 따라 모두 다르며, 보통 3점에서 30점까지 다양합니다.
* 벌점은 거의 받는 경우가 없지만, 지시 불이행의 경우 받는 것도 보았습니다.
* 기존에 상벌점을 받기 위해선 종이에 일일이 상점과 날짜, 사유, 부여자를 모두 작성하고 상급 지시자에게 서명을 받아야 하지만, 어플을 통해 이와 같은 절차를 손쉽게 관리할 수 있습니다. (인사과에서 일괄 관리)
* 상점 30점에 포상휴가 1일, 벌점 30점에 휴가 -1일이 됩니다.

### 0. Introduce
* React를 이용해 front를 구성하였고, firebase를 이용해 backend를 만들었습니다.
* 회원가입은 직접 javascript 코드로 구현하였고, 회원 데이터베이스는 모두 firebase를 통해 관리됩니다.
* React를 이용하여 웹페이지에 호스트하였고, expo를 통해 Android 및 IOS 앱으로 배포하였습니다.
* 일과 외 시간과 주말을 이용해 틈틈히 만들었으며, 모두 만드는데 2달정도 소요되었습니다. 
* 사지방 컴퓨터는 매번 리부팅되기 때문에 ide와 같은 프로그램을 사용하지 못하여 cloud로 작업하였습니다.

### 1. Initial screen
<img src="https://user-images.githubusercontent.com/48863707/147737684-dbc7ca3c-5a6d-454e-bafc-beb2485ceb61.png" width="30%" height="30%">

### 2. Sign Up Page
* 보안코드가 맞지 않으면 회원가입을 하지 못합니다.
* 보안상의 이유로 보안코드는 공개하지 않습니다.
<img src="https://user-images.githubusercontent.com/48863707/147738658-656feec2-16ab-45d7-bf98-4e17726b45c8.png" width="60%" height="60%">

### 3. 홈화면




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
