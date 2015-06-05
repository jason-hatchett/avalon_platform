if (Meteor.isClient) {

  Session.set('players', [])
  Session.set('roles', [])
  Session.set('assigns', [])

  Template.body.helpers({

    cards:[
      {id: 1 , role:'Merlin'                  , evil:false},
      {id: 2 , role:'Percival'                , evil:false},
      {id: 3 , role:'Loyal Servant of Arthur' , evil:false}, 
      {id: 4 , role:'Loyal Servant of Arthur' , evil:false},
      {id: 5 , role:'Loyal Servant of Arthur' , evil:false},
      {id: 6 , role:'Loyal Servant of Arthur' , evil:false},
      {id: 7 , role:'Loyal Servant of Arthur' , evil:false},
      {id: 8 , role:'Assassin'                , evil:true},
      {id: 9 , role:'Morgana'                 , evil:true},
      {id: 10, role:'Mordred'                 , evil:true},
      {id: 11, role:'Oberon'                  , evil:true},
      {id: 12, role:'Minion of Mordred'       , evil:true},
      {id: 13, role:'Minion of Mordred'       , evil:true},
      {id: 14, role:'Minion of Mordred'       , evil:true}
    ],

    players: function (){
      return Session.get('players')
    },

    assigns: function(){
      return Session.get('assigns')
    }

    //change css of cards based on selected?
    //form for all player names (in order)
    //push selected cards into array
    //randomize
    //assign all roles
    //Display players, on click show role and knowledge 
    //####You are Percival. Carly and Cameron appear to be Merlin####
  });

  Template.body.events({
    "keypress .players": function (event) {
    // This function is called when enter is clicked
      if (event.charCode == 13){
        var array = Session.get('players')
        array.push(event.target.value);
        Session.set('players', array)
        // Clear text
        event.target.value = "";
      }
    },
    "click .bttn": function (event){
      var r = Session.get('roles');
      var p = Session.get('players');
      var as= [];
      //check if player count equals roles count
      if (r.length == p.length){
         //randomize and display
         r = shuffle(r);
         p = shuffle(p);
         for (var i = 0; i < r.length; i++){
          as.push({"player": p[i], "role": r[i]})
         }
         Session.set('assigns', as);
      }
    }

  });

  Template.roles.events({
  "change":function(event){
    var array = Session.get('roles');
    var item = event.target.getAttribute('iden');
    var idx = array.indexOf(item)
    if (idx < 0){
      array.push(item);
      Session.set('roles', array);
    }
    else{
      array.splice(idx, 1);
      Session.set('roles', array);
    }
  }
  })

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
    return array;
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}