$(function() {
  $(".CodeMirror-wrapping").parents(".form-item:first").find(".grippie").hide();
  $("h2:contains('Edit Code')").hide();
  $("#code-editor-edit-form").submit(function(e) {
    if ($(".syntax-error").length) {
      alert("You can't save when there syntax errors.");
      
      return false; 
    }  
  });
  
});
