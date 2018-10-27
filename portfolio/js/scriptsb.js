$(Document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
    $("button").dblclick(function(){
      $("p").show();
    });
  });