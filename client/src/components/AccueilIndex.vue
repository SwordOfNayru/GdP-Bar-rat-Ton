<template>
    <div class="w-full h-screen">
        <div class="grid grid-rows-5">
            <div class="">
                <div class="grid grid-cols-7">
                    <div class="col-start-2 col-span-6 flex justify-first">
                        <img src="../assets/logo.png" />
                        <p class="font-mono text-4xl place-items-center pt-32">
                            Bar-rat-ton
                        </p>
                    </div>
                </div>
            </div>
            <div class="row-span-3 background-carte flex w-full justify-center">
                <barre-recherche @search="OnSearch" class="h-12 mt-24">
                </barre-recherche>
            </div>
            <div></div>
        </div>

        <div class="w-full z-2 bottom-175 left-0 absolute">
            <div class="flex justify-around">
                <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                    <img
                        src="../assets/Image_1_Home.png"
                        class="mb-1 rounded-lg"
                    />
                    <p class="font-mono text-center text-xs p-2 m-2">
                        Bar-rat-thon est l’application idéal pour garder un
                        contrôle sur votre budget soirée, en quelques clics
                        retrouvé vous à l’endroit le plus adapté à votre budget
                        et vos envies pour pouvoir ainsi profiter le plus de ce
                        moment.
                    </p>
                </div>

                <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                    <img
                        src="../assets/Image_2_Home.png"
                        class="mb-1 rounded-lg"
                    />
                    <p class="font-mono text-center text-xs p-2 m-2">
                        Bar-rat-thon est avant tout un moment de joie et de
                        partage, profiter des moments présent avec votre
                        entourage actuel et futur sans se soucier d’autres
                        chose.
                    </p>
                </div>

                <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                    <img
                        src="../assets/Image_3_Home.png"
                        class="mb-1 rounded-lg"
                    />
                    <p class="font-mono text-center text-xs p-2 m-2">
                        Bar-rat-thon est en partenariat avec les différents bar
                        d’Amiens, permettant de mettre ainsi à jour les cartes
                        des bars, leurs divers heures d’ouverture et bien plus
                        encore.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarreRecherche from "./BarreRecherche.vue";
export default {
    components: { BarreRecherche },
    name: "Index",
    props: {},
    methods: {
        ChangePage(budget, typeBoisson) {
            this.$emit("relay", {
                to: "App",
                budget,
                typeBoisson,
            });
        },
        OnSearch(e) {
            if (e.budget && e.typeBoisson) {
                this.ChangePage(e.budget, e.typeBoisson);
            }
        },
    },
};
</script>

<style scoped>
.bottom-175 {
    bottom: 75px;
}
.background-carte {
    background-image: url("../assets/Map.png");
}
</style>