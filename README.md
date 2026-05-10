# n8n Export Wizard

A free desktop app to **export and import n8n workflows and credentials** between SQLite databases and remote n8n instances via the Public API. Cross-instance migration without spinning up the source n8n.

[![Latest](https://img.shields.io/github/v/release/dtsoden/n8n-export-app?style=flat-square)](https://github.com/dtsoden/n8n-export-app/releases/latest)

## Download

| Platform | File |
|---|---|
| Windows installer | [n8n Export Wizard Setup (x64)](https://github.com/dtsoden/n8n-export-app/releases/latest/download/n8n.Export.Wizard-Setup-1.0.0-x64.exe) |
| Windows portable | [n8n Export Wizard Portable (x64)](https://github.com/dtsoden/n8n-export-app/releases/latest/download/n8n.Export.Wizard-Portable-1.0.0-x64.exe) |
| macOS Apple Silicon | _coming soon_ |
| macOS Intel | _coming soon_ |

Windows binaries are **code-signed** with a Microsoft-issued Developer ID through Azure Trusted Signing (chain ends at "David Soden"). SmartScreen and standard antivirus tools recognize the signature on first run.

## What it does

- **Read source**: a local n8n `database.sqlite` file, or a running n8n via its Public API.
- **Workflows**: export to JSON files in the editor-download format (paste into the editor canvas, import via "Import from File", or use `n8n import:workflow`); push to a remote n8n via `POST /workflows`; import local JSON files into a connected instance.
- **Credentials**: encrypted blob export (CLI-compatible, same-instance restore) or decrypted export (cross-instance migration). Push decrypted credentials to a remote n8n via `POST /credentials`; the target re-encrypts with its own key.
- **Donate**: a Stripe-backed tip jar if the app saved you a headache.

## License

Personal-use freeware. No warranty. The source repo is private; releases here are the only distribution channel.
