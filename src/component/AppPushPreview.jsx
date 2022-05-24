import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import moment from 'moment';
import visselIconSrc from '../img/app_push/vissel_app_icon.png';
import iphoneWallpaper from '../img/app_push/iOS/wallpaper.jpg';
import noIconSrc from '../img/app_push/iOS/no_icon.png';
const bodyWidth  = 363;
const bodyHeight = 745;
const useStyles = makeStyles((theme) => ({
    root : {
        fontFamily : '"SF Pro Display", "SF Pro Text", "ヒラギノ丸ゴ ProN"',
        cursor : 'pointer',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 24,
        overflow : 'auto',
        height : 'calc(100vh - 48px)',
    },
    iPhoneBody : {
        //transform: 'scale(.75)',
        position : 'relative',
        width : bodyWidth,
        height : bodyHeight,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
        backgroundImage : `url(${iphoneWallpaper})`,
        backgroundSize : '100%',
        borderRadius : 40,
        '&::before' : {
            content : '""',
            position : 'absolute',
            width : bodyWidth,
            height : bodyHeight,
            boxSizing : 'border-box',
            border : 'solid 12px #000',
            borderRadius : 40,
            zIndex : 1,
        },
        '&::after' : {
            content : '""',
            position : 'absolute',
            width : bodyWidth,
            height : bodyHeight,
            boxSizing : 'border-box',
            border : 'solid 2px #bdc3c7',
            borderRadius : 40,
            top : 0,
            left : 0,
            zIndex : 2,
        }
    },
}))

export default function Preview(props) {
    const {
        options={},
    } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div 
                className={classes.iPhoneBody}
            >
                {/* Write the code for push notification UI here */}
            </div>
        </div>
    )
}