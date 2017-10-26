import React from 'react'

const style = {
    fill: 'currentcolor',
}

const getIconPath = (type) => {
    switch (type) {
        case 'calc':
            return 'M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z'
        default: 
            return 'M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z'
    }
}

const Icon = (props) => {
    const { type, size } = props

    const iconStyle = {
        ...style,
        width: size,
        height: size,
    }

    return (
        <svg viewBox='0 0 24 24' style={ iconStyle }>
            <g>
                <path d={ getIconPath(type) } />
            </g>
        </svg>
    )
}

export default Icon
