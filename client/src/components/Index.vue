<!-- html -->
<template>
    <!-- Insertion fond écran-->
    <div class="bg-local" style="background-image: url(https://images0.persgroep.net/rcs/S-I8OJXD85BBSRBi-L66YTNe34w/diocontent/177043474/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8)">
        <!-- création de la grille 1/2 écran-->
        <div class="grid grid-rows-2">

            <!-- Utilisation de la première moitié de la grille 1/2 écran-->
            <div class="row-start-1">
                <div class="grid grid-cols-6 grid-rows-2">
                    <!-- Logo + texte --> 
                    <div class="col-start-2 col-span-5 flex justify-first">
                        <img class="w-22 h-22 " src="../assets/Logo.png"> 
                        <p class="font-mono text-4xl place-items-center pt-32">
                            Bar-rat-ton
                        </p>
                    </div>

                    <!-- Placer la barre de recherche -->
                    <div class="row-start-2 col-start-2 col-span-5 pt-10">
                        <img src="../assets/SearchBar_component.png"> 
                    </div>
                </div>
            </div>

            <!-- Utilisation de la seconde moitié de la grille 1/2 écran-->
            <div class="row-start-2">
                <!-- Case x3 presentation avec texte -->
                <div class="flex justify-around">
                    <div class="bg-white w-80 border-1 shadow-2xl " >
                        <img src="../assets/Image_1_Home.png">
                        <p class="font-mono text-center text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc arcu, venenatis eu sem eu, finibus tempus risus. Pellentesque at dui est. Aenean eu nunc rutrum, interdum dolor ut, fringilla ante. Sed cursus consequat urna, quis malesuada urna suscipit at.
                        </p>
                    </div>

                    <div class="bg-white w-80 border-1 shadow-2xl" >
                        <img src="../assets/Image_2_Home.png">
                        <p class="font-mono text-center text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc arcu, venenatis eu sem eu, finibus tempus risus. Pellentesque at dui est. Aenean eu nunc rutrum, interdum dolor ut, fringilla ante. Sed cursus consequat urna, quis malesuada urna suscipit at.
                        </p>
                    </div>

                    <div class="bg-white w-80 border-1 shadow-2xl">
                        <img src="../assets/Image_3_Home.png">
                        <p class="font-mono text-center text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc arcu, venenatis eu sem eu, finibus tempus risus. Pellentesque at dui est. Aenean eu nunc rutrum, interdum dolor ut, fringilla ante. Sed cursus consequat urna, quis malesuada urna suscipit at.
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only, CSS -->
<style>

</style>