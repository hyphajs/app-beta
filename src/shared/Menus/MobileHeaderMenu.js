import React                              from 'react'
import {
    useDispatch,
    useSelector
}                                         from 'react-redux'
import {adminMenuStyle}                   from '../../features/admin/styles'
import Div                                from '../Basic/Div'
import LinkSwitch                         from '../Basic/LinkSwitch'
import Span                               from '../Basic/Span'
import HeaderMenuItems                    from './HeaderMenuItems'
import {headerMenuAuthStyleListItemStyle} from './styles'

const MobileHeaderMenu = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    return (
        <Div theme={adminMenuStyle}>
            <Div theme={adminMenuStyle.list}>
                <HeaderMenuItems/>
                {isAuthenticated && (
                    <Span
                        to="/signout"
                        theme={headerMenuAuthStyleListItemStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                )}
                {isAuthenticated && !isAdmin && (
                    <LinkSwitch
                        url="/user/dashboard"
                        theme={headerMenuAuthStyleListItemStyle}>
                        Profile
                    </LinkSwitch>
                )}
            </Div>
        </Div>
    )
}


export default MobileHeaderMenu