<script>
export default {
    name: 'ModalBG',
    methods: {
		closeAllModal() {
			this.$store.dispatch("houseRules/UPDATE_ACTIVE_MODAL", null);
		}
	},
}
</script>

<template>
    <div class="modal-bg" @click="closeAllModal"></div>
</template>

<style lang="scss">
.modal-bg {
    background-color: black;
    opacity: .5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
} 
</style>