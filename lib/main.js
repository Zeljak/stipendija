document.querySelector("#submit-form").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("pravila").checked?(document.querySelector("#submit-form").classList.add("is-hidden"),document.querySelector("#error-msg").classList.add("is-hidden"),document.querySelector("#loading-indicator").classList.remove("is-hidden"),fetch("https://script.google.com/macros/s/AKfycbwT0lI-n24QHIHzWp8Bxj7ZyseWheOx0r8xDKW9RMC8N11zj8MJ3hvuHuOeqdeGGCjaLQ/exec",{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:$("form#anketaArena").serializeJSON()}).then(document.querySelector("#loading-indicator").classList.add("is-hidden")).then(document.querySelector("#response-msg").classList.remove("is-hidden"))):document.querySelector("#error-msg").classList.remove("is-hidden")}));


$(document).ready(function() {
    $("label").on("click", function(e) {
      e.preventDefault();
      var $radio = $("#" + $(this).attr("for")),
        name = $radio.attr("name"),
        hasRadio = $radio.attr("type") == "radio";
      if (!hasRadio) return;
      if ($radio.data("is-checked") == true) {
        $radio.prop("checked", false).change();
        $radio.data("is-checked", false);
      } else {
        $radio.data("is-checked", true);
        $radio.prop("checked", true).change();
      }
      $('input[type="radio"][name="' + name + '"]')
        .not("#" + $(this).attr("for"))
        .data("is-checked", false);
    });
  });
  