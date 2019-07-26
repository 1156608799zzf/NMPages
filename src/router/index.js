import Vue from 'vue'
import Router from 'vue-router'
const Index = require('@/view/Index');
const Internet = require('@/view/Internet');
const Product = require('@/view/Product');
const ProductDetail = require('@/view/ProductDetail');
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: "/index",
            name: "index",
            components: Index
        },
        {
            path: "/internet",
            name: "internet",
            components: Internet
        },
        {
            path: "/product",
            name: "product",
            components: Product
        },
        {
            path: "/productDetail",
            name: "productDetail",
            components: ProductDetail
        }
    ]
})
