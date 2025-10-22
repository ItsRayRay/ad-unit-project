export const config = {
  // ============================================
  // DEMO URL CONFIGURATION
  // ============================================
  // Update this URL to your deployed demo URL
  // For local development: http://localhost:4322
  // For production: https://yourdomain.com
  demoUrl: 'https://refinery89.com/Fiatads/',

  // ============================================
  // QR CODE CONFIGURATION
  // ============================================
  // QR code displayed in bottom-left corner on desktop
  qrCode: {
    // Error correction level: 'L', 'M', 'Q', 'H'
    // Higher levels can recover more damaged data but create denser QR codes
    errorCorrectionLevel: 'M',

    // Margin around QR code (in modules/blocks)
    margin: 1,

    // Canvas width/height in pixels
    width: 120,

    // Colors
    color: {
      dark: '#000000',  // QR code dots
      light: '#FFFFFF'  // Background
    }
  },

  // ============================================
  // CREATIVE ASSET SIZES
  // ============================================
  // Mobile dimensions (375px base width)
  creativeSizes: {
    productMain: { width: 188, height: 320 },      // Left product section
    productSecondary: { width: 188, height: 320 }, // Right product section
    ctaBanner: { width: 375, height: 80 }          // Bottom CTA banner
  },

  // ============================================
  // CREATIVE ASSET PATHS
  // ============================================
  // Update these paths to point to your actual creative files
  // All paths are relative to /public/ folder

  creatives: {
    // Ad Unit 1 (4 stacked layers - parallax effect)
    adUnit1: {
      layerBackground: `url(${import.meta.env.BASE_URL}/creatives/fiat-background.png)`,  // Layer 1: BG.png - Background
      layerText: `url(${import.meta.env.BASE_URL}/creatives/fiat-text.png)`,              // Layer 2: Second Product.png
      layerCar: `url(${import.meta.env.BASE_URL}/creatives/fiat-car.png)`,                // Layer 3: Main Product.png
      floatingRocks: `url(${import.meta.env.BASE_URL}/creatives/adunit1-rock-overlay.png)`, // Floating rocks extending below the unit

      // Fallback text (not used with layer system, but kept for compatibility)
      fallbackText: {
        productMain: 'FIAT',
        ctaBanner: 'Fancy a taste of Italy?'
      }
    },

    // Ad Unit 2 (falls down - 4 layer system)
    adUnit2: {
      layerBackground: `url(${import.meta.env.BASE_URL}/creatives/adunit2/background.png)`,  // Layer 1: Background (placeholder)
      layerText: `url(${import.meta.env.BASE_URL}/creatives/adunit2/text.png)`,              // Layer 2: Text overlay (placeholder)
      layerCar: `url(${import.meta.env.BASE_URL}/creatives/adunit2/car.png)`,                // Layer 3: Car (placeholder)
      layerForeground: `url(${import.meta.env.BASE_URL}/creatives/adunit2/foreground.png)`,  // Layer 4: Foreground elements
      treeOverlay: `url(${import.meta.env.BASE_URL}/creatives/adunit2/tree-overlay.png)`,    // Floating tree that sits above the unit

      // Fallback text (not used with layer system, but kept for compatibility)
      fallbackText: {
        productMain: 'PURE',
        ctaBanner: 'Nature\'s Essence'
      }
    }
  }
};
