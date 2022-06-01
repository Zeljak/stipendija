// Anketa
document.querySelector('#form__submit').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyECPq0wRPU2xVqIhsTIfW_3jDuT0M4PPfspI030lo8amvjFCqZBGi7WXzFkswrcKud/exec';
  

  e.preventDefault();

  if ( // spol
      (document.getElementById('zena').checked || document.getElementById('muskarac').checked) &&
      // regija
      (document.getElementById('sredisnja').checked || document.getElementById('dalmacija').checked || document.getElementById('istrakvarner').checked || document.getElementById('slavonijabaranja').checked || document.getElementById('likagorskikotar').checked) &&
      // koji studij
      document.getElementById('zavrsenstudij').value != '' &&
      // kad studij
      (document.getElementById('tekzavrsen').checked || document.getElementById('manjeod_pet_godina').checked || document.getElementById('viseod_pet_godina').checked) &&
      // digitalno okruženje
      (document.getElementById('nedostatak_digitalnih_vjestina').checked || document.getElementById('konkurentnost').checked || document.getElementById('doktorska_titula').checked) &&
      // zašto kandidat
      document.getElementById('zasto_idealan_kandidat').value != '' &&
      // email
      document.getElementById('email').value != '' &&
      // gdpr
      (document.getElementById('gdpr').checked)
  ) {
      // remove warnings
      document.querySelector('#form__submit').classList.add('is-hidden');
      document.querySelector('#error-msg--submit').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');

      // spol
      document.querySelector('#form__error-msg--spol').classList.add('is-hidden');
      // regija
      document.querySelector('#form__error-msg--regija').classList.add('is-hidden');
      // koji studij
      document.querySelector('#form__error-msg--zavrsenstudij').classList.add('is-hidden');
      // kad studij
      document.querySelector('#form__error-msg--zavrsetakstudija').classList.add('is-hidden');
      // digitalno okruženje
      document.querySelector('#form__error-msg--nedostatak_digitalnih_vjestina').classList.add('is-hidden');
      // zašto kandidat
      document.querySelector('#form__error-msg--kandidat').classList.add('is-hidden');
      // email
      document.querySelector('#error-msg--email').classList.add('is-hidden');
      // gdpr
      document.querySelector('#error-msg--checkbox').classList.add('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#EF_obrazac').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg--submit').classList.remove('is-hidden');
    // spol
    if (!(document.getElementById('zena').checked || document.getElementById('muskarac').checked)) {
      document.querySelector('#form__error-msg--spol').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--spol').classList.add('is-hidden');
    };
    // regija
    if (!(document.getElementById('sredisnja').checked || document.getElementById('dalmacija').checked || document.getElementById('istrakvarner').checked || document.getElementById('slavonijabaranja').checked || document.getElementById('likagorskikotar').checked)) {
      document.querySelector('#form__error-msg--regija').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--regija').classList.add('is-hidden');
    };
    // koji studij
    if (document.getElementById('zavrsenstudij').value == '') {
      document.querySelector('#form__error-msg--zavrsenstudij').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--zavrsenstudij').classList.add('is-hidden');
    };
    // kad studij
    if (!(document.getElementById('tekzavrsen').checked || document.getElementById('manjeod_pet_godina').checked || document.getElementById('viseod_pet_godina').checked)) {
      document.querySelector('#form__error-msg--zavrsetakstudija').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--zavrsetakstudija').classList.add('is-hidden');
    };
    // digitalno okruženje
    if (!(document.getElementById('nedostatak_digitalnih_vjestina').checked || document.getElementById('konkurentnost').checked || document.getElementById('doktorska_titula').checked)) {
      document.querySelector('#form__error-msg--nedostatak_digitalnih_vjestina').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--nedostatak_digitalnih_vjestina').classList.add('is-hidden');
    };
    // zašto kandidat
    if (document.getElementById('zasto_idealan_kandidat').value == '') {
      document.querySelector('#form__error-msg--kandidat').classList.remove('is-hidden');
    } else {
      document.querySelector('#form__error-msg--kandidat').classList.add('is-hidden');
    };
    // email
    if (document.getElementById('email').value == '') {
      document.querySelector('#error-msg--email').classList.remove('is-hidden');
    } else {
      document.querySelector('#error-msg--email').classList.add('is-hidden');
    };
    // gdpr
    if (!(document.getElementById('gdpr').checked)) {
      document.querySelector('#error-msg--checkbox').classList.remove('is-hidden');
    } else {
      document.querySelector('#error-msg--checkbox').classList.add('is-hidden');
    };
  }
});

// $(document).ready(function () {
//   $(".label_custom").on("click", function (e) {
//     e.preventDefault();
//     var $radio = $("#" + $(this).attr("for")),
//       name = $radio.attr("name"),
//       hasRadio = $radio.attr("type") == "radio";
//     if (!hasRadio) return;
//     if ($radio.data("is-checked") == true) {
//       $radio.prop("checked", false).change();
//       $radio.data("is-checked", false);
//     } else {
//       $radio.data("is-checked", true);
//       $radio.prop("checked", true).change();
//     }
//     $('input[type="radio"][name="' + name + '"]')
//       .not("#" + $(this).attr("for"))
//       .data("is-checked", false);
//   });
// });