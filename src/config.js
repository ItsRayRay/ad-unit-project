export const config = {
  // ============================================
  // DEMO URL CONFIGURATION
  // ============================================
  // Update this URL to your deployed demo URL
  // For local development: http://localhost:4322
  // For production: https://yourdomain.com
  demoUrl: 'https://ad-unit-project-git-main-itsrayrays-projects.vercel.app',

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
    // Ad Unit 1 (slides UP from below)
    adUnit1: {
      productMain: '/creatives/ad1-product-main.jpg',     // Left section
      productSecondary: '/creatives/ad1-product-secondary.jpg', // Right section
      ctaBanner: '/creatives/ad1-cta-banner.jpg',         // Bottom section

      // Fallback text (displayed if images don't load)
      fallbackText: {
        productMain: 'ADORE',
        ctaBanner: 'Discover the Power'
      }
    },

    // Ad Unit 2 (slides DOWN from above)
    adUnit2: {
      productMain: '/creatives/ad2-product-main.jpg',     // Left section
      productSecondary: '/creatives/ad2-product-secondary.jpg', // Right section
      ctaBanner: '/creatives/ad2-cta-banner.jpg',         // Bottom section

      // Fallback text (displayed if images don't load)
      fallbackText: {
        productMain: 'PURE',
        ctaBanner: 'Nature\'s Essence'
      }
    }
  }
};
