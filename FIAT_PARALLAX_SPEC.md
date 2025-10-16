# FIAT Ad Parallax Implementation Specification

## Project Overview

We're creating a sophisticated parallax advertising effect for the first ad unit on the page, using a FIAT advertisement as the creative. The goal is to create depth and visual interest by having different layers move at different speeds (or stay fixed) as the user scrolls.

## Visual Concept

Based on the FIAT ad image provided, we want to create a layered parallax effect where:

- **Fixed elements stay stationary** while content scrolls behind/through them
- **Scrolling elements move with the page** creating the illusion of depth
- **Overlaying rocks** remain fixed in the foreground, creating a "window" effect

This creates a dramatic, cinematic feeling where the user scrolls through the ad rather than past it.

---

## Layer Structure

The ad is composed of **4 distinct layers**, from back to front:

### Layer 1: Background (FIXED)
- **Content**: FIAT branding text + building/background scene
- **Behavior**: Stays completely fixed, doesn't move during scroll
- **Z-index**: 1 (bottom layer)
- **Purpose**: Provides stable backdrop

### Layer 2: Text Content (SCROLLS)
- **Content**: "Fancy a taste of Italy?" headline text + "Discover now" CTA text
- **Behavior**: Scrolls naturally with page content (animated by parallax wrapper)
- **Z-index**: 2
- **Purpose**: Main messaging that moves through the scene

### Layer 3: Car (SCROLLS)
- **Content**: Pink FIAT car image
- **Behavior**: Scrolls naturally with page content (animated by parallax wrapper)
- **Z-index**: 3
- **Purpose**: Hero product that moves through the scene

### Layer 4: Rocks Overlay (FIXED)
- **Content**: Rocky terrain/stones in foreground
- **Behavior**: Stays completely fixed, overlays both the ad AND the article content below
- **Z-index**: 4 (top layer)
- **Purpose**: Creates foreground depth, acts as a "frame" that content scrolls behind

---

## Parallax Behavior

### On Scroll:

1. **Rocks (Layer 4)** - Completely stationary, user scrolls behind them
2. **Car + Text (Layers 2 & 3)** - Move downward as user scrolls, animated by Motion.js
3. **Background (Layer 1)** - Completely stationary
4. **Result**: Creates illusion of depth as moving elements slide between fixed layers

### Animation Details:

- The existing `parallax-up` animation (translateY from 0% to 80%) applies to the **wrapper containing Layers 2 & 3**
- Layers 1 & 4 are **outside** the animated wrapper, so they remain fixed
- No changes needed to Motion.js animation code - just layer reorganization

---

## HTML Structure

### Current Structure (Working, Second Ad Unit):
```html
<div class="ad-unit" data-ad="unit-2">
    <div class="ad-content">
        <div class="creative-wrapper parallax-down">
            <div class="creative-top">
                <div class="product-main"></div>
                <div class="product-secondary"></div>
            </div>
            <div class="cta-banner"></div>
        </div>
    </div>
</div>
```

### New Structure (Ad Unit 1 - FIAT Parallax):
```html
<div class="ad-unit" data-ad="unit-1">
    <div class="ad-content">
        <div class="creative-wrapper parallax-up">
            <div class="layer-background"></div>  <!-- FIAT + building -->
            <div class="layer-text"></div>        <!-- Text content -->
            <div class="layer-car"></div>         <!-- Car -->
            <div class="layer-rocks"></div>       <!-- Rocks overlay -->
        </div>
    </div>
</div>
```

### Key Points:
- Keep the `creative-wrapper parallax-up` wrapper (Motion.js needs this!)
- Replace the flexbox 3-section layout with 4 absolute-positioned layers
- All 4 layers stack on top of each other within the wrapper

---

## CSS Requirements

### For Ad Unit 1 Only:

```css
/* Override flexbox for Ad Unit 1 */
[data-ad="unit-1"] .creative-wrapper.parallax-up {
    display: block; /* Not flex */
}

/* Stack all 4 layers */
[data-ad="unit-1"] .creative-wrapper.parallax-up .layer-background,
[data-ad="unit-1"] .creative-wrapper.parallax-up .layer-text,
[data-ad="unit-1"] .creative-wrapper.parallax-up .layer-car,
[data-ad="unit-1"] .creative-wrapper.parallax-up .layer-rocks {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

/* Layer 1: Background */
[data-ad="unit-1"] .layer-background {
    z-index: 1;
    background-size: cover;
    background-position: center;
}

/* Layer 2: Text */
[data-ad="unit-1"] .layer-text {
    z-index: 2;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    pointer-events: none;
}

/* Layer 3: Car */
[data-ad="unit-1"] .layer-car {
    z-index: 3;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
}

/* Layer 4: Rocks */
[data-ad="unit-1"] .layer-rocks {
    z-index: 4;
    background-size: cover;
    background-position: bottom center;
    pointer-events: none;
}
```

### Important:
- Scoped to `[data-ad="unit-1"]` only
- Don't touch Ad Unit 2 CSS
- Keep all existing parallax animation CSS intact

---

## Configuration (src/config.js)

### Current Config (3 images per ad unit):
```javascript
adUnit1: {
    productMain: 'url-to-image',
    productSecondary: 'url-to-image',
    ctaBanner: 'url-to-image'
}
```

### New Config Needed (4 layers):
```javascript
adUnit1: {
    layerBackground: 'url-to-fiat-building-background.png',
    layerText: 'url-to-text-overlay.png',
    layerCar: 'url-to-car.png',
    layerRocks: 'url-to-rocks-foreground.png',
    fallbackText: {
        // Keep for when images aren't loaded
    }
}
```

