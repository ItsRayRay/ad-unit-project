# Creative Specifications - Mobile Parallax Ad Units

## Overview
This document provides specifications for creating **mobile-first** ad creatives for the parallax ad units. The demo displays as a realistic iPhone mockup on desktop and native experience on mobile devices.

## Display Behavior

### Desktop (≥768px)
- Shows iPhone frame mockup in center of screen
- Mountain background (like Adnami preview)
- Browser chrome (address bar + navigation)
- QR code in bottom-left corner
- Scrollable phone screen

### Mobile (<768px)
- Full-screen native experience
- No phone frame
- Direct interaction
- Optimized touch experience

## Mobile Ad Unit Layout

```
┌─────────────────────────────────────┐
│      Mobile Ad Unit Container        │
│          375px × 400px               │
│  ┌───────────┬──────────────────┐   │
│  │  Product  │    Product       │   │
│  │   Main    │   Secondary      │   │
│  │ (Left)    │   (Right)        │   │
│  │ 187.5px × │   187.5px ×      │   │
│  │  320px    │    320px         │   │
│  │           │                  │   │
│  │ [Brand/   │  [Supporting     │   │
│  │  Product] │   Image]         │   │
│  └───────────┴──────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │      CTA Banner (Bottom)     │   │
│  │        375px × 80px          │   │
│  │      [Call-to-Action]        │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

## Element Specifications

### 1. Product Main (Left Section)
- **Dimensions:** 187.5px width × 320px height
- **Purpose:** Main product image with brand text overlay
- **File Name:** `mobile-product-main-1.jpg` or `mobile-product-main-2.jpg`
- **Format:** JPG, PNG, or WebP
- **Recommended Resolution:** 375px × 640px @2x (Retina)
- **File Size:** < 150KB recommended
- **Notes:**
  - Takes up left half of ad unit
  - Can include text overlay or transparent PNG with layered text
  - Should be designed for mobile viewing

### 2. Product Secondary (Right Section)
- **Dimensions:** 187.5px width × 320px height
- **Purpose:** Supporting product image or visual element
- **File Name:** `mobile-product-secondary-1.jpg` or `mobile-product-secondary-2.jpg`
- **Format:** JPG, PNG, or WebP
- **Recommended Resolution:** 375px × 640px @2x (Retina)
- **File Size:** < 150KB recommended
- **Notes:**
  - Takes up right half of ad unit
  - Complements the main product
  - Should visually align with left section

### 3. CTA Banner (Bottom Section)
- **Dimensions:** 375px width × 80px height
- **Purpose:** Call-to-action message or button
- **File Name:** `mobile-cta-banner-1.jpg` or `mobile-cta-banner-2.jpg`
- **Format:** JPG, PNG, or WebP
- **Recommended Resolution:** 750px × 160px @2x (Retina)
- **File Size:** < 80KB recommended
- **Notes:**
  - Full width of mobile screen
  - Ideal for text overlays: "Shop Now", "Learn More", etc.
  - High contrast recommended for readability
  - Consider thumb-friendly tap targets (48px+ height)

## File Naming Convention

### Ad Unit 1 (Slides UP)
```
/public/creatives/
  ├── mobile-product-main-1.jpg        (187.5px × 320px)
  ├── mobile-product-main-1@2x.jpg     (375px × 640px - Retina)
  ├── mobile-product-secondary-1.jpg   (187.5px × 320px)
  ├── mobile-product-secondary-1@2x.jpg (375px × 640px - Retina)
  ├── mobile-cta-banner-1.jpg          (375px × 80px)
  └── mobile-cta-banner-1@2x.jpg       (750px × 160px - Retina)
```

### Ad Unit 2 (Slides DOWN)
```
/public/creatives/
  ├── mobile-product-main-2.jpg
  ├── mobile-product-main-2@2x.jpg
  ├── mobile-product-secondary-2.jpg
  ├── mobile-product-secondary-2@2x.jpg
  ├── mobile-cta-banner-2.jpg
  └── mobile-cta-banner-2@2x.jpg
