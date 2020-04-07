<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
	metaInfo(){
				return {
						title: '夜殇的个人blog',
						meta: [
								{
										name:"keywords",
										content: '夜殇的个人blog'
								},{
										name:"description",
										content: '夜殇的个人blog'
								}
						]
				}
	},
}
</script>
<style scoped lang="less">
.home{
	width: 1200px;
	margin: 0 auto;
}
</style>