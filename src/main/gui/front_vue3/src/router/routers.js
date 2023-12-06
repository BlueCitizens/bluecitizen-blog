import AboutContent from "@/components/content/AboutContent.vue";
import Index from "@/components/Index.vue";
import CoolHeader from "@/components/header/CoolHeader/CoolHeader.vue";
import Footer from "@/components/footer/Footer.vue";

const routes = [
    {
      path: '/',
      component: Index,
      children: [
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
      ]
    },
    /*{
        path: '/',
        redirect: '/index',
    },*/
    {
        path: '/index',
        component:()=> import('@/components/HelloWorld.vue')
    },

]

export default routes