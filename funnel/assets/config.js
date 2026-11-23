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
  // Format examples: 'Thursday, November 18' / 'Tue, Nov 18'
  WEBINAR_DATE_LONG:   'Wednesday, December 2',  // e.g. 'Thursday, November 18'
  WEBINAR_DATE_SHORT:  'Wed, Dec 2',             // e.g. 'Tue, Nov 18'
  WEBINAR_TIME:        '7:00 PM EST',
  WEBINAR_DAY:         'Wednesday',              // plain day name for sentences
  WEBINAR_DURATION:    '90 minutes',

  // Full display used in CTAs: e.g. "Tue, Nov 18 · 7:00 PM EST"
  get WEBINAR_DATETIME() {
    return this.WEBINAR_DATE_SHORT + ' \u00b7 ' + this.WEBINAR_TIME;
  },

  // Full sentence: e.g. "Thursday, November 18 at 7:00 PM EST"
  get WEBINAR_DATETIME_FULL() {
    return this.WEBINAR_DATE_LONG + ' at ' + this.WEBINAR_TIME;
  },

  // Top-bar banner text: e.g. "Free LIVE Masterclass • Wed, Dec 2 • 7:00 PM EST"
  get WEBINAR_TOPBAR() {
    return 'Free LIVE Masterclass \u2022 ' + this.WEBINAR_DATE_SHORT + ' \u2022 ' + this.WEBINAR_TIME;
  },

  // ── LINKS (fill in before launch) ─────────────────────────────────────────
  CALENDLY_URL:     'https://calendly.com/kylemicallef01/strategy-session',
  ADD_TO_CAL_URL:   '#',  // TODO: AddEvent or Google Calendar link (set after date is confirmed)
  ZOOM_JOIN_URL:    '#',  // TODO: Zoom webinar join link

  // ── PAYMENTS ──────────────────────────────────────────────────────────────
  STRIPE_SPRINT_URL:           'https://buy.stripe.com/7sY00igNt4O25iq5QC53O05',  // Strategy Sprint — $1,960 webinar price
  STRIPE_SPRINT_STANDARD_URL:  'https://buy.stripe.com/9B600i7cT4O2dOWdj453O02',  // Strategy Sprint — $2,800 standard
  STRIPE_ANALYSIS_URL:         'https://buy.stripe.com/aFa9AS8gX3JYfX492O53O04',  // Med Spa Performance Analysis — $5,950 webinar price
  STRIPE_ANALYSIS_STANDARD_URL:'https://buy.stripe.com/bJe28q0Ov4O29yG6UG53O00',  // Med Spa Performance Analysis — $8,500 standard
  STRIPE_ACCELERATOR_URL:      'https://buy.stripe.com/5kQaEW1Sz94i5iqcf053O01',  // Scale Accelerator — $17,997
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
