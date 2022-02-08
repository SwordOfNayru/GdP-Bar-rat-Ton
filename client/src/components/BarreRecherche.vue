<template>
    <div form="relative" class="flex flex-row" ref="racine">
        <select
            class="w-80 indent-4 border rounded-l-lg"
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
        <div class="w-80 border pr-8 animate-pulse bg-white" v-else></div>
        <input
            type="number"
            class="w-80 pr-8 pl-5 border focus:shadow focus:outline-none"
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
</template>

<script>
import axios from "axios";
import GetBaseApiUrl from "../library/GetBaseApiUrl";

export default {
    components: {},
    data() {
        return {
            budget: null,
            typeBoisson: 1,
            dataReady: false,
            allTypeBoisson: [],
        };
    },
    methods: {
        GetTypeBoisson() {},
        OnSearch() {
            let i = {
                budget: this.budget,
                typeBoisson: this.typeBoisson,
            };

            this.$emit("search", i);
        },
        selectDisplay({ label }) {
            return label;
        },
    },
    mounted() {
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
    },
};
</script>

<style scoped>
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