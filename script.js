function closeNav() {
    document.getElementById("mySidenav").style.left = "-100%";
  }

function openNav() {
    document.getElementById("mySidenav").style.left = "0%";
  }
  
//   document.getElementById('blok1').addEventListener('click', function() {
//     console.log('Section clicked!'); // Toegevoegd voor debugging
//     window.location.href = '/naaistreek.html'; // gebruik de relatieve URL zonder de punt
// });


  var WIDTH = 3000;
      var HEIGHT = 3000;
      var NUMBER = 200;

      var stage = new Konva.Stage({
        container: 'container',
        width: WIDTH,
        height: HEIGHT,
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      function generateNode() {
        return new Konva.Circle({
          x: WIDTH * Math.random(),
          y: HEIGHT * Math.random(),
          radius: 50,
          fill: 'red',
          stroke: 'black',
        });
      }

      for (var i = 0; i < NUMBER; i++) {
        layer.add(generateNode());
      }
    