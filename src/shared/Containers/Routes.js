import {
    AnimatePresence,
    AnimateSharedLayout
}                             from 'framer-motion'
import React, {
    lazy,
    Suspense,
    useContext
}                             from 'react'
import {
    Route,
    Switch
}                             from 'react-router-dom'
import AdminRoute             from 'shared/Basic/AdminRoute'
import MotionDiv              from 'shared/Basic/MotionDiv'
import PrivateRoute           from 'shared/Basic/PrivateRoute'
import {TransitionAnimations} from 'shared/Containers/TransitionController'
import Fallback               from 'shared/Layout/Fallback'

const AdminDashboard = lazy(() => import('features/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/dashboard'))
const CreatePost = lazy(() => import('features/admin/CreatePost'))
const CreateProduct = lazy(() => import('features/admin/CreateProduct'))
const CreateProductCategory = lazy(() => import('features/admin/CreateProductCategory'))
const ManageMarketplace = lazy(() => import('features/admin/ManagePosts'))
const ManageOrders = lazy(() => import('features/admin/ManageOrders'))
const ManageShop = lazy(() => import('features/admin/ManageShop'))
const ManageTaxonomy = lazy(() => import('features/admin/ManageTaxonomy'))
const UpdatePost = lazy(() => import('features/admin/UpdatePost'))
const UpdateProduct = lazy(() => import('features/admin/UpdateProduct'))
const UpdateProductCategory = lazy(() => import('features/admin/UpdateProductCategory'))
const Post = lazy(() => import('features/post/Post'))
const Marketplace = lazy(() => import('features/post/Posts'))
const Product = lazy(() => import('features/shop/Product'))
const Shop = lazy(() => import('features/shop/Shop'))
const FilteredProduct = lazy(() => import('features/shop/FilteredShop'))
const NotFound = lazy(() => import('features/site/NotFound'))
const SignIn = lazy(() => import('features/user/SignIn'))
const SignUp = lazy(() => import('features/user/SignUp'))
const UserOrders = lazy(() => import('features/user/dashboard/Orders'))
const UserSettings = lazy(() => import('features/user/dashboard/Settings'))
const Home = lazy(() => import('features/site/Home'))

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)


    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Home}/>
                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/posts" exact component={Marketplace}/>
                            <Route path="/posts/:slug" exact component={Post}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} />
                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/settings" exact component={UserSettings}/>
                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/product-category" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/posts" exact component={ManageMarketplace}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/posts/update/:slug" exact component={UpdatePost}/>
                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/product" exact component={CreateProduct}/>
                            <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/post" exact component={CreatePost}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Routes


