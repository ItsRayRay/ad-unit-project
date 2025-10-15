# Creative Asset Brief - Mobile Parallax Ads

## 📋 What We Need

**6 images total** for 2 ad units. Each ad unit has 3 sections that slide together.

---

## ✅ Complete Checklist

### Ad Unit 1 (Slides UP):
- [ ] `ad1-product-main.jpg` (188px × 320px)
- [ ] `ad1-product-secondary.jpg` (188px × 320px)
- [ ] `ad1-cta-banner.jpg` (375px × 80px)

### Ad Unit 2 (Slides DOWN):
- [ ] `ad2-product-main.jpg` (188px × 320px)
- [ ] `ad2-product-secondary.jpg` (188px × 320px)
- [ ] `ad2-cta-banner.jpg` (375px × 80px)

---

## 📐 Exact Dimensions

### Visual Layout

```
┌─────────────────────────────────────┐
│      Mobile Ad Unit (375px wide)     │
│  ┌───────────┬──────────────────┐   │
│  │  Product  │    Product       │   │ ← 320px height
│  │   Main    │   Secondary      │   │
│  │ (188px)   │   (188px)        │   │
│  └───────────┴──────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │      CTA Banner (375px)      │   │ ← 80px height
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 1. Product Main (Left Side)

| Size | Purpose |
|------|---------|
| **188px × 320px** | Main product/brand image |
| **Format:** JPG or PNG | Left half of ad |
| **Max File Size:** 150KB | Main visual focus |

**What to include:**
- Product bottle/package
- Brand name/logo
- Main hero image

---

### 2. Product Secondary (Right Side)

| Size | Purpose |
|------|---------|
| **188px × 320px** | Supporting detail image |
| **Format:** JPG or PNG | Right half of ad |
| **Max File Size:** 150KB | Complements main product |

**What to include:**
- Ingredient close-up
- Product texture/detail
- Supporting visual element

---

### 3. CTA Banner (Bottom)

| Size | Purpose |
|------|---------|
| **375px × 80px** | Call-to-action message |
| **Format:** JPG or PNG | Full-width bottom banner |
| **Max File Size:** 80KB | Clickable CTA |

**What to include:**
- Clear CTA text ("Shop Now", "Learn More", etc.)
- High contrast for readability
- Brand colors

---

## 📁 File Naming (EXACT)

Use these exact file names:

```
ad1-product-main.jpg
ad1-product-secondary.jpg
ad1-cta-banner.jpg
ad2-product-main.jpg
ad2-product-secondary.jpg
ad2-cta-banner.jpg
```

---

## 🎨 Design Guidelines

### Text & Typography
- **Minimum text size:** 16px body, 24px+ headlines
- **High contrast:** Must be readable on mobile
- **Keep it short:** Mobile users scan quickly

### Colors & Branding
- Follow brand guidelines
- Consistent colors across all 3 elements
- Logo minimum 32px height

### Image Quality
- High quality JPG (85-90% quality)
- Compress before delivery (use TinyPNG, Squoosh, etc.)
- RGB color mode (not CMYK)

### File Size Limits
- Product images: < 150KB each
- CTA banner: < 80KB
- **Total:** < 500KB for all 6 files

---

## 📦 Delivery

### Where to Place Files
Put all 6 files in: `/public/creatives/` folder

### Folder Structure
```
public/
└── creatives/
    ├── ad1-product-main.jpg
    ├── ad1-product-secondary.jpg
    ├── ad1-cta-banner.jpg
    ├── ad2-product-main.jpg
    ├── ad2-product-secondary.jpg
    └── ad2-cta-banner.jpg
```

### Update Config (if needed)
If you use different file names, update paths in: `src/config.js`

---

## 🔄 How It Works

**Ad Unit 1:** Slides UP from below as user scrolls
**Ad Unit 2:** Slides DOWN from above as user scrolls

The 3 sections move together as one unit with parallax effect.

---

## ✅ Before Delivery Checklist

- [ ] All 6 files included
- [ ] Exact dimensions (use "Save for Web")
- [ ] File names match exactly
- [ ] File sizes under limits
- [ ] RGB color mode
- [ ] Images compressed
- [ ] Text is readable
- [ ] Looks good on mobile device

---

## 🎯 Examples

### Skincare Product
- **Main:** Product bottle with brand name
- **Secondary:** Ingredient close-up (botanicals)
- **CTA:** "Discover Radiant Skin"

### Tech Product
- **Main:** Device hero shot
- **Secondary:** Feature detail or screen
- **CTA:** "Experience Innovation"

### Fashion Product
- **Main:** Product on model
- **Secondary:** Fabric/texture detail
- **CTA:** "Shop the Collection"

---

## 📊 Quick Reference

| Element | Dimensions | Max Size |
|---------|-----------|----------|
| Product Main | 188 × 320px | 150KB |
| Product Secondary | 188 × 320px | 150KB |
| CTA Banner | 375 × 80px | 80KB |

**Total files:** 6
**Total size:** < 500KB
**Format:** JPG or PNG
**Color:** RGB

---

**Questions?** Contact the dev team before starting work.

**Last Updated:** October 15, 2025
