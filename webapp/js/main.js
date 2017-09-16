// Setup Webcam
// Webcam.attach( '#camera-view' );

// function take_snapshot() {
//     Webcam.snap( function(data_uri) {
//         document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
//     } );
// }


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
            if (rightmostRect === undefined || (rect.x > rightmostRect.x ) ) {
                rightmostRect = rect;
            }

            console.log('TEST');

          // context.font = '11px Helvetica';
          // context.fillStyle = "#fff";
          // context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          // context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        });

          //   context.strokeStyle = "#000000"
          // if(rect === rightmostRect) {
            context.strokeStyle = "#FF0000"
          // }
          context.lineWidth= 3;
          context.strokeRect(rightmostRect.x, rightmostRect.y, rightmostRect.width, rightmostRect.height);
      });
     initGUIControllers(tracker);