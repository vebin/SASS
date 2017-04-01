import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/', //loding
                meta: { pageTitle: '加载' },
                component: resolve => require(['../pages/loding/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]
