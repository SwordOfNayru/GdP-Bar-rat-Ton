<template>
    <div>
        <!-- loaded -->
        <div class="flex flex-col p-2 gap-x-2">
            <!-- Croix -->
            <div class="w-full flex justify-start">
                <i
                    class="fas fa-times cursor-pointer"
                    @click="OnClickClose"
                ></i>
            </div>
            <!-- image -->
            <div class="w-full flex justify-center">
                <div class="overflow-hidden w-64 h-64">
                    <img :src="Barimg" />
                </div>
            </div>

            <div class="w-full flex justify-center">
                {{ bar.nom }}
            </div>

            <div class="w-full grid grid-cols-3">
                <!-- adresse -->
                <div class="font-bold">Adresse :</div>
                <div class="col-span-2">
                    {{ bar.adresse }}
                </div>

                <!-- horraire -->
                <div class="font-bold">Horaires :</div>
                <horaire :Horaire="bar.horaires" class="col-span-2" />

                <!-- happy hour -->
                <div class="font-bold">Happy Hour :</div>
                <div class="col-span-2">
                    {{ Happy }}
                </div>

                <!-- Boissons proposé -->
                <div class="font-bold">Resultat :</div>
                <div class="col-span-2 m-1">
                    <div class="overflow-scroll h-32 flex flex-col">
                        <div
                            class="w-full grid grid-cols-4"
                            v-for="(boisson, index) in bar.boissons"
                            :key="index"
                        >
                            <div class="col-span-2">
                                {{ boisson.nom }}
                            </div>
                            <div>{{ boisson.prix }} €</div>
                            <div>{{ boisson.quantite }} cl</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Horaire from "./Horaire.vue";

export default {
    components: { Horaire },
    props: {
        bar: {
            type: Object,
            required: true,
        },
    },
    methods: {
        OnClickClose() {
            this.$emit("close", {});
        },
        DisplayHappy(h) {
            return h ? h : "aucun";
        },
    },
    computed: {
        Happy() {
            return this.bar.horaires.happy_hour ?? "aucun";
        },
        Barimg() {
            let origin = document.location.origin;

            return `${origin}/bars/${this.bar.img}`;
        },
    },
    mounted() {},
};
</script>

<style>
</style>