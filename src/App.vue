<template>
<div class="bg-gray-700 min-h-screen text-white">
    <Header />
    <SidebarVue />
</div>

</template>


<script>
// Components
import Header from './components/Header.vue'
import SidebarVue from './components/Sidebar.vue'

export default {
	name: 'App',
	components: {
		Header,
        SidebarVue
	}
}
</script>
