document.addEventListener("DOMContentLoaded", function(event) { 
    addClassesToCaptions();
});


// Use currentTime for precise styling with gif animations
// Use highlightedIndex for caption styling

function addClassesToCaptions() {
    var paragraphs = document.querySelectorAll('#closed-captions p');
    var video = document.getElementById('video');
    var stairEffectRemoved = false;
    var seriousEffectRemoved = false;
    var genevaEffectRemoved = false;

    video.addEventListener('timeupdate', function() {
        var currentTime = video.currentTime;
        var highlightIndex = -1; // Initialize index for highlighted paragraph
    
        // Find the index of the currently highlighted paragraph
        for (var i = 0; i < captions.length; i++) {
            var startTime = parseFloat(captions[i][0]);
            var endTime = parseFloat(captions[i][1]);
    
            if (currentTime >= startTime && currentTime < endTime) {
                highlightIndex = i;
                break; // Exit loop once the correct paragraph is found
            }
        }
    
        // Toggle 'highlighted' class for all paragraphs
        for (var j = 0; j < paragraphs.length; j++) {
            paragraphs[j].classList.toggle('highlighted', j === highlightIndex);
        }
    
        // Stair effect: Ooooh, she's royal
        if (highlightIndex === 9 || highlightIndex === 12) {
            document.getElementById('line-10').classList.add('stair-effect');
            document.getElementById('line-11').classList.add('stair-effect');
            document.getElementById('line-12').classList.add('stair-effect');

            // reset
            stairEffectRemoved = false;
        } 
        
        // Remove 'stair-effect' class for lines 9, 10, and 11 if line 12 is playing
        if (highlightIndex === 12 && !stairEffectRemoved) {
            document.getElementById('line-10').classList.remove('stair-effect');
            document.getElementById('line-11').classList.remove('stair-effect');
            document.getElementById('line-12').classList.remove('stair-effect');

            // reset
            stairEffectRemoved = true;
        }

        // Serious effect: Bitch, the game changed
        if (highlightIndex === 18 || highlightIndex === 20) {
            document.getElementById('line-19').classList.add('serious-effect');
            document.getElementById('line-20').classList.add('serious-effect');

            // reset
            seriousEffectRemoved = false;
        }

        // Remove 'serious-effect' class for lines 18 and 19 if line 20 is playing
        if (highlightIndex === 20 && !seriousEffectRemoved) {
            document.getElementById('line-19').classList.remove('serious-effect');
            document.getElementById('line-20').classList.remove('serious-effect');

            // reset
            seriousEffectRemoved = true;
        }


        // Geneva, effects.
        if (highlightIndex === 54 || highlightIndex === 60) {
            document.getElementById('line-55').classList.add('geneva');
            document.getElementById('line-56').classList.add('geneva');
            document.getElementById('line-57').classList.add('geneva');
            document.getElementById('line-58').classList.add('geneva');
            document.getElementById('line-59').classList.add('geneva');
            document.getElementById('line-60').classList.add('geneva');

            // reset
            genevaEffectRemoved = false;
        } 
        // Remove 'geneva' class for lines 55, 56, 57, 58, 59, 60 if line 60 is playing
        if (highlightIndex === 61 && !genevaEffectRemoved) {
            document.getElementById('line-55').classList.remove('geneva');
            document.getElementById('line-56').classList.remove('geneva');
            document.getElementById('line-57').classList.remove('geneva');
            document.getElementById('line-58').classList.remove('geneva');
            document.getElementById('line-59').classList.remove('geneva');
            document.getElementById('line-60').classList.remove('geneva');

            // reset
            genevaEffectRemoved = true;
        }
        


        // gif visibility
        // Pizazz effect with royal text
         var pizazzGif = document.getElementById('pizazz-gif');
         pizazzGif.classList.toggle('hidden', highlightIndex < 10 || highlightIndex >= 12);
 
         //line 4: Plasma laughing
         var surprisedGif = document.getElementById('surprised-gif');
         surprisedGif.classList.toggle('hidden', highlightIndex < 4 || highlightIndex >= 5);

        // Twirl gif for Plasma introduction
        var twirlGif = document.getElementById('twirl-gif');
        twirlGif.classList.toggle('hidden', !(currentTime >= 27.9 && currentTime < 28.85));

        // Hershii being surprised at the beginning
        var hershiiSurprised = document.getElementById('exclamation-gif-1');
        hershiiSurprised.classList.toggle('hidden', !(currentTime >= 2.5 && currentTime < 3.06));

        // Hershii being surprised at the beginning
        var hershiiLaughing = document.getElementById('surprised-wide-1');
        hershiiLaughing.classList.toggle('hidden', !(currentTime >= 66.35 && currentTime < 67.10));

        // Plasma being surprised
        var plasmaSurprised = document.getElementById('exclamation-gif-2');
        plasmaSurprised.classList.toggle('hidden', !(currentTime >= 76.5 && currentTime < 77));

        // Geneva heel stomp
        var genevaHeel = document.getElementById('stomp');
        genevaHeel.classList.toggle('hidden', !(currentTime >= 82.3 && currentTime < 82.8));

         // Plasma being surprised again
         var plasmaSurprisedAgain = document.getElementById('exclamation-gif-3');
         plasmaSurprisedAgain.classList.toggle('hidden', !(currentTime >= 83.8 && currentTime < 84.3));

         // Geneva sparkles
         var genevaSparkle = document.getElementById('sparkles');
         genevaSparkle.classList.toggle('hidden', !(currentTime >= 94.8 && currentTime < 96.1));







        // Music aura

        // Plasma 1900's Intro music
        document.documentElement.classList.toggle('plasma-music', (currentTime >= 0.2 && currentTime < 11.3));

        // Bitch, the game changed aura
        document.documentElement.classList.toggle('changed', (currentTime >= 37 && currentTime < 40.2));

        // Mexican Music
        document.documentElement.classList.toggle('mexican-music', (currentTime >= 82.3 && currentTime < 93.5));

    });
}
