$(document).ready(function(){
  $('.carousel').carousel({
   indicators :  true,
  });
});

$(document).ready(function(){
  $('.parallax').parallax();
});



// Modal code
  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
        



//   $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));
          


//   $(".col").hover(function() {
//     $(this).next('.redirect-button').fadeIn();
//   }, function() {
//     $(this).next('.redirect-button').fadeOut();
//   });



                          // SNAKE GAME 


                          var canvas, ctx, gameControl, gameActive;
                          // render X times per second
                          var x = 8;
                          
                          const CANVAS_BORDER_COLOUR = 'black';
                          const CANVAS_BACKGROUND_COLOUR = "white";
                          const SNAKE_COLOUR = 'lightgreen';
                          const SNAKE_BORDER_COLOUR = 'darkgreen';
                    
                    
                          window.onload = function() {
                            canvas = document.getElementById("canvas");
                            ctx = canvas.getContext("2d");
                    
                            document.addEventListener("keydown", keyDownEvent);
                    
                            gameControl = startGame(x);
                          };
                          
                          /* function to start the game */
                          function startGame(x) {
                              // setting gameActive flag to true
                              gameActive = true;
                              document.getElementById("game-status").innerHTML = "<small>Game Started</small>";
                              document.getElementById("game-score").innerHTML = "";
                              return setInterval(draw, 1000 / x);
                          }
                          
                          function pauseGame() {
                              // setting gameActive flag to false
                              clearInterval(gameControl);
                              gameActive = false;
                              document.getElementById("game-status").innerHTML = "<small>Game Paused</small>";
                          }
                          
                          function endGame(x) {
                              // setting gameActive flag to false
                              clearInterval(gameControl);
                              gameActive = false;
                              document.getElementById("game-status").innerHTML = "<small>Game Over</small>";
                              document.getElementById("game-score").innerHTML = "<h1>Score: " + x + "</h1>";
                          }
                    
                          // game world
                          var gridSize = (tileSize = 20); // 20 x 20 = 400
                          var nextX = (nextY = 0);
                    
                          // snake
                          var defaultTailSize = 3;
                          var tailSize = defaultTailSize;
                          var snakeTrail = [];
                          var snakeX = (snakeY = 10);
                    
                          // apple
                          var appleX = (appleY = 15);
                    
                          // draw
                          function draw() {
                            // move snake in next pos
                            snakeX += nextX;
                            snakeY += nextY;
                    
                            // snake over game world?
                            if (snakeX < 0) {
                              snakeX = gridSize - 1;
                            }
                            if (snakeX > gridSize - 1) {
                              snakeX = 0;
                            }
                    
                            if (snakeY < 0) {
                              snakeY = gridSize - 1;
                            }
                            if (snakeY > gridSize - 1) {
                              snakeY = 0;
                            }
                    
                            //snake bite apple?
                            if (snakeX == appleX && snakeY == appleY) {
                              tailSize++;
                    
                              appleX = Math.floor(Math.random() * gridSize);
                              appleY = Math.floor(Math.random() * gridSize);
                            }
                    
                            //  Select the colour to fill the canvas
                          ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
                          //  Select the colour for the border of the canvas
                          ctx.strokestyle = CANVAS_BORDER_COLOUR;
                    
                          // Draw a "filled" rectangle to cover the entire canvas
                          ctx.fillRect(0, 0, canvas.width, canvas.height);
                          // Draw a "border" around the entire canvas
                          ctx.strokeRect(0, 0, canvas.width, canvas.height);
                    
                            // paint snake
                            ctx.fillStyle = SNAKE_COLOUR;
                            ctx.strokestyle = SNAKE_BORDER_COLOUR;
                            for (var i = 0; i < snakeTrail.length; i++) {
                              ctx.fillRect(
                                snakeTrail[i].x * tileSize,
                                snakeTrail[i].y * tileSize,
                                tileSize,
                                tileSize
                              );
                              
                              ctx.strokeRect(snakeTrail[i].x * tileSize , snakeTrail[i].y* tileSize, tileSize, tileSize);
                    
                              //snake bites it's tail?
                              if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
                                if(tailSize > 3) {
                                    endGame(tailSize);
                                }
                                tailSize = defaultTailSize;  
                              }
                            }
                    
                            // paint apple
                            ctx.fillStyle = "red";
                            ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);
                    
                            //set snake trail
                            snakeTrail.push({ x: snakeX, y: snakeY });
                            while (snakeTrail.length > tailSize) {
                              snakeTrail.shift();
                            }
                          }
                    
                          // input
                          function keyDownEvent(e) {
                            switch (e.keyCode) {
                              case 37:
                                nextX = -1;
                                nextY = 0;
                                break;
                              case 38:
                                nextX = 0;
                                nextY = -1;
                                break;
                              case 39:
                                nextX = 1;
                                nextY = 0;
                                break;
                              case 40:
                                nextX = 0;
                                nextY = 1;
                                break;
                              case 32:
                                if(gameActive == true) {
                                    pauseGame();
                                }
                                else {
                                    gameControl = startGame(x);
                                }
                                break;
                            }
                          }


                          //END SNAKE
                          



 var Elevator = (function() {

  'use strict';

  // Elements
  var body = null;

  // Scroll vars
  var animation = null;
  var duration = null; // ms
  var customDuration = false;
  var startTime = null;
  var startPosition = null;
  var elevating = false;

  var mainAudio;
  var endAudio;

  /**
   * Utils
   */

  // Soft object augmentation
  function extend( target, source ) {
      for ( var key in source ) {
          if ( !( key in target ) ) {
              target[ key ] = source[ key ];
          }
      }
      return target;
  };

  // Thanks Mr Penner - http://robertpenner.com/easing/
  function easeInOutQuad( t, b, c, d ) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };

  function extendParameters(options, defaults){
      for(var option in defaults){
          var t = options[option] === undefined && typeof option !== "function";
          if(t){
              options[option] = defaults[option];
          }
      }
      return options;
  }

  /**
   * Main
   */

  // Time is passed through requestAnimationFrame, what a world!
  function animateLoop( time ) {
      if (!startTime) {
          startTime = time;
      }

      var timeSoFar = time - startTime;
      var easedPosition = easeInOutQuad(timeSoFar, startPosition, -startPosition, duration);                        
      
      window.scrollTo(0, easedPosition);

      if( timeSoFar < duration ) {
          animation = requestAnimationFrame(animateLoop);
      } else {
          animationFinished();
      }
 };

//            ELEVATE!
//              /
//         ____
//       .'    '=====<0
//       |======|
//       |======|
//       [IIIIII[\--()
//       |_______|
//       C O O O D
//      C O  O  O D
//     C  O  O  O  D
//     C__O__O__O__D
//    [_____________]
  function elevate() {

      if( elevating ) {
          return;
      }

      elevating = true;
      startPosition = (document.documentElement.scrollTop || body.scrollTop);
      
      // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
      if( !customDuration ) {
          duration = (startPosition * 1.5);
      }

      requestAnimationFrame( animateLoop );

      // Start music!
      if( mainAudio ) {
          mainAudio.play();
      }
  }

  function resetPositions() {
      startTime = null;
      startPosition = null;
      elevating = false;
  }

  function animationFinished() {
      
      resetPositions();

      // Stop music!
      if( mainAudio ) {
          mainAudio.pause();
          mainAudio.currentTime = 0;
      }

      if( endAudio ) {
          endAudio.play();
      }
  }

  function onWindowBlur() {

      // If animating, go straight to the top. And play no more music.
      if( elevating ) {

          cancelAnimationFrame( animation );
          resetPositions();

          if( mainAudio ) {
              mainAudio.pause();
              mainAudio.currentTime = 0;
          }

          window.scrollTo(0, 0);
      }
  }

  //@TODO: Does this need tap bindings too?
  function bindElevateToElement( element ) {
      element.addEventListener('click', elevate, false);
  }

  function main( options ) {

      // Bind to element click event, if need be.
      body = document.body;

      var defaults = {
          duration: undefined,
          mainAudio: false,
          endAudio: false,
          preloadAudio: true,
          loopAudio: true,
      };

      options = extendParameters(options, defaults);
      
      if( options.element ) {
          bindElevateToElement( options.element );
      }

      if( options.duration ) {
          customDuration = true;
          duration = options.duration;
      }

      window.addEventListener('blur', onWindowBlur, false);

      // If the browser doesn't support audio, stop here!
      if ( !window.Audio ) {
          return;
      }

      if( options.mainAudio ) {
          mainAudio = new Audio( options.mainAudio );
          mainAudio.setAttribute( 'preload', options.preloadAudio ); 
          mainAudio.setAttribute( 'loop', options.loopAudio );
      }

      if( options.endAudio ) {
          endAudio = new Audio( options.endAudio );
          endAudio.setAttribute( 'preload', 'true' );
      }
  }

  return extend(main, {
      elevate: elevate
  });
})();


// trigger it

var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
element: elementButton,
// mainAudio from here:
// https://github.com/tholman/elevator.js
// Audio in the Demo (sourced from BenSound) is licenced under Creative Commons.
mainAudio: 'https://weichiachang.github.io/Easter-egg/images/music/elevator.mp3',
// endAudio from here:
// https://www.findsounds.com/ISAPI/search.dll?keywords=ding+dinging
endAudio:  'https://inventwithpython.com/pickup.wav'
});