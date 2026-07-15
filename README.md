# LaMeiZi Hot Pot & BBQ Website

辣妹子火锅烧烤新版官网代码。这个项目是代码版前端网站，不是 Wix/GoDaddy 拖拽模板。

## Main Files

- `app/page.tsx`: homepage
- `app/menu/page.tsx`: menu and soup bases
- `app/pricing/page.tsx`: adult and kid pricing, dining terms
- `app/gallery/page.tsx`: restaurant photo gallery
- `app/vip/page.tsx`: VIP card and gift card information
- `app/visit/page.tsx`: hours, address, phone, directions
- `app/site-data.ts`: shared restaurant information
- `app/site-shell.tsx`: shared navigation and footer
- `app/globals.css`: layout, colors, responsive styles
- `public/images/`: restaurant photos used by the site
- `photos/new-uploads/`: original new photos waiting to be prepared for the site
- `app/layout.tsx`: page title, SEO description, favicon

## Local Preview

```bash
pnpm install
pnpm run dev
```

Open:

```text
http://localhost:3000/
```

## Build Check

```bash
pnpm run build
```

## Current Restaurant Info

- Name: LaMeiZi Hot Pot & BBQ / 辣妹子火锅烧烤
- Phone: 813-443-2287
- Address: 2501 E Fowler Ave, Tampa FL 33612
- Hours: Daily 12:00 PM - 12:00 AM
- Last seating: 11:00 PM

Before connecting the domain, review the content, menu, prices, photos, and reservation link.

The VIP page currently uses the values from the uploaded VIP notice. The real
online gift card purchase URL can be connected after it is provided.
