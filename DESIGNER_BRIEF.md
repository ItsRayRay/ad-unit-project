# Creative Asset Brief - Mobile Parallax Ads

## 📋 What We Need

**10 images total** for 2 ad units. Each ad unit has 4 layers: background + 3 foreground elements.

---

## ✅ Complete Checklist

### Ad Unit 1 (Slides DOWN):
- [ ] `ad1-background.jpg` (375px × 400px) - Background layer
- [ ] `ad1-product-main.png` (188px × 320px) - **Transparent PNG**
- [ ] `ad1-product-secondary.png` (188px × 320px) - **Transparent PNG**
- [ ] `ad1-cta-banner.png` (375px × 80px) - **Transparent PNG**

### Ad Unit 2 (Slides IN from above):
- [ ] `ad2-background.jpg` (375px × 400px) - Background layer
- [ ] `ad2-product-main.png` (188px × 320px) - **Transparent PNG**
- [ ] `ad2-product-secondary.png` (188px × 320px) - **Transparent PNG**
- [ ] `ad2-cta-banner.png` (375px × 80px) - **Transparent PNG**

---

## 📐 Exact Dimensions

### Visual Layout

```
┌─────────────────────────────────────┐
│   Mobile Ad Unit (375px × 400px)    │
│                                      │
│   🎨 BACKGROUND (full size)          │
│                                      │
│  ┌───────────┬──────────────────┐   │
│  │  Product  │    Product       │   │ ← 320px height
│  │   Main    │   Secondary      │   │   (Transparent PNGs)
│  │ (188px)   │   (188px)        │   │
│  └───────────┴──────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │      CTA Banner (375px)      │   │ ← 80px height
│  └──────────────────────────────┘   │   (Transparent PNG)
└─────────────────────────────────────┘
```

### 0. Background (Full Ad Container)

| Property | Details |
|----------|---------|
| **Size:** | **375px × 400px** |
| **Format:** | JPG (solid background, no transparency) |
| **Max File Size:** | 200KB |
| **Purpose:** | Fills entire ad space behind all other elements |
| **Design Notes:** | This is the base layer - can be gradient, texture, color, or imagery |


---

### 1. Product Main (Left Side)

| Property | Details |
|----------|---------|
| **Size:** | **188px × 320px** |
| **Format:** | **PNG with transparency** |
| **Max File Size:** | 150KB |
| **Purpose:** | Main product/brand image |
| **Position:** | Left half of ad, overlays background |
| **Design Notes:** | Product should have transparent background to show the main background behind it |


---

### 2. Product Secondary (Right Side)

| Property | Details |
|----------|---------|
| **Size:** | **188px × 320px** |
| **Format:** | **PNG with transparency** |
| **Max File Size:** | 150KB |
| **Purpose:** | Supporting detail image |
| **Position:** | Right half of ad, overlays background |
| **Design Notes:** | Can be product detail, lifestyle shot, or complementary visual. Must have transparent background |


---

### 3. CTA Banner (Bottom)

| Property | Details |
|----------|---------|
| **Size:** | **375px × 80px** |
| **Format:** | **PNG with transparency** |
| **Max File Size:** | 80KB |
| **Purpose:** | Call-to-action message/button |
| **Position:** | Full-width bottom section, overlays background |
| **Design Notes:** | Should include text/button with transparent background. This is the clickable area |


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

