import React from 'react';
import {
    View,
    Dimensions,
    Navigator,
    StatusBar,
} from 'react-native';
var widthSrc = Dimensions.get('window').width;
var heightSrc = Dimensions.get('window').height;
import PostScsView from './PostScs.js';
import MainView from './main.js';
import SplashView from './splash.js';
import TrainHisView from './trainHis.js';
import UserInfoView from './UserInfo';
import PostDynamicView from './PostDynamic';
import RegOrLoginView from './regOrLogin';
import RegView from './reg';
import LoginView from './login';
import BlogView from './Blog';
import PicManagerView from './PicManager';
import AddClassComponent from './addClass';
import RunComponent from './run';
import RunSetComponent from './runSet.js'
import AppSetView from './AppSet.js';
import TrainDetailView from './trainDetail.js';
import CommendReadView from './CommendRead.js';
import MapView from './MapView.js';
import BoundView from './BoundScroll';
import RecomTrain from './RecomTrain';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ content: '定时器' });
        }, 3000);
    }

    render() {
        var splashName = 'splash';
        return (
            <View style={{ width: widthSrc, height: heightSrc }}>
                <StatusBar
                    backgroundColor='#453d4b'
                    barStyle="default"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    />
                <Navigator
                    initialRoute={{ name: splashName, index: 0, id: splashName }}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                    />
            </View>
        );
    }

    _renderScene(route, navigator) {
        <StatusBar hidden={route.statusBarHidden} />
        switch (route.id) {
            case 'splash':
                return (
                    <SplashView  {...route.params} navigator={navigator} route={route} />
                )
            case 'main':
                return (
                    <MainView {...route.params} navigator={navigator} route={route} />
                )
            case 'trainHis':
                return (
                    <TrainHisView {...route.params} navigator={navigator} route={route} />
                )
            case 'UserInfo':
                return (
                    <UserInfoView {...route.params} navigator={navigator} route={route} />
                )
            case 'PostDynamic':
                return (
                    <PostDynamicView  {...route.params} navigator={navigator} route={route} />
                )
            case 'PostScs':
                return (
                    <PostScsView {...route.params} navigator={navigator} route={route} />
                )
            case 'regOrLogin':
                return (
                    <RegOrLoginView {...route.params} navigator={navigator} route={route} />
                )
            case 'reg':
                return (
                    <RegView navigator={navigator} route={route} />
                )
            case 'login':
                return (
                    <LoginView {...route.params} navigator={navigator} />
                )
            case 'blog':
                return (<BlogView {...route.params} navigator={navigator} />)
            case 'picManager':
                return (<PicManagerView {...route.params} navigator={navigator} />)
            case 'addClass':
                return (<AddClassComponent {...route.params} navigator={navigator} />)
            case 'runComponent':
                return (<RunComponent {...route.params} navigator={navigator} />)
            case 'runSetComponent':
                return (<RunSetComponent {...route.params} navigator={navigator} />)
            case 'appSet':
                return (<AppSetView {...route.params} navigator={navigator} />);
            case 'trainDetail':
                return (<TrainDetailView {...route.params} navigator={navigator} />);
            case 'commendRead':
                return (<CommendReadView {...route.params} navigator={navigator} />);
            case 'mapview':
                return (<MapView {...route.params} navigator={navigator} />);
            case 'boundView':
                return (<BoundView {...route.params} navigator={navigator} />);
            case 'recomTrain':
                return (
                    <RecomTrain {...route.params} navigator={navigator}/>
                );
            default:
                break
        }
    }

    _configureScene(route, routeStack) {
        switch (route.id) {
            case 'blog':
            case 'reg':
            case 'login':
            case 'PostScs':
                return Navigator.SceneConfigs.FloatFromBottom
            default:
                return Navigator.SceneConfigs.FloatFromRight
        }
    }
}

export default App;