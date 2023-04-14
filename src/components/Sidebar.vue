<template>
	<aside
		:class="`fixed top-0 left-0 min-h-screen pt-16 z-40 w-full max-w-xs transform duration-300 bg-gray-800 ${
			$store.state.menu_is_active
			? ''
			: '-translate-x-full'}`
		">
		<div class="p-4">
			<h2 class="text-gray-500 text-sm font-bold uppercase mb-2">MENU</h2>
			<div class="-mx-4">
				<MenuItemVue to="/">
					<span class="material-icons mr-2">home</span>Home
				</MenuItemVue>
				<MenuItemVue to="/authors">
					<span class="material-icons mr-2">groups</span> Authors
				</MenuItemVue>
			</div>
		</div>
	</aside>
</template>

<script>
import MenuItemVue from './MenuItem.vue'
export default {
	components: {
		MenuItemVue
	}
}
</script>
