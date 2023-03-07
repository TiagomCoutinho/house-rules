<script>
import FmButton from './FmButton.vue';
import FmInput from './FmInput.vue';

export default {
    name: "SearchId",
    components: { FmInput, FmButton }
}
</script>

<template>
    <div class="search-id">
        <FmInput name="Seach by ID" label="Search by ID"/>
        <FmButton>
            Submit
        </FmButton>
    </div>
</template>

<style lang="scss">
.search-id {
    display: flex;
    align-items: flex-end;
    gap: 12px;
}
</style>