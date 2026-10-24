// Sends the audit form to its webhook in the background, then shows the thank-you page.
// If the background send fails, fall back to the form's normal submit.
document.addEventListener('submit', function (e) {
  var form = e.target;
  if (!form || form.tagName !== 'FORM' || !form.action) return;
  e.preventDefault();
  var btn = form.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  fetch(form.action, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
    .then(function () { window.location.href = '/thank-you.html'; })
    .catch(function () { form.submit(); });
});
