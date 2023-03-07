<template>
    <section class="gd-container">
        <FmInput label="Um Texto Legal"/>
        <FmButton>
            Asd
        </FmButton>
        <SingleRule name="Nome" id="0"/>
    </section>
</template>

<script>
import FmButton from '../components/form/FmButton.vue';
import FmInput from '../components/form/FmInput.vue';
import SingleRule from '../components/list/SingleRule.vue';

export default {
    name: "IndexPage",
    components: { FmInput, FmButton, SingleRule }
}
</script>
