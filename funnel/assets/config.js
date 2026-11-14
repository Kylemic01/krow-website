/**
 * KROW FUNNEL — SINGLE-SOURCE CONFIG
 * ====================================
 * Change values here and they update everywhere.
 *
 * BEFORE GOING LIVE: fill in every TODO below.
 */

window.KROW = {
  // ── BRAND ─────────────────────────────────────────────────────────────────
  BRAND_NAME:  'Krow Med Spa Growth',
  BRAND_SHORT: 'Krow',
  DOMAIN:      'heykrow.com',

  // ── WEBINAR DATE / TIME ───────────────────────────────────────────────────
  // Format examples: 'Tuesday, November 18' / 'Tue, Nov 18'
  WEBINAR_DATE_LONG:   'Tuesday, TBD',       // e.g. 'Tuesday, November 18'
  WEBINAR_DATE_SHORT:  'Tue TBD',            // e.g. 'Tue, Nov 18'
  WEBINAR_TIME:        '7:00 PM EST',
  WEBINAR_DAY:         'Tuesday',            // plain day name for sentences
  WEBINAR_DURATION:    '90 minutes',

  // Full display used in CTAs: e.g. "Tue, Nov 18 · 7:00 PM EST"
  get WEBINAR_DATETIME() {
    return this.WEBINAR_DATE_SHORT + ' \u00b7 ' + this.WEBINAR_TIME;
  },

  // Full sentence: e.g. "Tuesday, November 18 at 7:00 PM EST"
  get WEBINAR_DATETIME_FULL() {
    return this.WEBINAR_DATE_LONG + ' at ' + this.WEBINAR_TIME;
  },

  // ── LINKS (fill in before launch) ─────────────────────────────────────────
  CALENDLY_URL:     'https://calendly.com/kylemicallef01/strategy-session',
  ADD_TO_CAL_URL:   '#',  // TODO: AddEvent or Google Calendar link (set after date is confirmed)
  ZOOM_JOIN_URL:    '#',  // TODO: Zoom webinar join link

  // ── PAYMENTS ──────────────────────────────────────────────────────────────
  STRIPE_SPRINT_URL:           'https://buy.stripe.com/test_bJecN4gGs4uE01n5NudnW04',  // Strategy Sprint — $1,960 webinar price
  STRIPE_SPRINT_STANDARD_URL:  'https://buy.stripe.com/test_3cI4gyduggdmg0l2BidnW05',  // Strategy Sprint — $2,800 standard
  STRIPE_ANALYSIS_URL:         'https://buy.stripe.com/test_6oUaEWdugbX68xT2BidnW06',  // Med Spa Performance Analysis — $5,950 webinar price
  STRIPE_ANALYSIS_STANDARD_URL:'https://buy.stripe.com/test_4gM9AS4XK9OY15ra3KdnW07',  // Med Spa Performance Analysis — $8,500 standard
  STRIPE_ACCELERATOR_URL:      'https://buy.stripe.com/test_dRmcN41LybX601n6RydnW02',  // Scale Accelerator — $17,997
  STRIPE_VIP_KIT_URL:     'https://buy.stripe.com/28EfZggNt5S6eT092O53O03',

  // ── N8N WEBHOOK ───────────────────────────────────────────────────────────
  // Set this once and both the optin form and survey will use it automatically.
  // Format: 'https://YOUR_N8N_INSTANCE/webhook/webinar-registration'
  // n8n flow: optin-form payload → register in WebinarJam (add WJ API key in n8n)
  //                              → add to MailerLite with tags
  //                              → log to Google Sheet
  N8N_WEBHOOK_URL: 'https://n8n.srv1412039.hstgr.cloud/webhook/webinar-registration',

  // ── META PIXEL ────────────────────────────────────────────────────────────
  META_PIXEL_ID: '29018751841125672',

  // ── COMMUNITY ─────────────────────────────────────────────────────────────
  COMMUNITY_URL: '#',  // TODO: Skool / Circle / Discord invite link
};
