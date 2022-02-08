<template>
    <div id="map" ref="map"></div>
</template>

<script>
const L = require("leaflet");

export default {
    props: {
        bars: {
            type: Array,
            require: false,
        },
    },
    data() {
        return {
            map: null,
            markers: [],
        };
    },
    methods: {
        AddPoint(bar) {
            var marker = L.marker([bar.coordN, bar.coordE]);

            marker.bar = bar;

            marker.addTo(this.map);

            marker.on("click", this.OnClickPoint);

            this.markers.push(marker);
        },
        ClearPoint() {
            if (this.markers.length > 0) {
                for (let marker of this.markers) {
                    if (marker._leaflet_id) {
                        this.map.removeLayer(marker);
                    }
                }

                this.markers = [];
            }
        },
        OnClickPoint(e) {
            this.$emit("detail", { barId: e.target.bar.id });
        },
    },
    mounted() {
        this.map = L.map("map").setView(
            [49.89790300208506, 2.3005742082141315],
            18
        );

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 17,
            minZoom: 17,
            //id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            //accessToken:
            //    "pk.eyJ1Ijoic3dvcmRvZm5heXJ1IiwiYSI6ImNrejhveTdrMDFsMGYyb3J4bnY2NXAyM3cifQ.GrT0Y8mioqGs8wpppRUecQ",
        }).addTo(this.map);

        this.$emit("Ready");
    },
    watch: {
        bars: function (newValue) {
            this.ClearPoint();
            for (let bar of newValue) {
                this.AddPoint(bar);
            }
        },
    },
};
</script>

<style>
</style>