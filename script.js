/* Technical record — interaction

   Everything is visible without JavaScript. The only scripted behaviour is
   the figure↔footnote pairing, which is an enhancement on top of a page that
   reads perfectly as static type.

   Motion is CSS-only and scroll-driven, so nothing is ever hidden waiting for
   an observer that might not fire (a print, a full-page capture, a crawler).
*/

(function () {
  'use strict';

  var notes = Array.prototype.slice.call(document.querySelectorAll('.note'));

  document.querySelectorAll('.lead__fig, .stat__fig').forEach(function (fig) {
    var num = fig.querySelector('.fn');
    if (!num) return;

    var idx = parseInt(num.textContent, 10) - 1;
    var note = notes[idx];
    if (!note) return;

    var claim = note.textContent.replace(/^\s*\d+\s*/, '').trim();

    /* Make the pairing available to keyboard and screen-reader users too.
       The numeral itself stays decorative (aria-hidden) so the figure reads
       as a number, not as "800k one". */
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'img');
    fig.setAttribute('aria-label',
      fig.textContent.replace(/\s+/g, ' ').replace(/\s*\d\s*$/, '').trim() +
      '. ' + claim);

    var on = function () { note.classList.add('is-lit'); };
    var off = function () { note.classList.remove('is-lit'); };

    fig.addEventListener('pointerenter', on);
    fig.addEventListener('pointerleave', off);
    fig.addEventListener('focus', on);
    fig.addEventListener('blur', off);
  });
})();
