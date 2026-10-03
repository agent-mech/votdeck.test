/**
 * VoltDeck site configuration.
 *
 * Edit NEXUS_SERVER to pre-fill your server address on the login screen.
 * Leave it empty ("") to let users type their own.
 *
 * Examples:
 *   "ws://192.168.1.42:8765"    — local network (same WiFi as your PC)
 *   "wss://nexus.yourdomain.com" — public domain with TLS
 *   "ws://100.64.0.1:8765"       — Tailscale private IP
 */
window.VOLTDECK_CONFIG = {
  NEXUS_SERVER: "",   // ← paste your server address here
};
