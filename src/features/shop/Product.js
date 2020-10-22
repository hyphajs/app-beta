import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../shared/Basic/Div'
import H2                   from '../../shared/Basic/H2'
import H3                   from '../../shared/Basic/H3'
import RichText  from '../../shared/Basic/RichText'
import {addItem} from './cartHelpers'
import S3Img     from '../../shared/Basic/S3Img'
import {
    businessStyle,
    businessWrapperStyle,
    genericCardImageStyle
}                from '../../themes/business'
import {genericButtonStyle} from '../../themes/elements'
import {postContentStyle}   from '../../themes/layout'


const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.shop)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo, price} = product

    useEffect(() => {
        if (slug.length > 0)
            dispatch({type: 'shop/getProduct', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    const addToCart = () => {
        addItem(product, () => {

        })
    }

    //                 listRelated(data.slug).then(data => {
//                     if (data.error) {
//                         setError(data.error)
//                     } else {
//                         setRelatedProduct(data)
//                     }
//                 })


    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={businessWrapperStyle}>
                <H2 theme={businessStyle.title}>{name}</H2>
                <H3> price: {price}</H3>
                <S3Img
                    url={photo}
                    alt={name}
                    theme={genericCardImageStyle}
                />
                <RichText children={description}/>
                <Div
                    as="button"
                    theme={genericButtonStyle}
                    onClick={(e) => {
                        e.stopPropagation()
                        addToCart()
                    }}
                >
                    Add to cart
                </Div>

            </Div>
        </Div>
    )
}

export default Product