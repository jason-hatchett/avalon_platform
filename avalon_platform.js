if (Meteor.isClient) {

  Session.set('players', [])

  Template.body.helpers({

    cards:[
      {role:'Merlin'                  , evil:false, selected:false},
      {role:'Percival'                , evil:false, selected:false},
      {role:'Loyal Servant of Arthur' , evil:false, selected:false}, 
      {role:'Loyal Servant of Arthur' , evil:false, selected:false},
      {role:'Loyal Servant of Arthur' , evil:false, selected:false},
      {role:'Loyal Servant of Arthur' , evil:false, selected:false},
      {role:'Loyal Servant of Arthur' , evil:false, selected:false},
      {role:'Assassin'                , evil:true , selected:false},
      {role:'Morgana'                 , evil:true , selected:false},
      {role:'Mordred'                 , evil:true , selected:false},
      {role:'Oberon'                  , evil:true , selected:false},
      {role:'Minion of Mordred'       , evil:true , selected:false},
      {role:'Minion of Mordred'       , evil:true , selected:false},
      {role:'Minion of Mordred'       , evil:true , selected:false}
    ],

    players: function (){
      return Session.get('players')
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
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
