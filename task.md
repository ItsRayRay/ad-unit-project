Here’s the **complete Markdown layout spec**, written in the same documentation style as your earlier *Mobile Ad Unit (375×400)* visual layout — now with the new **striped rock overlay** concept and note that it applies **only to the first ad unit** 👇

---

## 🧱 Visual Layout — Rock Overlay Parallax (First Ad Unit Only)

```
Ad Unit (e.g. 375px × 400px)
┌────────────────────────────────────────────┐
│  TEXT DIV (CTA + Headline)                 │
│  "Fancy a taste of Italy?"                 │
│  [ Discover now ]                          │
│────────────────────────────────────────────│
│  PRODUCT DIV (Car Image / Main Visual)     │
│                                            │
│               🚗 FIAT Car                  │
│                                            │
│────────────────────────────────────────────│
│  ROCK / STRIPED OVERLAY (Z-index: 3)       │  ← overlaps lower part of ad
│   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│────────────────────────────────────────────│
│  ARTICLE PAGE BACKGROUND                   │  ← visible underneath overlay
│   (Partially covered by overlay)           │
└────────────────────────────────────────────┘
```

---

## ⚙️ Layering / Z-Index Structure

| Layer          | Element                | Positioning                         | Notes                                             |
| :------------- | :--------------------- | :---------------------------------- | :------------------------------------------------ |
| **z-index: 4** | CTA / Text DIV         | Static inside ad                    | “Fancy a taste of Italy?” + “Discover now”        |
| **z-index: 3** | Product DIV (Car)      | Relative                            | Main visual focus; slight parallax possible       |
| **z-index: 2** | Rock / Striped Overlay | `position: absolute; bottom: -50%;` | 50% overlays ad, 50% extends over article content |
| **z-index: 1** | Article Content        | Normal flow                         | Underneath, providing depth illusion              |

---

## 🪄 Parallax / Visual Behavior

* The **rock (striped) overlay** sits at the **bottom edge** of the first ad unit.
* It **partly overlaps the ad (upper 50%)** and **extends below into the article (lower 50%)**.
* This creates a **3D parallax effect**, visually blending the ad into the page.
* The overlay can use **scroll-based transform** or **CSS `translateY()`** for depth when the user scrolls.
* The **product (car)** and **text CTA** remain fixed within the ad boundaries and always stay visible above the overlay.

---

## 🧩 Implementation Notes

| Property              | Description                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------------- |
| **Scope**             | This visual effect applies **only to the first ad unit** on the page.                              |
| **Positioning**       | Use `position: relative` on the main ad container and `position: absolute` on the striped overlay. |
| **Overlap Ratio**     | Recommended overlap: `50%` (half over ad, half extending over the page).                           |
| **Layer Depth**       | Overlay: `z-index: 2`; Product/CTA: `z-index: 3+`.                                                 |
| **Parallax Support**  | Optional scroll-linked effect can be added for subtle movement.                                    |
| **Fallback Behavior** | If disabled, overlay sits statically below the ad without overlap.                                 |

---

Would you like me to add a **small CSS reference block** below this (non-functional, just for documentation) showing the `z-index` and position setup visually for your team?
