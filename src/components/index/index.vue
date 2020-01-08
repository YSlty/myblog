<template>
	<div>
		<div class="header">
			<p>Y&S.blog</p>
		</div>
		<div id="nav">
			<div>
				<router-link to="/">首页</router-link> 
				<router-link to="/study">学习历程</router-link> 
				<router-link to="/share">心情分享</router-link>
				<router-link to="/about">关于我</router-link>
			</div>
		</div>
		<router-view/>
		<footer>
			<a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备19052252号</a>
		</footer>
	</div>
</template>

<script>
	// import 
	export default {
		name: 'Index',
		data () {
			return {
				msg: 'dadsa'
			}
		}
	}
</script>

<style scoped lang="less">
#app {
  // width: 1200px;
  margin: 0 auto;
}
.header{
	height: 170px;
	background-image: url(../../../public/img/xingkong.jpg);
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
	
</style>
