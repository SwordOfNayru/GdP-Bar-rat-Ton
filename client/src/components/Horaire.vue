<template>
    <div class="horaire">
        <table>
            <tr>
                <td>Horaires</td>
                <div v-for="value in Horaire" :key="value">
                    <td>
                        <b>{{ value.day }}</b>
                    </td>
                    <td>{{ value.matin }} {{ value.soir }}</td>
                </div>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    el: "#Horaire",
    props: {
        msg: String,
    },
    data() {
        return {
            Horaire: {
                lundi: {
                    day: "lundi",
                    matin: "11h-12h",
                    soir: "18h-2h",
                },
                mardi: {
                    day: "mardi",
                    matin: "11h-12h",
                    soir: "18h-2h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "11h-12h",
                    soir: "18h-2h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "11h-12h",
                    soir: "18h-2h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "11h-12h",
                    soir: "18h-2h",
                },
            },
        };
    },
};
</script>
<style scoped>
#horaire {
    margin-right: 50%;
}
</style>
