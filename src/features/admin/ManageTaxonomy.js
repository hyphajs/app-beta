import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AdminTaxonomy         from 'features/admin/AdminTaxonomy'
import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import DeletePrompt          from 'shared/Controls/DeletePrompt'
import ContentWrapper from 'shared/Layout/ContentWrapper'
import DashboardInfo  from 'shared/Layout/Dashboard/DashboardInfo'
import {slugify}      from 'utils/slugify'

const ManageTaxonomy = () => {
    const {productCategories} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    const taxonomies = [
        {
            title: 'Product Categories',
            slug: slugify('Product Categories'),
            items: productCategories,
            feature: 'shop'
        }
    ]

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Taxonomy'}
                    description={'Click to edit.'}
                />
                <AdminTaxonomy taxonomies={taxonomies}/>
                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageTaxonomy
