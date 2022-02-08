<template>
    <div class="w-screen h-screen">
        <carte
            class="w-screen h-full absolute z-0"
            :bars="bars"
            @ready="OnReady"
            @detail="OnClickMarker"
        ></carte>

        <!--Recherche Avancé-->
        <div class="posr w-96 z-10">
            <div class="grid grid-cols-10 h-9">
                <div
                    class="
                        border
                        rounded-l-lg
                        bg-white
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                    "
                    @click="OnOffMenu"
                >
                    <i class="fas fa-bars"></i>
                </div>

                <select
                    class="col-span-4 indent-4 border"
                    v-if="dataReady"
                    placeholder="Boisson ..."
                    v-model="typeBoisson"
                >
                    <option
                        v-for="(tb, index) in allTypeBoisson"
                        :value="tb.code"
                        :key="index"
                    >
                        {{ tb.label }}
                    </option>
                </select>
                <div
                    class="col-span-4 indent-4 border animate-pulse bg-white"
                    v-else
                ></div>

                <input
                    type="number"
                    class="
                        col-span-4
                        pl-5
                        border
                        focus:shadow focus:outline-none
                    "
                    placeholder="Budget ..."
                    v-model="budget"
                />
                <button
                    class="border rounded-r-lg bg-[#FCD34D]"
                    style="width: 54px"
                    @click="OnSearch"
                >
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="grid grid-cols-10" v-if="menu">
                <div class="col-start-2 col-span-8 bg-white p-3">
                    <div class="grid grid-rows-2">
                        <div class="flex flex-row w-full justify-between">
                            <div class="h-10">Happy Hour</div>
                            <input
                                class="checked:bg-[#FCD34D]"
                                type="checkbox"
                                v-model="happy_hour"
                            />
                        </div>
                        <div class="flex flex-row w-full justify-between">
                            <div>Nombre de boisson par bar</div>
                            <input type="number" v-model="nb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Detail-->
        <div class="posd z-1 bg-white rounded-l-lg">
            <detail
                :bar="barDetail"
                @close="closeDetail"
                v-if="detail"
            ></detail>
        </div>
        <!--Footer-->
        <div class="absolute bottom-0 z-1 w-full h-24 flex items-end">
            <div class="w-full flex flex-row items-end">
                <div class="h-8 w-24 bg-white"></div>
                <img
                    src="../assets/logo.png"
                    class="rounded-t-lg bg-white logo"
                />
                <div class="w-full flex flex-row-reverse bg-white">
                    <div class="pr-2">
                        Map data &copy;
                        <a href="https://www.openstreetmap.org/copyright"
                            >OpenStreetMap</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carte from "./Carte.vue";
import axios from "axios";
import GetBaseApiUrl from "../library/GetBaseApiUrl";
import Detail from "./Detail.vue";

export default {
    props: {
        info: {
            type: Object,
            required: true,
        },
    },
    components: { Carte, Detail },
    data() {
        return {
            bars: [],
            type_boisson: 1,
            budget: 0,
            happy_hour: false,
            nb: 1,
            barDetail: {},
            detail: false,
            dataReady: false,
            allTypeBoisson: [],
            menu: false,
        };
    },
    methods: {
        findBars() {
            let baseURL = GetBaseApiUrl();
            let params = {
                type_boisson: this.type_boisson,
                budget: this.budget,
                happy_hour: this.happy_hour,
                nb: this.nb,
            };

            axios
                .get("/barathon", {
                    baseURL: baseURL,
                    params: params,
                })
                .then((response) => {
                    if (response) {
                        this.bars = response.data;
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        },
        OnReady() {
            this.findBars();
        },
        OnClickMarker(e) {
            if (e.barId != null) {
                this.displayDetails(e.barId);
            }
        },
        displayDetails(barId) {
            let bar = this.findBar(barId);
            if (bar != null) {
                this.barDetail = bar;
                this.detail = true;
            }
        },
        findBar(barId) {
            for (let bar of this.bars) {
                if (bar.id == barId) {
                    return bar;
                }
            }
            return null;
        },
        closeDetail() {
            this.detail = false;
        },
        OnSearch() {
            if (this.budget == "") {
                this.budget = 0;
            }
            this.findBars();
        },
        OnOffMenu() {
            this.menu = !this.menu;
        },
    },
    mounted() {
        this.type_boisson = this.info.type_boisson;
        this.budget = this.info.budget;

        let baseURL = GetBaseApiUrl();

        axios
            .get("/boissons/type_boissons", { baseURL: baseURL })
            .then((response) => {
                if (response) {
                    for (var tb of response.data) {
                        let type = {
                            label: tb.nom,
                            code: tb.id,
                        };

                        this.allTypeBoisson.push(type);
                    }

                    this.dataReady = true;
                }
            })
            .catch((e) => {
                console.error(e);
            });

        this.findBars();
    },
};
</script>

<style scoped>
.logo {
    height: 60px;
}
.posd {
    position: absolute;
    right: 0px;
    top: 60px;
}
.posr {
    position: absolute;
    left: 50px;
    top: 150px;
}
/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}

/* Chrome */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Opéra*/
input::-o-inner-spin-button,
input::-o-outer-spin-button {
    -o-appearance: none;
    margin: 0;
}
</style>