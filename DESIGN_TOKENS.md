# Design Tokens Reference

Complete reference for all design tokens used in the portfolio.

## Color System

### Primary Colors

#### Background
- **Dark Background**: `#050515` (HSL: 240° 8% 3%)
- **Charcoal Cards**: `#1a181d` (HSL: 268° 8% 11%)
- **Deep Dark**: `#0f0f17` (Near black for contrast)

#### Text & Foreground
- **Light Foreground**: `#faf9f7` (HSL: 36° 50% 98%)
- **Medium Text**: `#a8a5ac` (65% opacity, `#faf9f7`)
- **Dim Text**: `#5a5760` (40% opacity)
- **Disabled**: `#2d2a32` (20% opacity)

#### Borders & Dividers
- **Border Color**: `#2d2a32` (HSL: 268° 8% 20%)
- **Subtle Border**: `#1f1d23` (HSL: 268° 8% 14%)
- **Input Background**: `#0f0f17` (HSL: 240° 8% 9%)

### Accent Colors

#### Primary Accent (Red)
```
Hex: #dc2626
RGB: 220, 38, 38
HSL: 0°, 84%, 60%
Uses: Primary CTA buttons, primary brand elements, emphasis
```

#### Secondary Accent (Blue)
```
Hex: #3b82f6
RGB: 59, 130, 246
HSL: 219°, 100%, 60%
Uses: Alternative CTAs, secondary actions, accents
```

### Color Shades

#### Red Spectrum
- **Red-600**: `#dc2626` (HSL: 0° 84% 60%) ← Primary
- **Red-500**: `#ef4444` (HSL: 0° 84% 60%) ← Light variant
- **Red-700**: `#b91c1c` (HSL: 0° 91% 36%) ← Dark variant

#### Blue Spectrum
- **Blue-600**: `#2563eb` (HSL: 217° 91% 60%) ← Primary
- **Blue-500**: `#3b82f6` (HSL: 219° 100% 60%) ← Light variant
- **Blue-400**: `#60a5fa` (HSL: 217° 100% 70%) ← Lighter variant

#### Neutral Grays
- **Gray-950**: `#030712` (Almost black)
- **Gray-900**: `#111827` (Very dark)
- **Gray-800**: `#1f2937` (Dark charcoal)
- **Gray-700**: `#374151` (Medium dark)
- **Gray-600**: `#4b5563` (Medium)
- **Gray-500**: `#6b7280` (Light medium)
- **Gray-400**: `#9ca3af` (Light gray)
- **Gray-300**: `#d1d5db` (Very light)
- **Gray-200**: `#e5e7eb` (Almost white)
- **Gray-50**: `#f9fafb` (Pure white variant)

## Typography

### Font Families

#### Primary Font (Body Text)
```
Font: Inter
Weight: 400, 500, 600, 700, 800
Size: 14px - 16px (body)
Line Height: 1.5 - 1.6
Letter Spacing: 0.5px
```

#### Secondary Font (Code/Mono)
```
Font: Space Mono
Weight: 400, 700
Size: 12px - 14px
Line Height: 1.4
Uses: Code snippets, technical text
```

### Font Sizes

| Usage | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 (Hero) | 28-48px | 800 | 1.2 |
| H2 (Section) | 24-40px | 700 | 1.3 |
| H3 (Subsection) | 20-28px | 700 | 1.3 |
| H4 | 18-24px | 600 | 1.4 |
| Body Text | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Extra Small | 12px | 400 | 1.4 |

### Responsive Typography

```tsx
// Heading 1
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">

// Heading 2
<h2 className="text-4xl sm:text-5xl font-bold">

// Body Text
<p className="text-lg text-foreground/70">
```

## Spacing System

### Base Unit: 4px

| Value | Pixels | CSS Class |
|-------|--------|-----------|
| 1 | 4px | `p-1` |
| 2 | 8px | `p-2` |
| 3 | 12px | `p-3` |
| 4 | 16px | `p-4` |
| 6 | 24px | `p-6` |
| 8 | 32px | `p-8` |
| 12 | 48px | `p-12` |
| 16 | 64px | `p-16` |
| 20 | 80px | `p-20` |

