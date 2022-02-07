<template>
    <div form="relative" class="flex flex-row" ref="racine">
        <vue-select
            placeholder="Boisson ..."
            :custom-label="selectDisplay"
            :options="allTypeBoisson"
            v-if="dataReady"
        ></vue-select>
        <input
            type="number"
            class="w-96 pr-8 pl-5 border focus:shadow focus:outline-none"
            placeholder="Budget.."
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
import vSelect from "vue-multiselect";
import axios from "axios";
import GetBaseApiUrl from "../library/GetBaseApiUrl";
//import "../../node_modules/vue-select/dist/vue-select.css";

export default {
    components: {
        "vue-select": vSelect,
    },
    data() {
        return {
            budget: null,
            typeBoisson: {},
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
        selectDisplay({ label }) {
            return label;
        },
    },
    mounted() {
        let baseURL = GetBaseApiUrl();
        console.log(baseURL);

        axios
            .get("/boissons/type_boissons", { baseURL: baseURL })
            .then((response) => {
                if (response) {
                    for (var tb of response.data) {
                        this.allTypeBoisson.push({
                            label: tb.nom,
                            code: tb.id,
                        });
                    }

                    console.log(this.allTypeBoisson);
                    this.dataReady = true;
                    this.$refs.racine.classList.remove("animate-pulse");
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