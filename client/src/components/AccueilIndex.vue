<!-- html -->
<template>
    <!-- Insertion fond écran-->
    <div
        class="bg-local"
        style="
            background-image: url(https://images0.persgroep.net/rcs/S-I8OJXD85BBSRBi-L66YTNe34w/diocontent/177043474/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8);
        "
    >
        <!-- création de la grille 1/2 écran-->
        <div class="grid grid-rows-2">
            <!-- Utilisation de la première moitié de la grille 1/2 écran-->
            <div class="row-start-1">
                <div class="grid grid-cols-6 grid-rows-2">
                    <!-- Logo + texte -->
                    <div class="col-start-2 col-span-5 flex justify-first">
                        <p class="font-mono text-4xl place-items-center pt-32">
                            Bar-rat-ton
                        </p>
                    </div>

                    <!-- Placer la barre de recherche -->
                    <div class="row-start-2 col-start-2 col-span-5 pt-10">
                        <barre-recherche @search="OnSearch"> </barre-recherche>
                    </div>
                </div>
            </div>

            <!-- Utilisation de la seconde moitié de la grille 1/2 écran-->
            <div class="row-start-2">
                <!-- Case x3 presentation avec texte -->
                <div class="flex justify-around">
                    <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                        <img src="../assets/Image_1_Home.png" class="mb-1" />
                        <p class="font-mono text-center text-xs p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nunc arcu, venenatis eu sem eu,
                            finibus tempus risus. Pellentesque at dui est.
                            Aenean eu nunc rutrum, interdum dolor ut, fringilla
                            ante. Sed cursus consequat urna, quis malesuada urna
                            suscipit at.
                        </p>
                    </div>

                    <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                        <img src="../assets/Image_2_Home.png" class="mb-1" />
                        <p class="font-mono text-center text-xs p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nunc arcu, venenatis eu sem eu,
                            finibus tempus risus. Pellentesque at dui est.
                            Aenean eu nunc rutrum, interdum dolor ut, fringilla
                            ante. Sed cursus consequat urna, quis malesuada urna
                            suscipit at.
                        </p>
                    </div>

                    <div class="bg-white w-80 border-1 shadow-2xl rounded-lg">
                        <img src="../assets/Image_3_Home.png" class="mb-1" />
                        <p class="font-mono text-center text-xs p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nunc arcu, venenatis eu sem eu,
                            finibus tempus risus. Pellentesque at dui est.
                            Aenean eu nunc rutrum, interdum dolor ut, fringilla
                            ante. Sed cursus consequat urna, quis malesuada urna
                            suscipit at.
                        </p>
                    </div>
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