### Common Spacing Patterns

```tsx
// Padding
<div className="p-4">                    // All sides: 16px
<div className="px-4 py-6">              // Horizontal: 16px, Vertical: 24px
<div className="p-6 md:p-8 lg:p-12">     // Responsive padding

// Margin
<div className="m-4">                    // All sides: 16px
<div className="my-8">                   // Vertical margin: 32px
<div className="mb-6">                   // Bottom margin: 24px

// Gap (Flexbox/Grid)
<div className="flex gap-4">             // Space between items: 16px
<div className="grid gap-6">             // Grid gap: 24px
<div className="flex gap-x-4 gap-y-6">   // Directional gaps
```

## Border Radius

| Name | Value | CSS Class |
|------|-------|-----------|
| None | 0px | `rounded-none` |
| Small | 4px | `rounded-sm` |
| Default | 12px | `rounded` |
| Medium | 10px | `rounded-md` |
| Large | 12px | `rounded-lg` |
| Extra Large | 16px | `rounded-xl` |
| 2XL | 20px | `rounded-2xl` |
| Full | 9999px | `rounded-full` |

## Shadow System

### Drop Shadows

```css
/* Small */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Extra Large */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Glow Effects

#### Red Glow (Primary)
```css
box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
/* Hover: 0 0 40px rgba(220, 38, 38, 0.5); */
```

#### Blue Glow (Secondary)
```css
box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
/* Hover: 0 0 40px rgba(59, 130, 246, 0.5); */
```

## Animation System

### Duration Reference

| Time | Use Case |
|------|----------|
| 150ms | Quick hover effects |
| 200ms | Toggle animations |
| 300ms | Standard transitions |
| 500ms | Page transitions |
| 600ms | Section entrance |
| 1000ms | Long sequences |
| 2000ms | Slow loops |
| 3000ms | Continuous animations |

### Easing Functions

```css
/* Linear */
transition-timing-function: linear;

/* Ease Out (Recommended for entrance) */
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

/* Ease In Out */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce */
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Animation Library

#### Fade Animations
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
Duration: 600ms

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
Duration: 600ms
```

#### Slide Animations
```css
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
Duration: 600ms
```

#### Continuous Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
Duration: 3s

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
  50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.5); }
}
Duration: 3s
```

## Glassmorphism Effects

### Glass Background
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
```

### Glass Dark Variant
```css
background: rgba(0, 0, 0, 0.3);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.05);
border-radius: 12px;
```

### Frosted Effect
```css
background-color: hsl(var(--card));
background-image: 
  linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
