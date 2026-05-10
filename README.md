# n8n Export Wizard

A free desktop app to **export and import n8n workflows and credentials** between SQLite databases and remote n8n instances via the Public API. Cross-instance migration without spinning up the source n8n.

[![Latest](https://img.shields.io/github/v/release/dtsoden/n8n-export-app?style=flat-square)](https://github.com/dtsoden/n8n-export-app/releases/latest)

## Download

| Platform | File |
|---|---|
| Windows installer | [n8n Export Wizard Setup.exe](https://github.com/dtsoden/n8n-export-app/releases/latest/download/n8n.Export.Wizard.Setup.exe) |
| Windows portable | [n8n Export Wizard Portable.exe](https://github.com/dtsoden/n8n-export-app/releases/latest/download/n8n.Export.Wizard.Portable.exe) |
| macOS Apple Silicon | _coming soon_ |
| macOS Intel | _coming soon_ |

The links above always resolve to the **latest release** — bookmark them and they'll keep working through every version bump.

Windows binaries are **code-signed** through Azure Trusted Signing; the certificate chain ends at the verified identity **David Soden**. SmartScreen and standard antivirus tools recognise the signature on first run, so you should not see any "unknown publisher" warnings.

## What it does

- **Read source**: a local n8n `database.sqlite` file, or a running n8n via its Public API.
- **Workflows**: export to JSON files in the editor-download format (paste into the editor canvas, import via "Import from File", or use `n8n import:workflow`); push to a remote n8n via `POST /workflows`; import local JSON files into a connected instance.
- **Credentials**: encrypted blob export (CLI-compatible, same-instance restore) or decrypted export (cross-instance migration). Push decrypted credentials to a remote n8n via `POST /credentials`; the target re-encrypts with its own key.
- **Logs button** in the top bar opens the application log file for support requests.
- **Donate** button if the app saved you a headache.

## Logs (for troubleshooting)

If something goes wrong, send the log file along with your bug report.

- **Installed (NSIS)**: `%APPDATA%\n8n Export Wizard\logs\main.log` on Windows; `~/Library/Logs/n8n Export Wizard/main.log` on macOS.
- **Portable**: `./logs/main.log` next to the portable `.exe`.

The **Logs** button in the app's top bar opens the file's location directly in Explorer / Finder.

## Licensing

The application is **free to download and use** for both personal and corporate purposes. No registration, no telemetry, no nag screens.

The **source code is commercially licensed**, distributed only by direct arrangement. If your company would like to license the source for internal use, modification, white-labeling, or extension, contact:

> **David Soden** — me@davidsoden.com
