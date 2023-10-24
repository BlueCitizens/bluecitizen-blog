import CoolHeader from "../components/header/CoolHeader/CoolHeader";
import HomeContent from "../components/content/HomeContent";
import Footer from "../components/footer/Footer";
import Index from "../components/Index"

import ArticleHomeContent from "../components/content/ArticleHomeContent";
import NoteHomeContent from "../components/content/NoteHomeContent";
import EssayHomeContent from "../components/content/EssayHomeContent";
import TimeLineContent from "../components/content/TimeLineContent";
import TimeLine from "../components/content/TimeLine";
import ArticleContent from "../components/content/ArticleContent";
import LinkContent from "../components/content/LinkContent";
import Error404 from "../views/error/Error404";
import LeaveCommentContent from "../components/content/LeaveCommentContent";
import DemoContent from "../components/content/DemoContent";
import DemoHomeContent from "../components/content/DemoHomeContent";
import AboutContent from "../components/content/AboutContent";
import SearchContent from "@/components/content/SearchContent";
export default [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '/',
                components: {
                    header: CoolHeader,
                    content: HomeContent,
                    footer: Footer
                },
                meta: {
                    title: '首页',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/articles',
                name: 'articles',
                components: {
                    header: CoolHeader,
                    content: ArticleHomeContent,
                    footer: Footer
                },
                meta: {
                    title: '文章',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/notes',
                name: 'notes',
                components: {
                    header: CoolHeader,
                    content: NoteHomeContent,
                    footer: Footer
                },
                meta: {
                    title: '笔记',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/essays',
                name: 'essays',
                components: {
                    header: CoolHeader,
                    content: EssayHomeContent,
                    footer: Footer
                },
                meta: {
                    title: '随笔',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/search',
                name: 'search',
                components: {
                    header: CoolHeader,
                    content: SearchContent,
                    footer: Footer
                },
                meta: {
                    title: '搜索',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/articles/category/:id',
                name: 'articles/category',
                components: {
                    header: CoolHeader,
                    content: LeaveCommentContent,
                    footer: Footer
                },
                meta: {
                    title: '文章列表',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/demo',
                name: 'demos',
                components: {
                    header: CoolHeader,
                    content: DemoHomeContent,
                    footer: Footer
                },
                meta: {
                    title: 'Demo',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/link',
                name: 'link',
                components: {
                    header: CoolHeader,
                    content: LinkContent,
                    footer: Footer
                },
                meta: {
                    title: '友链',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/leaveComment',
                name: 'leaveComment',
                components: {
                    header: CoolHeader,
                    content: LeaveCommentContent,
                    footer: Footer
                },
                meta: {
                    title: '留言',
                    content:{
                        keywords:'BlueCitizen,BC君,Java,留言',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/about',
                name: 'about',
                components: {
                    header: CoolHeader,
                    content: AboutContent,
                    footer: Footer
                },
                meta: {
                    title: 'About',
                    content:{
                        keywords:'BlueCitizen,BC君,Java,关于',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/time_line',
                components: {
                    header: CoolHeader,
                    content: TimeLine,
                    footer: Footer
                },
                meta: {
                    title: '时光轴',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: '/archive',
                components: {
                    header: CoolHeader,
                    content: TimeLineContent,
                    footer: Footer
                },
                meta: {
                    title: '时光轴',
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: 'article/:id',
                name: 'article',
                components: {
                    header: CoolHeader,
                    content: ArticleContent,
                    footer: Footer
                },
                meta: {
                    title: '文章详情',
                    need_log: false,
                    content:{
                        keywords:'BlueCitizen,BC君,Java',
                        description:'BlueCitizens,Java',
                    },
                }
            },
            {
                path: 'demo/:id',
                name: 'demo',
                components: {
                    header: CoolHeader,
                    content: DemoContent,
                    footer: Footer
                },
                meta: {
                    title: 'Demo详情',
                    need_log: false
                }
            },
        ]
    },
    {
        path: '*',
        component: Error404,
    }
];
