import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    UIManager,
    TouchableOpacity,
    LayoutAnimation,
    Animated,
    Dimensions,
    Image,
    Easing,
    BackAndroid,
    ToastAndroid,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StatusBar,
    WebView,
    ScrollView,
} from 'react-native';
var widthSrc = Dimensions.get('window').width;
var heightSrc = Dimensions.get('window').height;
export default class findPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://xiaowublog.sxl.cn/',
        }
    }

    _scrollView(event) {
        console.log(event.nativeEvent.contentOffset.y + '-----111---');
    }

    render() {
        return (

            <ScrollView
                style={styles.container}
                onScroll={(e) => this._scrollView(e)}>
                <View style={styles.top}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>博客</Text>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    webView: {
        width: widthSrc,
        height: heightSrc,
    },
    container: {
        flex: 1,
    },
    top: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#453d4b',
        width: Dimensions.get('window').width,
        height: 50,
    }
});