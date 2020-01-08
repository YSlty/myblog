<template>
  <div class="hello">
		
		<div class="index-list">
			<div>
				<h3>最新发布</h3>
				<div>
					<p><a href="/#/study">学习历程</a></p>
					<p><a href="/#/share">心情分享</a></p>
				</div>
				
			</div>
			<ul class="list-cont">
				<li>
					<p class="list-img"><img src="" alt="" title=""></p>
					<div class="cont">
						<h3>hdskjada</h3>
						<p>下雪了，下雪了，我们大北京下雪了。一大早爸爸就带着一大一小两个宝宝出去踩雪，豌豆豆第一次看见雪，挥着手大声喊着哇哦。穿着那双蓝色的鞋子，一深一浅的往雪堆里踩，整个鞋面都是雪白一片，他弯腰去捡雪玩，冰冰的凉凉的握在手心...</p>
						<div>
							<p><span>类型</span><span>时间</span></p>
							<!-- <p><span>点赞</span><span>浏览量</span></p> -->
						</div>
					</div>
				</li>
				<li>
					<p class="list-img"><img src="" alt="" title=""></p>
					<div class="cont">
						<h3>hdskjada</h3>
						<p>下雪了，下雪了，我们大北京下雪了。一大早爸爸就带着一大一小两个宝宝出去踩雪，豌豆豆第一次看见雪，挥着手大声喊着哇哦。穿着那双蓝色的鞋子，一深一浅的往雪堆里踩，整个鞋面都是雪白一片，他弯腰去捡雪玩，冰冰的凉凉的握在手心...</p>
						<div>
							<p><span>类型</span><span>时间</span></p>
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
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</div>
			<div class="news mt30">
				<p class="text-color">最新文章</p>
				<ul>
					<li>12346</li>
					<li>12346</li>
					<li>12346</li>
					<li>12346</li>
				</ul>
			</div>
			<div class="links mt30">
				<p class="text-color">友情链接</p>
				<ul>
					<li><a href="http://www.zcx1.com/#">星仔个人笔记</a></li>
					<li><a href="http://www.zcx1.com/#">星仔个人笔记</a></li>
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
  name: 'Index',
  data () {
    return {
      msg: 'dadsa'
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
.hello{
	display: flex;
	justify-content: space-between;
}
.index-list{
	width: 750px;
}
.index-list>div{
	// border-bottom: 2px solid #42B983;
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
		}
	}
}
.sidebar{
	width: 420px;
	background-color: pink;
	// border-left: 1px solid #F77825;
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
