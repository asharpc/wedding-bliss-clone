# Cloudflare KV Setup Guide

This project uses Cloudflare Pages Functions and KV (Key-Value) storage to manage wishes and likes. Follow these steps to set up your environment.

## Prerequisites

1.  **Cloudflare Account**: You need a Cloudflare account.
2.  **Node.js & npm**: Ensure you have these installed.
3.  **Wrangler**: The Cloudflare CLI tool.

## 1. Install Wrangler

If you haven't already, install Wrangler globally:

```bash
npm install -g wrangler
```

## 2. Login to Cloudflare

Authenticate Wrangler with your Cloudflare account:

```bash
wrangler login
```

## 3. Create a KV Namespace

You need a KV namespace to store the data. Run the following command:

```bash
npx wrangler kv namespace create "WEDDING_WISHES"
```

This will output something like:

```text
{ binding = "WEDDING_WISHES_KV", id = "cac1a5e211c6415e823160754292cf35" }
```

**Copy the `id`**. You will need it later.

## 4. Configure Local Development (`wrangler.toml`)

Create a file named `wrangler.toml` in the root of your project to configure the binding for local development and deployment.

```toml
name = "wedding-bliss-clone"
compatibility_date = "2024-01-01"

[[kv_namespaces]]
binding = "WEDDING_WISHES_KV"
id = "cac1a5e211c6415e823160754292cf35" # Replace with the ID from step 3
preview_id = "cac1a5e211c6415e823160754292cf35" # You can use the same ID for preview or create a separate one
```

## 5. Connect KV to Cloudflare Pages (Production)

1.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Navigate to **Pages** > **Your Project**.
3.  Go to **Settings** > **Functions**.
4.  Scroll down to **KV Namespace Bindings**.
5.  Click **Add binding**.
    *   **Variable name**: `WEDDING_WISHES_KV` (Must match the binding name in your code/config)
    *   **KV Namespace**: Select the `WEDDING_WISHES` namespace you created in Step 3.
6.  Click **Save**.

## 6. Deployment

Deploy your specific changes (including the `functions` directory) to Cloudflare Pages.

```bash
npm run build
npx wrangler pages deploy dist
```

## API Endpoints

Once set up, your app will have access to the following serverless endpoints:

*   **GET /api/wishes**: Returns the current likes count and list of wishes.
*   **POST /api/wishes**: Accepts structured JSON to add a new wish.
*   **POST /api/likes**: Accepts JSON to update the like count.
