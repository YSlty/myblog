const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = {    
	configureWebpack: () => { 
		if (process.env.NODE_ENV === "production") {      
			return {        
				plugins: [          
					new PrerenderSPAPlugin({            // 【必须】生成文件的路径，也可以与webpakc打包的一致    
							staticDir: path.join(__dirname, "dist"),            // 【必须】对应自己的路由文件，如路由有参数，则需写成 /a/param1   
							routes: ["/", "/about", "/share","/study","/detail"],       //【可选】服务器端口配置 
							server: {
								port: 8188,
							},       // 这个很重要，如果没有配置这段，也不会进行预编译
							renderer: new Renderer({              
								inject: {
									foo: "bar",
								},             
								headless: false, // 对应 src/main.js 中 document.dispatchEvent(new Event('custom-render-trigger'))，两者的事件名称要相同
								renderAfterDocumentEvent: "render-event" ,
							})          
					})       
				]    ,
			};  
		} 
	},
// 	devServer:{
// 	        open:false,      // 是否打开浏览器;
// 	        hotOnly:true,    // 是否热更新;
// 	// 		host:"175.6.143.11",
// 	// 		port:'3326',
// 	        proxy:{
// 	            '/':{
// 	                target:'http://192.6.143.11：3326',    // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
// 	                secure:false,
// 	                changeOrigin:true,  // 开启代理，在本地创建一个虚拟服务端
// 	                ws:true,       // 是否启用  websockets;
// 	                pathRewrite:{
// 	                    '^/':''
// 	                }
// 	            },
// 	        
// 	        },
// 	
// 	    },
}