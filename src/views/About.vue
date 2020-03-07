<template>
  <div class="about">
	<div class="index-list">
			<div>
				<h3>最新发布</h3>
				<div>
					<p><a href="/#/">首页</a></p>
					<p><a href="/#/share">心情分享</a></p>
				</div>
				
			</div>
			<ul class="list-cont">
				<li v-for="(item,index) in about" v-bind:key="index" @click="enterDetails(item.id)">
					<p class="list-img"><img src="" alt="" title=""></p>
					<div class="cont">
						<h3>{{item.title}}</h3>
						<p v-html="item.jianjie"></p>
						<div>
							<p><span>关于我</span><span>{{item.time}}</span></p>
							<!-- <p><span>点赞</span><span>浏览量</span></p> -->
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="sidebar">
			<div class="tag">
				<p class="text-color">标签</p>
				<ul>
					<li><router-link to="/study">学习历程</router-link> </li>
					<li><router-link to="/share">心情分享</router-link></li>
					<li><router-link to="/about">关于我</router-link></li>
				</ul>
			</div>
			<div class="news mt30">
				<p class="text-color">最新文章</p>
				<ul>
					<li v-for="(item,index) in datas" v-bind:key="index" @click="enterDetails(item.id)">{{item.title}}</li>
				</ul>
			</div>
			<div class="links mt30">
				<p class="text-color">友情链接</p>
				<ul>
					<li><a href="http://www.zcx1.com/#">星仔个人笔记</a></li>
				</ul>
			</div>
			<div class="aboutmy mt30">
				<p class="text-color">关于我</p>
				<ul>
					<li>
						<div>
							<p><img src="../../public/img/wx.png" alt=""></p>
							<p>我的微信</p>
						</div>
						<p class="dp"><img src="../../public/img/code.jpg" alt=""></p>
					</li>
					<li>
						<div>
							<p><img src="../../public/img/qq2.png" alt=""></p>
							<p>我的qq</p>
						</div>
						<p class="dp"><img src="../../public/img/qq.jpg" alt=""></p>
					</li>
					<li>
						<div>
							<a href="mailto:1257712175@qq.com" target="_blank" rel="external nofollow">
								<p><img src="../../public/img/email.png" alt=""></p>
								<p>我的邮箱</p>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'dadsa'
    }
  },
  computed: {
    datas() {
		let data=[],msglist=this.$store.state.data.data;
		if (msglist!=undefined) {
			for(let i=0;i<msglist.length;i++){
				if (i<6) {
					data.push(msglist[i])
				}
				
			}
		}
      return data
    },
	about() {
		let aboutMsg=this.$store.state.data.data,about=[];
		if (aboutMsg!=undefined) {
			for (let i = 0; i < aboutMsg.length; i++) {
				if (aboutMsg[i].typeId=="0") {
					about.push(aboutMsg[i])
				}	
			}			
		}
		return about
	}
  },
  methods: {
    enterDetails(article) {
      this.$router.push({
        name:"detail",
        query:{id:article},
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dp{
	display: none;
}
.text-color{
	color: #42B983;
}
.about{
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
}
.index-list{
	width: 750px;
}
.index-list>div{
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-bottom: 8px;
	div{
		display: flex;
		align-items: flex-end;
		p>a{
			padding: 0 10px;
		}
	}
}
.list-cont{
	width: 100%;
	
	li{
		width: 100%;
		height: 180px;
		display: flex;
		justify-content: space-between;
		padding: 20px 0;
		cursor: pointer;
		border-top: 2px solid #42B983;
		.list-img{
			width: 180px;
			height: 180px;
			border-radius: 5px;
			overflow: hidden;
			background-color: pink;
		}
		.cont{
			width: 550px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			div{
				display: flex;
				justify-content: space-between;
				p:nth-child(1)>span{
					margin-right: 10px;
				}
				p:nth-child(2)>span{
					margin-left: 10px;
				}
			}
		}
		.cont>p{
			line-height: 20px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}
	li:hover{
		background-color: #e7e5e5;
	}
}
.sidebar{
	width: 420px;
	.tag{
		width: 420px;
		// float: right;
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 5px;
			li{
				width: 30%;
				margin-top: 20px;
				padding-left: 3%;
			}
		}
	}
	.news{
		width: 420px;
		// float: right;
		ul{
			width: 100%;
			margin-top: 5px;
			li{
				margin-top: 20px;
				margin-left: 10px;
				cursor: pointer;
			}
		}
	}
	.links{
		width: 420px;
		// float: right;
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 5px;
			li{
				margin-top: 20px;
				margin-left: 10px;
			}
		}
	}
	.aboutmy{
		width: 420px;
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 30px;
			li{
				margin-left: 30px;
				position: relative;
				div{
					cursor: pointer;
					overflow: hidden;
					text-align: center;
					display: flex;
					flex-direction: column;
					align-items: center;
					a{
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					p:nth-of-type(1){
						width: 45px;
						height: 45px;
					}
					p:nth-of-type(2){
						margin-top: 10px;
					}
					img{
						width: 100%;
						height: auto;
					}
				}
			}
			li:nth-of-type(1){
				div{
					p:nth-of-type(1){
						background-color: #6fc299;
						border-radius: 6px;
					}
				}
			}
			li:nth-of-type(3){
				div{
					p:nth-of-type(1){
						background-color: #6fc299;
						border-radius: 6px;
					}
				}
			}
			li:nth-of-type(1):hover div p:nth-of-type(1){
				background-color: #7fb4ab;
			}
			li:nth-of-type(1):hover p:nth-of-type(1){
				display: block ;
			}
			li:nth-of-type(2):hover p:nth-of-type(1){
				display: block ;
			}
			li:hover div p:nth-of-type(2){
				color: #7fb4ab;
			}
			li>p{
				width: 200px;
				position: absolute;
				left: 50%;
				bottom: 85px;
				transform: translateX(-50%);
				padding: 20px;
				background-color: #FFFFFF;
				box-shadow: 0 5px 10px rgba(0,0,0,0.2);
				img{
					width: 100%;
					height: auto;
				}
			}
			li>p:after{
				content: "";
				display: block;
				position: absolute;
				width: 10px;
				height: 10px;
				background-color: #FFFFFF;
				bottom: -5px;
				left: 50%;
				transform: translateX(-50%) rotate(-45deg);
			}
		}
	}
}
.mt30{
	margin-top: 30px;
}
	
</style>
