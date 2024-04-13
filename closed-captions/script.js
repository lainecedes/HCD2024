document.addEventListener("DOMContentLoaded", function(event) { 
    addClassesToCaptions();
});


function addClassesToCaptions() {
    var paragraphs = document.querySelectorAll('#closed-captions p');
    var video = document.getElementById('video');
    var stairEffectRemoved = false; // Flag to track whether stair-effect class has been removed

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
    
        // Toggle 'stair-effect' class for lines 9, 10, and 11 when caption 8 or 11 is playing
        if (highlightIndex === 8 || highlightIndex === 12) {
            document.getElementById('line-9').classList.add('stair-effect');
            document.getElementById('line-10').classList.add('stair-effect');
            document.getElementById('line-11').classList.add('stair-effect');

            // Reset the flag when stair-effect class is added
            stairEffectRemoved = false;
        } 
        
        // Remove 'stair-effect' class for lines 9, 10, and 11 if line 12 is playing
        if (highlightIndex === 12 && !stairEffectRemoved) {
            document.getElementById('line-9').classList.remove('stair-effect');
            document.getElementById('line-10').classList.remove('stair-effect');
            document.getElementById('line-11').classList.remove('stair-effect');

            // Set the flag to true to prevent re-removal of stair-effect class
            stairEffectRemoved = true;
        }
    });
}
