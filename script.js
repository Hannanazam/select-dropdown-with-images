$(document).ready(function(){
  $("#social").select2({
   templateResult: formatState
  });
 });

let icons = {
  "Bumper": "https://i.imgur.com/50qd4Ub.png",
  "Roof": "https://i.imgur.com/lGOXYfV.png",
  "Door": "https://i.imgur.com/tSTGogW.png"
}
 
 function formatState (state) {
  if (!state.id) { return state.text; }
  console.log(state);
  var $state = $(
    `
    <div style="display: flex; align-items: center;">
       <div><img sytle="display: inline-block;" src="${icons[state.text]}" style="height: 30px;width: atuto;" /></div>
       <div style="margin-left: 10px;">
          ${state.text}
       </div>
    </div>
    `
  );
  return $state;
 }