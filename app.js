/**
 * Toggles the opacity of the selected circle representing an LED, then
 * passes off to toggleLight() to change the LED state on the actual
 * arduino101
 */
function lightIt(circleID)
{
 toggleLight(circleID);
};

/**
  * takes the chosen "circle" and writes the appropriate data
  * to the ledservice characteristics.
  */
var toggleLight = function( circleID )
{
  if (circleID == "circle1" ) {
   led._writeCharacteristic(led.ledUUID, new Uint8Array([4]))
   .then(() => console.log('wrote 4'))
   .catch(error => {console.log('write error');
   });
  }
  else if (circleID == "circle2" ){
    led._writeCharacteristic(led.ledUUID, new Uint8Array([3]))
   .then(() => console.log('wrote 3'))
   .catch(error => {console.log('write error');
   });
  }
  else if (circleID == "circle3") {
    led._writeCharacteristic(led.ledUUID, new Uint8Array([2]))
   .then(() => console.log('wrote 2'))
   .catch(error => {console.log('write error');
   })
  }
  else{
    led._writeCharacteristic(led.ledUUID, new Uint8Array([1]))
   .then(() => console.log('wrote 1'))
   .catch(error => {console.log('write error');
   });
  }
};

/**
  * The Web Bluetooth API specifies that a user action like a click is needed to
  * initiate a connection.
  */
function bleConnect(buttonID) {
  var thisButton = document.getElementById(buttonID);
  led.connect()
      .then(() => console.log('connected'))
      .catch(error => { console.log('connect error!'); });

};
