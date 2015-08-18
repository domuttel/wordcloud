// jQuery scripts
var canvas = document.getElementById('myCanvas');
$(document).on('ready', function() {
  console.log('sanity check!');
});

//submit Wordcloud
$(".submitWords").click(function(){
  collectWords();
});

$( "h1" ).css( "color", "white").css("font-size", "3em").css("margin-top", "50px").css("margin-bottom", "35px");

$( ".inputText" ).css("background-color", "rgba(0,0,0,0.6)").css("color", "white");

$(".submitWords").css("margin", "30px");

// collect words from input box
var collectWords = function(){
  var words = $(".inputText")[0].value;
  makeWordcloud(words);

};

// get word count from input to make word cloud
function makeWordcloud(input){
 var wordsArray = input.split(" ");

// word count to array
 var result = {};
 for (i = 0; i < wordsArray.length; i++) {
     if(wordsArray[i] in result){
       result[wordsArray[i]] += 1;
     }
     else {
       result[wordsArray[i]] = 1;
     }
 }
 drawWordCloud(result);
}

// draw on canvas
function drawWordCloud(wordCount){
  new_array = [];
    for (key in wordCount){
    current_array = [];
    current_array.push(key, wordCount[key]);
    new_array.push(current_array);
    }


// random: font-color
    // function color (string) {
    //   var hexArray = ["A","B","C","D","E","F","0","1","2","3","4","5","6"];
    //   colors = "#";
    //   for (var i = 0; i < 6; i++) {
    //      colors += hexArray[Math.floor( Math.random() * hexArray.length)];
    //    }
    //    return colors;
    // }

//random: background-color
    // function backgroundColor (string) {
    //   var hexArray = ["A","B","C","D","E","F","0","1","2","3","4","5","6"];
    //   bkColors = "#";
    //   for (var i = 0; i < 6; i++) {
    //      bkColors += hexArray[Math.floor( Math.random() * hexArray.length)];
    //    }
    //    return bkColors;
    // }

// random: font-family
    function fontFamily (string) {
      var fontsArray = ['Impact, Charcoal, sans-serif','"Arial Black", Gadget, sans-serif', 'Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif', '"Courier New", Courier, monospace'];
      font = "";
      font = fontsArray[Math.floor( Math.random() * fontsArray.length )];
  return font;
    }

// random: word-weight
    function fontFamily (string) {
      var fontsArray = ['Impact, Charcoal, sans-serif','"Arial Black", Gadget, sans-serif', 'Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif', '"Courier New", Courier, monospace'];
      font = "";
      font = fontsArray[Math.floor( Math.random() * fontsArray.length )];
  return font;
    }

// random: font-weight
    function fontWeight (string) {
      var weightArray = ['normal', 'bold', '600'];
      ftWeight = "";
      ftWeight = weightArray[Math.floor( Math.random() * weightArray.length )];
  return ftWeight;
    }

// random: shape of words
    function shape (string) {
      var shapeArray = ['circle', 'diamond', 'square', 'triangle-forward', 'triangle', 'triangle-upright', 'pentagon', 'star'];
      newShape = "";
      newShape = shapeArray[Math.floor( Math.random() * shapeArray.length )];
  return newShape;
    }

// random: weight-factor
    function weightFactor (string) {
      var weightArray = ['6','7','8','9','10','11','12','13','14','15','16','17','18'];
      newWeight = "";
      newWeight = weightArray[Math.floor( Math.random() * weightArray.length )];
  return newWeight;
    }

//JS Library
    WordCloud(document.getElementById('myCanvas'), {
       list: new_array,
       gridSize: Math.round(16 * canvas.width / 1024),
       weightFactor: weightFactor(),
       fontWeight: fontWeight(),
       fontFamily: fontFamily(),
       rotateRatio: 1,
       backgroundColor: 'rgba(0,0,0,0)',
       color: 'random-light',
       shape: shape(),
       wait: 0.0001, /*randomize*/
       minSize: 12

       });
}