```

## How to Replace Placeholder Creatives

### Method 1: Using CSS Background Images (Recommended)

1. **Place your creative files** in `/public/creatives/` folder using the naming convention above.

2. **Edit the CSS** in `src/pages/index.astro` and add background-image properties:

```css
/* For Ad Unit 1 - Product Main */
[data-ad="unit-1"] .product-main {
    background-image: url('/creatives/mobile-product-main-1.jpg');
}

/* For Ad Unit 1 - Product Secondary */
[data-ad="unit-1"] .product-secondary {
    background-image: url('/creatives/mobile-product-secondary-1.jpg');
}

/* For Ad Unit 1 - CTA Banner */
[data-ad="unit-1"] .cta-banner {
    background-image: url('/creatives/mobile-cta-banner-1.jpg');
}

/* For Ad Unit 2 */
[data-ad="unit-2"] .product-main {
    background-image: url('/creatives/mobile-product-main-2.jpg');
}

[data-ad="unit-2"] .product-secondary {
    background-image: url('/creatives/mobile-product-secondary-2.jpg');
}

[data-ad="unit-2"] .cta-banner {
    background-image: url('/creatives/mobile-cta-banner-2.jpg');
}
```

3. **For Retina displays**, use media queries:

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    [data-ad="unit-1"] .product-main {
        background-image: url('/creatives/mobile-product-main-1@2x.jpg');
    }
    /* ... repeat for other elements */
}
```

4. **Remove placeholder text** from HTML:
   - Remove "ADORE", "PURE", "Discover the Power", etc.
   - Or keep as fallback if images don't load

### Method 2: Using <img> Tags

Replace the div content with `<img>` tags:

```html
<!-- Ad Unit 1 Example -->
<div class="creative-wrapper parallax-up">
    <div class="creative-top">
        <div class="product-main">
            <img
                src="/creatives/mobile-product-main-1.jpg"
                srcset="/creatives/mobile-product-main-1@2x.jpg 2x"
                alt="ADORE Product"
                style="width: 100%; height: 100%; object-fit: cover;"
            >
        </div>
        <div class="product-secondary">
            <img
                src="/creatives/mobile-product-secondary-1.jpg"
                srcset="/creatives/mobile-product-secondary-1@2x.jpg 2x"
                alt="Product Detail"
                style="width: 100%; height: 100%; object-fit: cover;"
            >
        </div>
    </div>
    <div class="cta-banner">
        <img
            src="/creatives/mobile-cta-banner-1.jpg"
            srcset="/creatives/mobile-cta-banner-1@2x.jpg 2x"
            alt="Shop Now"
            style="width: 100%; height: 100%; object-fit: cover;"
        >
    </div>
</div>
```

## Design Guidelines for Mobile

### Mobile-First Considerations
- **Touch targets:** Minimum 44px × 44px for interactive elements
- **Text size:** Minimum 14px for readability on small screens
- **High contrast:** Essential for outdoor viewing conditions
- **Fast loading:** Mobile networks can be slow, optimize images aggressively

### Visual Consistency
- All 3 elements should work together visually
- Consistent color schemes and branding
- The parallax animation will split these during scroll

### Text & Typography
- **Minimum font size:** 16px for body, 24px+ for headlines
- **High contrast:** Especially for CTA text
- **Short & punchy:** Mobile users scan quickly
- **Safe areas:** Keep important text 10px from edges

### Brand Guidelines
- Follow brand style guide for colors, fonts, imagery
- Logo size: Minimum 32px height on mobile
- Consistent brand presence across all elements

### Performance Optimization
- **Compress images:** Use TinyPNG, ImageOptim, Squoosh
- **Prefer WebP:** With JPG fallback for compatibility
- **Target file sizes:**
  - Product images: < 150KB each
  - CTA banner: < 80KB
  - Total ad unit: < 400KB
- **Lazy loading:** Images load as user scrolls

## Example Product Layout

For a skincare product like "ADORE":

### Product Main (Left)
- Product bottle prominent
- "ADORE" brand text overlay
- Gradient or solid color background
- High-quality product photography

