<template>
    <!-- <Index /> -->
    <component :is="index" :info="info" @relay="changeIndex"></component>
</template>

<script>
import AccueilIndex from "./components/AccueilIndex.vue";
import AppIndex from "./components/AppIndex.vue";

export default {
    name: "App",
    data() {
        return {
            index: AccueilIndex,
            info: {},
        };
    },
    methods: {
        changeIndex(e) {
            if (e.to == "App") {
                this.info = {
                    budget: e.budget,
                    type_boisson: e.typeBoisson,
                };
                this.index = AppIndex;
            }
        },
    },
};
</script>

<style>
</style>
