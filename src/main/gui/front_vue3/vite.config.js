// vite.config.js
import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

const port = process.env.port || process.env.npm_config_port || 80; // 端口
export default defineConfig(({ command, mode })=> {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '')
    return {
        // vite 配置
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        // 配置选项
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        // 所有以 mdui- 开头的标签名都是 mdui 组件
                        isCustomElement: (tag) => tag.startsWith('mdui-')
                    }
                }
            })
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src'), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
            }
        },
        build: {
            outDir: 'dist',  // build时的输出路径
            assetsDir: 'assets',  // 指定生成静态资源的存放路径
        },
        server: {
            host: 'localhost',
            port: port,
            strictPort: false,
            proxy: {
                // detail: https://cli.vuejs.org/config/#devserver-proxy
                [process.env.VUE_APP_BASE_API]: {
                    target: `http://127.0.0.1:8888`,
                    // target: `http://103.82.54.214:8888/`,
                    changeOrigin: true,
                    pathRewrite: {
                        ['^' + process.env.VUE_APP_BASE_API]: ''
                    }
                }
            },
        }
    }
})