backdrop-filter: blur(10px) saturate(180%);
```

## Gradient System

### Primary Gradients

#### Red to Dark
```css
background: linear-gradient(to right, #dc2626, #991b1b);
```

#### Blue to Dark
```css
background: linear-gradient(to right, #3b82f6, #1e40af);
```

#### Red to Blue Mix
```css
background: linear-gradient(to right, #dc2626, #8b5cf6, #3b82f6);
```

### Text Gradients
```css
background: linear-gradient(to right, #dc2626, #3b82f6);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

## Opacity Scale

| Level | Value | Use Case |
|-------|-------|----------|
| Opaque | 100% | Primary elements |
| High | 80% | Secondary elements |
| Medium | 60% | Tertiary elements |
| Low | 40% | Disabled/subtle |
| Very Low | 20% | Hover overlays |
| Minimal | 10% | Background tints |
| Disabled | 50% | Disabled elements |

## Responsive Breakpoints

```
Mobile (default)     0px - 640px
Tablet (sm:)         640px - 768px
Desktop (md:)        768px - 1024px
Large (lg:)          1024px - 1280px
XL (xl:)             1280px+
```

## Component Size Tokens

### Buttons

| Size | Padding | Height | Font Size |
|------|---------|--------|-----------|
| Small | px-3 py-2 | 36px | 14px |
| Medium | px-4 py-2 | 40px | 14px |
| Large | px-8 py-4 | 48px | 16px |
| XL | px-8 py-6 | 56px | 18px |

### Icons

| Size | Use Case |
|------|----------|
| 16px | Small inline, metadata |
| 20px | Standard, lists |
| 24px | Buttons, headers |
| 32px | Large cards |
| 40px | Hero elements |
| 48px | Feature highlights |

## Z-Index Scale

```
z-0    0       Base elements
z-10   10      Dropdowns, popovers
z-20   20      Sticky elements
z-30   30      Fixed floating CTAs
z-40   40      Header/navigation
z-50   50      Modals, overlays
z-auto auto    Default stacking
```

## Transition Defaults

```css
/* Standard transition */
transition-property: all;
transition-duration: 300ms;
transition-timing-function: ease-out;

/* For colors */
transition-property: color, background-color;
transition-duration: 200ms;

/* For transforms */
transition-property: transform;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
```

## Dark Mode Configuration

```tsx
// All components use dark mode by default
// Set in html element: <html className="dark">

// CSS Variables for dark mode
:root {
  --background: 0 0% 2%;          // #050515
  --foreground: 0 0% 98%;         // #faf9f7
  --card: 15 14% 11%;             // #1a181d
  --border: 15 14% 20%;           // #2d2a32
  --accent: 0 84% 60%;            // #dc2626
  --accent-blue: 219 100% 60%;    // #3b82f6
}
```

## Usage Examples

### Using Tokens in Code

```tsx
// Colors
<div className="bg-background text-foreground">
<button className="bg-accent text-accent-foreground">
<div className="border border-border">

// Typography
<h1 className="text-5xl font-bold">
<p className="text-lg font-normal leading-relaxed">

// Spacing
<div className="p-6 gap-4 mb-8">

// Animations
<div className="animate-fadeInUp">
<div className="transition-smooth hover:scale-105">

// Glassmorphism
<div className="glass rounded-xl p-8">
<div className="glass-dark">

// Gradients
<button className="gradient-accent">
<div className="text-gradient">
```

## Customizing Tokens

### To Change Primary Accent

**File:** `/app/globals.css`

```css
:root {
  --accent: 0 84% 60%;      /* Change HSL value */
}
```

**Example:** Purple instead of Red
```css
--accent: 280 85% 60%;      /* Purple */
```

### To Add New Token

**Step 1:** Define in `:root`
```css
--my-custom-color: 100 50% 50%;
```

**Step 2:** Update Tailwind config
```tsx
// tailwind.config.ts
colors: {
  myCustom: 'hsl(var(--my-custom-color))',
}
```

**Step 3:** Use in components
```tsx
<div className="bg-myCustom">
```

---

## Quick Reference Cheat Sheet

### Colors
- **Background**: `#050515` (use `bg-background`)
- **Text**: `#faf9f7` (use `text-foreground`)
- **Primary Accent**: `#dc2626` (use `bg-accent` or `text-accent`)
- **Secondary Accent**: `#3b82f6` (use `bg-accent-blue`)

### Spacing
- **Padding**: `p-4`, `p-6`, `p-8`
- **Margin**: `m-4`, `my-6`
- **Gap**: `gap-4`, `gap-6`

### Effects
- **Glass**: `glass` or `glass-dark`
- **Glow**: `glow-accent` or `glow-accent-blue`
- **Rounded**: `rounded-lg`, `rounded-xl`

### Animations
- **Fade In**: `animate-fadeInUp`, `animate-fadeInDown`
- **Slide**: `animate-slideInLeft`, `animate-slideInRight`
- **Continuous**: `animate-float`, `animate-glow`

### Responsive
- **Mobile**: (default)
- **Tablet**: `md:` prefix
- **Desktop**: `lg:` prefix

---

**All tokens are defined in `/app/globals.css` and `/tailwind.config.ts`**

For implementation details, see `COMPONENT_GUIDE.md`

