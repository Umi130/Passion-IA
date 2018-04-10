<template>
	<div class="credits">
		<div class="wrapper" :style="{ 'animation-duration': animationDuration }">
			<h2>Credits</h2>
 
			<div v-if="parcours === 'conducteur'">			
				<p>
					1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div v-else-if="parcours === 'musicien'">			
				<p>
					2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div v-else-if="parcours === 'juriste'">			
				<p>
					3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>


			<div class="credits-footer">
				<social-sharing inline-template class="mb-4">
					<div>
						<network network="facebook" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-facebook"></i> Facebook
						</network>
						<network network="googleplus" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-google-plus"></i> Google +
						</network>
						<network network="linkedin" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-linkedin"></i> LinkedIn
						</network>
						<network network="pinterest" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-pinterest"></i> Pinterest
						</network>
						<network network="reddit" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-reddit"></i> Reddit
						</network>
						<network network="twitter" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-twitter"></i> Twitter
						</network>
						<network network="vk" class="btn btn-sm btn-default">
						  <i class="fa fa-vk"></i> VKontakte
						</network>
						<network network="weibo" class="btn btn-sm btn-default">
						  <i class="fa fa-weibo"></i> Weibo
						</network>
						<network network="whatsapp" class="btn btn-sm btn-default">
						  <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
						</network>
					</div>
				</social-sharing>

				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
				<div class="text-center mt-4">
					<router-link to="/" class="btn btn-primary">
						Refaire une partie
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	name: 'credits',
	props: ['parcours'],
	computed: {
		animationDuration: function() {
			return ({
				'juriste': 10,
				'musicien': 10,
				'conducteur': 10
			}[this.parcours] || 30) + 's';
		}
	}
}
</script>

<style scoped>
.credits {
	position:absolute;
	top: 0;
	left: 50%;
	height: 100%;	
	width: 100%;
	max-width: 660px;
	transform: translateX(-50%);
	overflow: hidden;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  text-align: center;
  animation: 30s credits linear forwards;
}

.credits-footer {
	position: absolute
	top:100%;
	left:0;
	width: 100%;
	padding: 10%;
	transform: translateY(100%);
	font-weight: bold;
}

@keyframes credits {
    0% { 
    	top:  100%;
    	transform: translateY(0);
    }
  	100% { 
  		top: 0; 
    	transform: translateY(-100%);
  	}
 }
</style>