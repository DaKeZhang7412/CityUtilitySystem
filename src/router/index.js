import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    // 首页--概况
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: {
                title: '概况',
                icon: 'el-icon-postcard'
            }
        }]
    },
    // 电力监测
    {
        path: '/powermonitoring',
        component: Layout,
        name: 'powerMonitoring',
        meta: {
            title: '电力监测',
            icon: 'el-icon-data-line'
        },
        children: [{
                path: 'ed',
                name: 'ED',
                component: () =>
                    import ('@/views/powerMonitoring/ED'),
                meta: {
                    title: '电力数据'
                }
            },
            {
                path: 'gzdwm',
                name: 'GZDWM',
                component: () =>
                    import ('@/views/powerMonitoring/GZDWM'),
                meta: {
                    title: '直流屏监控'
                }
            },
            {
                path: 'mpf',
                name: 'MPF',
                component: () =>
                    import ('@/views/powerMonitoring/MPF'),
                meta: {
                    title: '平均功率因数'
                }
            },
            {
                path: 'pdc',
                name: 'PDC',
                component: () =>
                    import ('@/views/powerMonitoring/PDC'),
                meta: {
                    title: '配电图'
                }
            },
            {
                path: 'pevrf',
                name: 'PEVRF',
                component: () =>
                    import ('@/views/powerMonitoring/PEVRF'),
                meta: {
                    title: '电力极值报表'
                }
            }, {
                path: 'podr',
                name: 'PODR',
                component: () =>
                    import ('@/views/powerMonitoring/PODR'),
                meta: {
                    title: '电力运行日报'
                }
            }, {
                path: 'porf',
                name: 'PORF',
                component: () =>
                    import ('@/views/powerMonitoring/PORF'),
                meta: {
                    title: '电力运行报表'
                }
            },
            {
                path: 'tq',
                name: 'TQ',
                component: () =>
                    import ('@/views/powerMonitoring/TQ'),
                meta: {
                    title: '变压器查询'
                }
            }
        ]
    },
    // 电能质量
    {
        path: '/powerquality',
        component: Layout,
        children: [{
            path: 'index',
            name: 'powerQuality',
            component: () =>
                import ('@/views/powerQuality/index'),
            meta: {
                title: '电能质量',
                icon: 'el-icon-orange'
            }
        }]
    },
    // 用电分析
    {
        path: '/electricanalysis',
        component: Layout,
        name: 'electricityAnalysis',
        meta: {
            title: '用电分析',
            icon: 'el-icon-odometer'
        },
        children: [{
                path: 'call',
                name: 'CALL',
                component: () =>
                    import ('@/views/electricityAnalysis/CALL'),
                meta: {
                    title: '计量及线路损耗'
                }
            },
            {
                path: 'cpcr',
                name: 'CPCR',
                component: () =>
                    import ('@/views/electricityAnalysis/CPCR'),
                meta: {
                    title: '自定义用电报表'
                }
            },
            {
                path: 'erf',
                name: 'ERF',
                component: () =>
                    import ('@/views/electricityAnalysis/ERF'),
                meta: {
                    title: '用能分析'
                }
            },
            {
                path: 'moma',
                name: 'MOMA',
                component: () =>
                    import ('@/views/electricityAnalysis/MOMA'),
                meta: {
                    title: '环比分析'
                }
            },
            {
                path: 'pmr',
                name: 'PMR',
                component: () =>
                    import ('@/views/electricityAnalysis/PMR'),
                meta: {
                    title: '电能抄报'
                }
            }, {
                path: 'yoya',
                name: 'YOYA',
                component: () =>
                    import ('@/views/electricityAnalysis/YOYA'),
                meta: {
                    title: '同比分析'
                }
            }
        ]
    },
    // 事件记录
    {
        path: '/eventlog',
        component: Layout,
        name: 'eventLog',
        meta: {
            title: '事件记录',
            icon: 'el-icon-place'
        },
        children: [{
                path: 'am',
                name: 'AM',
                component: () =>
                    import ('@/views/eventLog/AM'),
                meta: {
                    title: '报警信息'
                }
            },
            {
                path: 'ce',
                name: 'CE',
                component: () =>
                    import ('@/views/eventLog/CE'),
                meta: {
                    title: '通信事件'
                }
            },
            {
                path: 'ol',
                name: 'OL',
                component: () =>
                    import ('@/views/eventLog/OL'),
                meta: {
                    title: '操作日志'
                }
            },
            {
                path: 'oole',
                name: 'OOLE',
                component: () =>
                    import ('@/views/eventLog/OOLE'),
                meta: {
                    title: '越限事件'
                }
            },
            {
                path: 'pod',
                name: 'POD',
                component: () =>
                    import ('@/views/eventLog/POD'),
                meta: {
                    title: '平均运行日志'
                }
            }, {
                path: 'pr',
                name: 'PR',
                component: () =>
                    import ('@/views/eventLog/PR'),
                meta: {
                    title: '推送记录'
                }
            }, {
                path: 'smsd',
                name: 'SMSD',
                component: () =>
                    import ('@/views/eventLog/SMSD'),
                meta: {
                    title: '短信日志'
                }
            }
        ]
    },
    // 安全用电
    {
        path: '/electricsafety',
        component: Layout,
        name: 'electricSafety',
        meta: {
            title: '安全用电',
            icon: 'el-icon-warning-outline'
        },
        children: [{
                path: 'cabmt',
                name: 'CABMT',
                component: () =>
                    import ('@/views/electricSafety/CABMT'),
                meta: {
                    title: '线缆及母排测温'
                }
            },
            {
                path: 'lm',
                name: 'LM',
                component: () =>
                    import ('@/views/electricSafety/LM'),
                meta: {
                    title: '漏电监测'
                }
            }
        ]
    },
    // 运行环境
    {
        path: '/runtime',
        component: Layout,
        name: 'Runtime',
        meta: {
            title: '运行环境',
            icon: 'el-icon-cpu'
        },
        children: [{
                path: 'atah',
                name: 'ATAH',
                component: () =>
                    import ('@/views/Runtime/ATAH'),
                meta: {
                    title: '环境温湿度'
                }
            },
            {
                path: 'em',
                name: 'EM',
                component: () =>
                    import ('@/views/Runtime/EM'),
                meta: {
                    title: '环境监测'
                }
            },
            {
                path: 'gcs',
                name: 'GCS',
                component: () =>
                    import ('@/views/Runtime/GCS'),
                meta: {
                    title: '网关通信状态'
                }
            },
            {
                path: 'ics',
                name: 'ICS',
                component: () =>
                    import ('@/views/Runtime/ICS'),
                meta: {
                    title: '仪表通信状态'
                }
            },
            {
                path: 'vds',
                name: 'VDS',
                component: () =>
                    import ('@/views/Runtime/VDS'),
                meta: {
                    title: '视频设备状态'
                }
            }, {
                path: 'vm',
                name: 'VM',
                component: () =>
                    import ('@/views/Runtime/VM'),
                meta: {
                    title: '视频监控'
                }
            }
        ]
    },
    // 设备管理
    {
        path: '/equipmentmanagement',
        component: Layout,
        name: 'equipmentManagement',
        meta: {
            title: '设备管理',
            icon: 'el-icon-menu'
        },
        children: [{
                path: 'drf',
                name: 'DRF',
                component: () =>
                    import ('@/views/equipmentManagement/DRF'),
                meta: {
                    title: '设备报表'
                }
            },
            {
                path: 'ea',
                name: 'EA',
                component: () =>
                    import ('@/views/equipmentManagement/EA'),
                meta: {
                    title: '设备定义'
                }
            },
            {
                path: 'qrm',
                name: 'QRM',
                component: () =>
                    import ('@/views/equipmentManagement/QRM'),
                meta: {
                    title: '二维码管理'
                }
            }
        ]
    },
    // 运维管理
    {
        path: '/operationmanagement',
        component: Layout,
        meta: {
            title: '运维管理',
            icon: 'el-icon-monitor'
        },
        children: [{
            path: 'cdss',
            name: 'CDSS',
            component: () =>
                import ('@/views/operationManagement/CDSS'),
            meta: {
                title: '变配电站状态'
            }
        }, {
            path: 'tc',
            name: 'TC',
            component: () =>
                import ('@/views/operationManagement/TC'),
            meta: {
                title: '变压器状态'
            }
        }]
    },
    // 用户报告
    {
        path: '/customreport',
        component: Layout,
        children: [{
            path: 'index',
            name: 'customReport',
            component: () =>
                import ('@/views/customReport/index'),
            meta: {
                title: '用户报告',
                icon: 'el-icon-tickets'
            }
        }]
    },
    // 系统设置
    {
        path: '/systemsetting',
        component: Layout,
        children: [{
            path: 'index',
            name: 'systemSetting',
            component: () =>
                import ('@/views/systemSetting/index'),
            meta: {
                title: '系统设置',
                icon: 'el-icon-setting'
            }
        }]
    },
    // 问题反馈
    {
        path: '/feedback',
        component: Layout,
        children: [{
            path: 'index',
            name: 'Feedback',
            component: () =>
                import ('@/views/Feedback/index'),
            meta: {
                title: '问题反馈',
                icon: 'el-icon-edit-outline'
            }
        }]
    },

    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router