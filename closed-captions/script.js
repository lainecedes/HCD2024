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


        // gif visibility
        // Pizazz effect with royal text
         var pizazzGif = document.getElementById('pizazz-gif');
         pizazzGif.classList.toggle('hidden', highlightIndex < 10 || highlightIndex >= 12);
 
         //line 4: Plasma laughing
         var surprisedGif = document.getElementById('surprised-gif');
         surprisedGif.classList.toggle('hidden', highlightIndex < 4 || highlightIndex >= 5);

        // Twirl gif for Plasma introduction
        var twirlGif = document.getElementById('twirl-gif');
        twirlGif.classList.toggle('hidden', !(currentTime >= 27.9 && currentTime < 28.95));



        // Music aura

        // Plasma 1900's Intro music
        document.documentElement.classList.toggle('plasma-music', (currentTime >= 0.2 && currentTime < 11.3));

        // Bitch, the game changed aura
        document.documentElement.classList.toggle('changed', (currentTime >= 37 && currentTime < 40.2));
    });

}
