<template>
    <div form="relative" class="animate-pulse" ref="racine">
        <vue-select :options="allTypeBoisson"></vue-select>
        <input
            type="number"
            class="
                h-14
                w-96
                pr-8
                pl-5
                border
                z-0
                focus:shadow focus:outline-none
            "
            placeholder="Budget.."
        />
        <button class="border rounded-r-lg bg-[#FCD34D]" @click="OnSearch">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
import vSelect from "vue-select";
import axios from "axios";
import GetBaseApiUrl from "../library/GetBaseApiUrl";

export default {
    components: {
        "vue-select": vSelect,
    },
    data() {
        return {
            budget: null,
            typeBoisson: null,
            dataReady: false,
            allTypeBoisson: [],
        };
    },
    methods: {
        GetTypeBoisson() {},
        OnSearch() {
            this.$emit("search", {
                budget: this.budget,
                typeBoisson: this.typeBoisson,
            });
        },
    },
    mounted() {
        axios
            .get("/type_boisson", { baseURL: GetBaseApiUrl() })
            .then((response) => {
                if (response) {
                    for (var tb of response.data) {
                        this.allTypeBoisson.push({
                            label: tb.nom,
                            code: tb.id,
                        });
                    }

                    this.dataReady = true;
                    this.$refs.racine.classList.remove("animate-pulse");
                }
            })
            .error((e) => {
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