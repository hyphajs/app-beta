import {AnimatePresence}   from 'framer-motion'
import React               from 'react'
import {Portal}            from 'react-portal'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import Div                 from 'shared/Basic/Div'
import MotionDiv           from 'shared/Basic/MotionDiv'
import {deleteButtonStyle} from 'shared/Controls/styles'
import {defaultModalStyle} from 'shared/Layout/styles'

const DeletePrompt = ({destroyAction, type, index, objectID}) => {
    const {_id, token} = useSelector(state => state.user)
    const {confirmDelete} = useSelector(state => state.admin)
    const {shouldDelete, destroy} = confirmDelete
    const dispatch = useDispatch()

    return (
        <>
            {shouldDelete && (
                <Portal node={document && document.getElementById('modal')}>
                    <AnimatePresence>
                        <MotionDiv theme={defaultModalStyle}>
                            {!destroy && (
                                <Div>
                                    Are you sure you want to delete?
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyItem'})}
                                    >
                                        Do <strong>not</strong> delete this {type}
                                    </Div>
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyItem'})}
                                    >
                                        Yes, delete this {type}
                                    </Div>
                                </Div>
                            )}

                            {destroy && !!objectID && (
                                <>
                                    <Div>Clicking this button will permanently delete this {type}</Div>
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={
                                            () =>
                                                index.deleteObject(objectID).then(() => {
                                                        console.log('done')
                                                        dispatch({
                                                            type: destroyAction,
                                                            payload: {
                                                                _id: _id,
                                                                objectID: objectID,
                                                                token: token,
                                                                slug: confirmDelete.slug
                                                            }
                                                        })
                                                    }
                                                )
                                        }
                                    >
                                        Delete
                                    </Div>
                                </>
                            )}
                        </MotionDiv>
                    </AnimatePresence>
                </Portal>
            )}
        </>
    )
}


export default DeletePrompt