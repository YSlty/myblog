<template>
  <div id="app">
		<div class="header">
			<p>Y&S.blog</p>
		</div>
    <div id="nav">
			<div>
				<router-link to="/study">学习历程</router-link> 
				<router-link to="/share">心情分享</router-link>
				<router-link to="/about">关于我</router-link>
			</div>
    </div>
    <router-view/>
		<footer>
			<a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备19052252号</a>
		</footer>
		<div class="tipWrong" v-if="tipout">
			<div>
				<p>{{tip.data}}</p>
				<div>
					<button type="primary" @click="sure()">确定</button>
					<button type="primary" @click="cancelTip()">取消</button>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
  export default{
		data () {
			return {
				tip: '',
				tipout:true
			}
		},
		created(){
			this.$store.dispatch('getArticle')
			// window.console.log(this.$store.state)
			this.tip=this.$store.state
			if (localStorage.getItem("close")=="1") {
				window.console.log("1")
				window.close()
			}
		},
		methods:{
			sure(){
				// localStorage.setItem("close","1")
				window.location.href=location.href;
			},
			cancelTip(){
				this.tipout=false;
			}
		}
  }
</script>
<style lang="less">
#app {
  // width: 1200px;
  margin: 0 auto;
}
.header{
	height: 170px;
	background-image: url(../public/img/xingkong.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	p{
		color: #fff;
		line-height: 170px;
		width: 1200px;
		margin: 0 auto;
		font-size: 50px;
	}
}
#nav {
  padding:30px 0 30px 0;
	div{
		width: 1200px;
		margin: 0 auto;
		a {
			padding: 10px 30px;
			background-color: #101010;
			color: #fff;
			font-weight: bold;
			&.router-link-exact-active {
				color: #000000;
				background-color: #f77825;
			}
		}
	}
  
}
footer{
	padding: 30px ;
	text-align: center;
	border-top: 1px solid #F77825;
}
.tipWrong{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 100%;
	height: 100%;
	background-color: #000000;
	// opacity: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000000;
	div{
		width: 400px;
		height: 150px;
		background-color: #FFFFFF;
		border-radius: 10px;
		overflow: hidden;
		p{
			height: 110px;
			width: 100%;
			text-align: center;
			line-height: 80px;
		}
		div{
			border-radius: 0;
			button{
				width: 200px;
				height: 40px;
				border: none;
				outline: none;
				cursor: pointer;
				
			}
			button:nth-child(1){
				background-color: darksalmon;
			}
		}
	}
}
</style>
