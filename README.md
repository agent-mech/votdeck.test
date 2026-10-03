# VoltDeck

FleetForge vehicle command hub — Bluetooth ESC control for Segway/Ninebot fleet scooters.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (any name)
2. Go to **Settings → Pages → Source** → choose **GitHub Actions**
3. On the next push to `main` the site goes live at `https://yourusername.github.io/yourrepo/`

## Configure your NEXUS server

Edit `config.js` and set your server address:

```js
window.VOLTDECK_CONFIG = {
  NEXUS_SERVER: "ws://192.168.1.42:8765",
};
```

This pre-fills the login screen so users don't need to type the server address.

## Access

- **NEXUS auth** — enter your NEXUS server URL and an `NX-VD-...` key issued by `/vdkey` in NEXUS
- **Local access** — tap the VoltDeck logo 10 times on the login screen (emergency bypass)

## NEXUS VoltDeck commands

```
/vdkey <username>     mint an access key for somebody
/vdkeys               list active keys
/vdrevoke <token-id>  revoke a key
```

## Notes

- Bluetooth only works over HTTPS or localhost — GitHub Pages provides HTTPS automatically
- If your NEXUS server is on a local network, your phone must be on the same WiFi
- For remote access: use Tailscale, or a VPS with `wss://`

---
*Not affiliated with Segway-Ninebot Group Co., Ltd. in any way.*
