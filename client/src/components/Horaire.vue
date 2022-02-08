<template>
    <div class="horaire">
        <table>
            <tr v-for="value in cleanH" :key="value">
                <td>
                    <b>{{ value.day }}</b>
                </td>
                <td class="pl-1">{{ value.matin }} {{ value.soir }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    el: "#Horaire",
    props: {
        Horaire: {
            type: Object,
            require: true,
        },
    },
    data() {},
    computed: {
        cleanH() {
            if (typeof this.Horaire == "string") {
                return JSON.parse(this.Horaire);
            } else {
                return this.Horaire;
            }
        },
    },
};
</script>

