(function () {
  'use strict';

  function goTime () {
    var $form = document.querySelector('form'),
      $message = document.querySelector('#submit-message');

    function messageUser (success) {
      $form.style.display = 'none';
      $message.className += success ? ' success' : ' error';
    }

    function handleResponse (readyState, status) {
      messageUser(readyState === 4 && status === 200);
    }

    function handleSubmit (e) {
      e.preventDefault();
      var action = $form.action,
        method = $form.method,
        request = new XMLHttpRequest();
      request.open(method, action, true);
      request.onreadystatechange = function () {
        handleResponse(request.readyState, request.status);
      };
      request.send(new FormData($form));
    }

    if ($form) {
      $form.addEventListener('submit', handleSubmit, false);
    }
  }

  document.addEventListener('DOMContentLoaded', goTime);
})();

