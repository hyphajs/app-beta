import {globals}           from '../../config/styles'
import {deleteButtonStyle} from '../../shared/Controls/styles'
import {menuPanelStyle}    from '../../shared/Menus/styles'
import {
    auto,
    center,
    column,
    fixed,
    flex,
    flexEnd,
    flexStart,
    inlineFlex,
    none,
    pointer,
    relative,
    row,
    sv
}                          from '../../utils/themer'
import {postsWrapperStyle} from '../post/styles'

export const adminWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const adminPostsInnerWrapperStyle = {
    ...postsWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
}
export const adminPostCardWrapperStyle = {}
export const adminPostCardStyle = {
    width: '100%',
    mobile: {
        display: flex
    },
    imageWrapper: {
        display: flex,
        justifyContent: center,
        maxHeight: 'none',
        width: auto
    },
    image: {
        //maxWidth: [90, .7, '100%']
    },
    name: {
        paddingTop: 0,
        size: [20, .7, 20],
        lineHeight: [22, .7, 22]
    }
}
export const adminDashboardStyle = {
    heading: {
        margin: 0,
        fontFamily: globals.fonts.fancy,
    }
}
export const adminCardControlsButtonWrapperStyle = {
    display: flex,
    flexDirection: row,
    justifyContent: flexEnd
}
export const adminShopCardWrapperStyle = {
    ...adminPostCardWrapperStyle
}
export const adminShopCardStyle = {
    ...adminPostCardStyle
}
export const adminHeadingStyle = {
    size: [26, .7, 26],
    paddingBottom: [25, .7, 25],
    marginBottom: [25, .7, 25],
    borderBottom: `${sv(5)} solid #000`,
    font: globals.fonts.fancy
}
export const adminCardControlsButtonStyle = {
    ...deleteButtonStyle,
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
}
export const adminCreateButtonStyle = {
    ...adminCardControlsButtonStyle,
    display: inlineFlex,
    alignSelf: flexStart,
    marginBottom: [20, .7, 20],
    marginLeft: 0,
    marginTop: 0
}
export const adminControlPanelStyle = {
    position: relative,
    display: flex,
    flexDirection: column,

}
export const adminControlPanelInnerStyle = {
    position: fixed,
    background: '#f8f8f8',
    display: flex,
    flexDirection: column,
    border: '1px solid #dadce0',
    boxShadow: 'inset 0px 0px 4px #d9d9d9',
    height: [500, .7, 'auto'],
    width: [308, globals.style.layoutScalingValue, '100%'],
    padding: sv(20, globals.style.layoutScalingValue),
    mobile: {
        position: relative
    }
}
export const adminMenuStyle = {
    ...menuPanelStyle,
    list: {
        display: flex,
        flexDirection: column,
        margin: 0,
        padding: 0,
    },
    listItem: {
        position: relative,
        listStyleType: none,
        marginBottom: [10, .7, 10],
        //  width: '100%',
    },
    link: {
        textDecoration: none,
        color: globals.colors.linkColor,
        transition: 'background 500ms ease',
        hover: {
            background: globals.colors.orange,
            cursor: pointer
        }
    },
    subListWrapper: {
        borderTop: `2px solid ${globals.colors.salmon}`,
        width: '100%',
    },
    subList: {
        padding: 0,
        width: '100%',
        child: [
            {
                selector: '> li',
                margin: 0

            }
        ]
    }
}
export const adminOrderWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const adminFormWrapperStyle = {
    width: [1100, globals.style.layoutScalingValue, '100%']
}