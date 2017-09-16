// Setup Webcam
// Webcam.attach( '#camera-view' );

// function take_snapshot() {
//     Webcam.snap( function(data_uri) {
//         document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
//     } );
// }

var detectionCounter = 0;

 var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      tracking.ColorTracker.registerColor('black', function(r, g, b) {
      if (r < 25 && g < 25 && b < 25) {
        return true;
      }
      return false;
    });


      var tracker = new tracking.ColorTracker(['black']);


      tracking.track('#video', tracker, { camera: true });
      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        var rightmostRect;
        event.data.forEach(function(rect) {
            var area = rect.width * rect.height;
            // console.log(area)
            // if (area > 100 ){
              // if (rightmostRect === undefined || (rect.x > rightmostRect.x ) ) {
              //   rightmostRect = rect;
              // }
            // }
             if (rect.x > 300 && rect.y< 150 && area > 12500 ){
              context.fillText('Camera [00:17:88:70:A2:2D]', rect.x + 5, rect.y - 5);
              context.strokeRect(rect.x, rect.y, rect.width, rect.height);

              detectionCounter++;
              console.log(detectionCounter);
              if (detectionCounter > 50) {
                setTimeout(showDetailImage, 2000);
              }
            }

            // if (rightmostRect === undefined || (area > (rightmostRect.x * rightmostRect.y)) ) {
            //     rightmostRect = rect;
            // }
        });

          context.fillStyle = "#fff";
          context.font = '11px Helvetica';
          context.strokeStyle = "#00FF00"
          context.lineWidth= 3;
          // if (rightmostRect !== undefined){
          //   context.strokeRect(rightmostRect.x, rightmostRect.y, rightmostRect.width, rightmostRect.height);
          // }
      });
