import { defineAsyncComponent } from 'vue';
<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">No hay nada seleccionado</h1>
	</div>

	<FabBuet />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	components: {
		FabBuet: defineAsyncComponent(() => import("../components/FabBuet.vue")),
	},
};
</script>

<style lang="scss" scoped>
div {
	height: 100%;
}
</style>
