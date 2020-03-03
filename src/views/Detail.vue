<template>
  <div class="detail">
		<div class="cont">
			<h3>{{getdata()}}{{msg.title}}</h3>
			<p><span>{{msg.user}}</span><span>{{msg.type}}</span><span>{{msg.time}}</span></p>
			<div v-html="msg.content"></div>
			<div class="leave-msg">
				<p class="msg-title">留言</p>
				<textarea name="" id="" cols="" rows="" v-model="leaveMsg" style="resize: none;"></textarea>
				<p style="height: 40px;"><button type="primary" @click="btnComment">发表留言</button></p>
				
				<ul>
					<li v-for="(item,index) in msglist" :key="index"><span>{{item.cont}}</span><span>2020-03-03</span></li>
				</ul>
			</div>
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
				<li v-for="(item,index) in newData.data" v-bind:key="index" @click="enterDetails(item.id)">{{item.title}}</li>
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
		msg:'',
      leaveMsg: '',
		list:[]
    }
  },
	computed: {
		datas() {
			let data=this.$store.state.data;
			let msg;
			if (data.length!=0) {
				for (let i = 0; i < data.data.length; i++) {
					if(data.data[i].id==this.$route.query.id){
						msg=data.data[i]
					}
				}
			}
			
			return msg
		},
		newData() {
			return this.$store.state.data
		},
		msglist(){
			window.console.log(this.$store.state.list);
			let msglist=[],msgdata;
			if (this.$store.state.list!="") {
				msgdata=this.$store.state.list.data;
				for(let i=0;i<msgdata.length;i++){
					if (msgdata[i].artId==this.$route.query.id) {
						msglist.push(msgdata[i])
					}
				}
			}
			return msglist
		}
	},
	methods: {
		getdata() {
			let data=this.$store.state.data;
			if (data.length!=0) {
				for (let i = 0; i < data.data.length; i++) {
					if(data.data[i].id==this.$route.query.id){
						this.msg=data.data[i]
					}
				}
			}
		},
		enterDetails(article) {
			this.$router.push({
				name:"detail",
				query:{id:article},
			})
		},
		btnComment(){
			if(this.leaveMsg!=""){
				let postData = this.$qs.stringify({
					cont:this.leaveMsg,
					artId:this.$route.query.id
				});
				this.axios.post('http://backstage.yslty.com/api/leaveMsg',postData)
				.then(function (response) {
					if (response.data.code==1){
						alert("提交成功，请等待后台人员审核")
					}else if (response.data.code==-1) {
						alert("提交失败,请填写您的留言内容")
					}
				})
				.catch(function (error) {
					window.console.log(error);
					alert("提交失败")
				});
				this.leaveMsg='';
			}else{
				alert("请填写您的留言内容")
			}
			
		},
		
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
.detail{
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
	.cont{
		width: 760px;
		p{
			margin-top: 10px;
			padding-bottom: 10px;
			border-bottom: 1px solid #E7E5E5;
			span:nth-of-type(2){
				margin-left: 20px;
			}
			span:nth-of-type(3){
				margin-left: 20px;
			}
		}
		div{
			line-height: 22px;
			letter-spacing: 1px;
			margin-top: 20px;
			p{
				margin-top: 10px;
			}
		}
		
	}
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
.leave-msg{
	margin-top: 50px;
	.msg-title{
		font-size: 24px;
		font-weight: bold;
		color: #F77825;
	}
	textarea{
		width: 750px;
		height: 80px;
		margin-top: 20px;
		border: 1px solid #E7E5E5;
		padding: 0;
		padding-left: 8px;
		font-size: 20px;
	}
	button{
		float: right;
		width: 120px;
		height: 40px;
		border: none;
		background-color: red;
		font-size: 20px;
		color: #FFFFFF;
		border-radius: 6px;
		cursor: pointer;
	}
	ul{
		li{
			width: 750px;
			display: flex;
			justify-content: space-between;
			padding-top: 10px;
			span:nth-of-type(1){
				display: block;
				width: 600px;
			}
		}
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