### CSS Variables Update:
```css
<style define:vars={{
    adUnit1LayerBackground: config.creatives.adUnit1.layerBackground,
    adUnit1LayerText: config.creatives.adUnit1.layerText,
    adUnit1LayerCar: config.creatives.adUnit1.layerCar,
    adUnit1LayerRocks: config.creatives.adUnit1.layerRocks,
    /* ... keep adUnit2 vars unchanged ... */
}}>

[data-ad="unit-1"] .layer-background {
    background-image: url(var(--adUnit1LayerBackground));
}
[data-ad="unit-1"] .layer-text {
    background-image: url(var(--adUnit1LayerText));
}
[data-ad="unit-1"] .layer-car {
    background-image: url(var(--adUnit1LayerCar));
}
[data-ad="unit-1"] .layer-rocks {
    background-image: url(var(--adUnit1LayerRocks));
}
</style>
```

---

## Image Asset Requirements

### You need to create/extract 4 separate PNG images from the FIAT ad:

1. **layer-background.png** (375px × 400px)
   - FIAT text/branding
   - Building/street scene
   - Should fill entire ad space
   - This is the "base" layer

2. **layer-text.png** (375px × 400px)
   - "Fancy a taste of Italy?" text
   - "Discover now" CTA button text
   - Transparent background
   - Text positioned where you want it to appear

3. **layer-car.png** (375px × 400px)
   - Pink FIAT car only
   - Transparent background
   - Car positioned in center or wherever desired

4. **layer-rocks.png** (375px × 400px)
   - Rocky stones/terrain foreground
   - Transparent background
   - Rocks at bottom, possibly extending up sides
   - This overlays everything else

### Image Prep Tips:
- Use Photoshop/Figma to separate layers from the original ad
- Keep all images at 375×400px (mobile ad unit size)
- Export as PNG with transparency where needed
- Background layer can be JPG if no transparency needed

---

## Implementation Steps

### Phase 1: Structure Only (CURRENT - DONE ✓)
- [x] Change HTML div structure for Ad Unit 1
- [x] Keep parallax-up wrapper intact
- [x] Replace 3-section layout with 4 layers
- [x] Verify parallax animation still triggers

### Phase 2: CSS Styling (NEXT)
- [ ] Add CSS to override flexbox for Ad Unit 1
- [ ] Style all 4 layers with absolute positioning
- [ ] Set z-index stacking order
- [ ] Add temp colored backgrounds to visualize layers
- [ ] Test that layers stack correctly

### Phase 3: Image Assets
- [ ] Extract/create 4 layer images from FIAT ad
- [ ] Save to `/public/creatives/` folder
- [ ] Name consistently: `fiat-background.png`, `fiat-text.png`, etc.

### Phase 4: Configuration
- [ ] Update `src/config.js` with new structure
- [ ] Add 4 image paths for adUnit1
- [ ] Update CSS variables in `<style define:vars>`
- [ ] Wire up background-image to each layer

### Phase 5: Refinement
- [ ] Adjust background-size and background-position for each layer
- [ ] Fine-tune parallax animation speed if needed
- [ ] Test on both desktop (phone frame) and actual mobile
- [ ] Verify rocks overlay extends properly
- [ ] Check that Ad Unit 2 still works normally

---

## Testing Checklist

- [ ] Ad Unit 1 shows all 4 layers stacked correctly
- [ ] Background layer visible and fixed
- [ ] Text layer visible and scrolls with wrapper
- [ ] Car layer visible and scrolls with wrapper
- [ ] Rocks layer visible and fixed on top
- [ ] Parallax animation triggers on scroll
- [ ] Ad Unit 2 unchanged and still working
- [ ] Desktop phone frame view works
- [ ] Actual mobile view works
- [ ] No JavaScript errors in console
- [ ] Rocks overlay doesn't break article content below

---

## Key Principles

1. **Only modify Ad Unit 1** - Don't break the working Ad Unit 2
2. **Keep the parallax-up wrapper** - Motion.js needs this selector
3. **Don't touch JavaScript** - Animation code is working, just needs new structure
4. **Scope all CSS to [data-ad="unit-1"]** - Prevents bleeding into other ads
5. **Work incrementally** - Structure → CSS → Images → Config
6. **Test after each phase** - Catch issues early

---

## Common Pitfalls to Avoid

- ❌ Don't remove the `.creative-wrapper.parallax-up` wrapper
- ❌ Don't modify the Motion.js animation code
- ❌ Don't change Ad Unit 2 structure
- ❌ Don't use `display: flex` on Ad Unit 1 wrapper
- ❌ Don't forget z-index layering
- ❌ Don't skip testing between phases

---

## Success Criteria

The implementation is complete when:

✅ User scrolls down the page
✅ FIAT background stays fixed
✅ Car and text slide down smoothly (parallax animation)
✅ Rocks stay fixed on top, creating a "window" effect
✅ Creates illusion of depth as elements move at different speeds
✅ Ad Unit 2 still works normally
✅ No console errors
✅ Works on both desktop and mobile

---

## Reference: Current Ad Unit 1 State

**HTML** (src/pages/index.astro:449-462):
```html
<div class="ad-unit" data-ad="unit-1">
    <span class="ad-label">Advertisement</span>
    <div class="ad-content">
        <div class="creative-wrapper parallax-up">
            <div class="layer-background"></div>
            <div class="layer-text"></div>
            <div class="layer-car"></div>
            <div class="layer-rocks"></div>
        </div>
    </div>
</div>
```

**Status**: Structure complete, needs CSS + images

---

## Questions?

If confused at any point, refer back to:
- The FIAT ad image: Shows what final effect should look like
- Ad Unit 2: Working example of parallax animation
- This spec: Complete implementation plan

**Next Step**: Phase 2 - Add CSS for the 4 layers