### Product Secondary (Right)
- Botanical ingredients close-up
- Or lifestyle/texture shot
- Complements main product
- Visual storytelling element

### CTA Banner (Bottom)
- "Discover the Power of Botanicals"
- Clear, tappable button design
- Brand colors
- Urgency or value proposition

## Retina/HiDPI Optimization

Modern mobile devices have high pixel density. Provide 2x assets:

### Standard Resolution (1x)
- Product sections: 187.5px × 320px
- CTA banner: 375px × 80px

### Retina Resolution (2x) - **Recommended**
- Product sections: 375px × 640px
- CTA banner: 750px × 160px

The browser automatically selects appropriate resolution using `srcset` or CSS media queries.

## Testing Your Creatives

### Desktop Testing
1. Save images to `/public/creatives/`
2. Update CSS or HTML as described above
3. Open http://localhost:4322/ in browser
4. You'll see iPhone mockup with your creatives
5. Scroll to test parallax animations

### Mobile Testing
1. Open same URL on your phone
2. See native full-screen experience
3. Test scrolling performance
4. Verify tap targets work well
5. Check loading speed on 4G/5G

### QR Code
On desktop, scan the QR code (when implemented) to instantly test on your device.

## Responsive Breakpoint

The layout switches at **768px width**:
- `< 768px`: Mobile native view
- `≥ 768px`: Desktop with iPhone frame

To adjust this breakpoint, search for `@media (min-width: 768px)` in `index.astro` and modify.

## Common Issues & Solutions

### Images Not Showing
- Check file paths are correct
- Verify files exist in `/public/creatives/`
- Check browser console for 404 errors
- Clear browser cache

### Images Look Blurry
- Provide @2x Retina images
- Use higher quality JPG (90+ quality)
- Ensure source images are high resolution

### Parallax Not Working
- Check JavaScript console for errors
- Verify Motion.js is loaded
- Test scrolling inside phone frame (desktop)

### Performance Issues
- Compress images more aggressively
- Use WebP format
- Lazy load images
- Reduce total ad unit size

## Advanced: Custom Dimensions

If you need different dimensions:

1. Edit CSS in `src/pages/index.astro`
2. Find `.ad-unit`, `.product-main`, `.product-secondary`, `.cta-banner`
3. Modify `height`, `width`, or `flex` properties
4. Update this documentation for your team

The parallax animations will adapt to any size.

## QR Code Configuration

A scannable QR code is displayed in the bottom-left corner of the desktop view, allowing easy access to the mobile demo.

### How to Update the Demo URL

1. **Open the config file:** `src/config.js`

2. **Update the `demoUrl` value:**
   ```javascript
   export const config = {
     // For local development
     demoUrl: 'http://localhost:4322',

     // For production deployment
     // demoUrl: 'https://yourdomain.com',

     // ... rest of config
   };
   ```

3. **The QR code will automatically regenerate** with the new URL on page load

### QR Code Customization

You can customize the QR code appearance in `src/config.js`:

```javascript
qrCode: {
  // Error correction: 'L' (Low), 'M' (Medium), 'Q' (Quartile), 'H' (High)
  errorCorrectionLevel: 'M',

  // Margin around QR code (in modules)
  margin: 1,

  // Canvas size in pixels
  width: 120,

  // Colors
  color: {
    dark: '#000000',   // QR code dots
    light: '#FFFFFF'   // Background
  }
}
```

### QR Code Testing

1. **Desktop:** Open http://localhost:4322/ in your browser
2. **Scan QR code** with your phone's camera or QR code reader app
3. **Mobile browser opens** directly to the demo
4. **Test the parallax ads** on your actual device

**Note:** For production deployment, update `demoUrl` to your live URL before sharing.

---

**Platform:** Mobile-first (375px base width)
**Last Updated:** October 15, 2025
**Demo URL:** http://localhost:4322/ (configurable in `src/config.js`)
**Creative Folder:** `/public/creatives/`
**Responsive Breakpoint:** 768px

**View on Desktop:** iPhone mockup with parallax ads + scannable QR code
**View on Mobile:** Native full-screen experience