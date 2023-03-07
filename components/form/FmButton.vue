<script>
export default{
    name: 'FmButton',
    props: {
        theme: {
            type: String,
            default: 'default'
        }
    }
}
</script>

<template>
    <button
        class="fm-button"
        :class="'fm-button--'+theme"
    >
        <slot/>
    </button>
</template>

<style lang="scss">
.fm-button {
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        opacity: 0;
        display: block;
        position: absolute;
        border-radius: 4px;
    }
    &:hover {
        &::after {
            opacity: .15;
        }
    }
    &:active {
        &::after {
            opacity: .3;
        }
    }
    &--default {
        background-color: #5028ff;
    }
    &--alert {
        background-color: #ff2828;
    }
    &--action {
        background-color: #2873ff;
    }
}
</style>