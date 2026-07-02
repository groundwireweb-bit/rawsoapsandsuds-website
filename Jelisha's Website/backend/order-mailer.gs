/**
 * Raw Soaps & Suds - order form email backend (Google Apps Script)
 * ----------------------------------------------------------------
 * Receives a POST from the website order form and emails the order
 * straight to Jelisha's Gmail. No third-party relay, free, and the
 * mail comes from Google itself so it lands reliably in her inbox.
 *
 * SETUP (once, ~5 minutes):
 *   1. Sign in to https://script.google.com with JELISHA'S Google
 *      account (jelishayork439@gmail.com) so mail sends from her.
 *   2. New project > paste this whole file in, replacing Code.gs.
 *   3. Deploy > New deployment > type "Web app".
 *        - Execute as:  Me (jelishayork439@gmail.com)
 *        - Who has access:  Anyone
 *   4. Authorize when prompted (the "unsafe" screen is expected for
 *      your own script - Advanced > Go to project > Allow).
 *   5. Copy the Web app URL that ends in /exec.
 *   6. Paste that URL into request.html at ORDER_ENDPOINT.
 *
 * To change where orders go, edit TO_ADDRESS below and re-deploy
 * (Deploy > Manage deployments > edit > Version: New version).
 */

var TO_ADDRESS = 'jelishayork439@gmail.com';
var SITE_NAME  = 'Raw Soaps & Suds';

function doPost(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};

    // Honeypot: real people leave this blank; bots tend to fill it.
    if (p._honey) {
      return jsonOut({ ok: true }); // silently accept and drop
    }

    var name   = clean(p.name)   || '(no name given)';
    var email  = clean(p.email);
    var phone  = clean(p.phone)  || '(none)';
    var scents = clean(p.scents) || '(none listed)';
    var notes  = clean(p.notes)  || '(none)';

    var body =
      'New soap order from the website:\n\n' +
      'Name:   ' + name + '\n' +
      'Email:  ' + (email || '(none)') + '\n' +
      'Phone:  ' + phone + '\n\n' +
      'Bars & quantities:\n' + scents + '\n\n' +
      'Notes:\n' + notes + '\n\n' +
      '-- sent from the ' + SITE_NAME + ' order form';

    var options = { name: SITE_NAME + ' website' };
    // Set reply-to so Jelisha can just hit Reply to answer the customer.
    if (email && isEmail(email)) {
      options.replyTo = email;
    }

    MailApp.sendEmail(TO_ADDRESS, 'New soap order from ' + name, body, options);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

// A GET just confirms the endpoint is alive (handy when testing the URL).
function doGet() {
  return jsonOut({ ok: true, service: SITE_NAME + ' order mailer' });
}

function clean(v) {
  return (v == null) ? '' : String(v).trim();
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
