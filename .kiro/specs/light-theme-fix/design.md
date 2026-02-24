# Design Document: Light Theme Fix

## Overview

This design addresses the light theme appearance issue where backgrounds display with a grayish, washed-out look instead of bright, clean white. The root cause is the use of overly muted HSL values (96.1% lightness) for secondary and muted backgrounds in the `:root` CSS scope.

The fix involves adjusting HSL lightness values in `src/index.css` to achieve:
- Pure white primary backgrounds (100% lightness)
- Bright secondary backgrounds (≥98% lightness)
- Subtle muted backgrounds (≥96% lightness but brighter than current)
- Proper border visibility through adjusted lightness values (85-92%)
- Maintained visual hierarchy through subtle lightness differences and shadows

The dark theme will remain completely unchanged, ensuring no regression in existing functionality.

## Architecture

### Theme System Structure

The application uses a CSS custom property-based theming system with three layers:

1. **CSS Variable Layer** (`src/index.css`)
   - `:root` scope defines light theme variables
   - `.dark` scope defines dark theme variables
   - All colors use HSL format: `H S% L%`

2. **Theme Provider Layer** (`src/components/ThemeProvider.tsx`)
   - React context managing theme state ("light" | "dark" | "system")
   - Applies/removes `.dark` class on document root
   - Persists theme choice to localStorage

3. **Component Layer**
   - Components use Tailwind utility classes (`bg-background`, `bg-secondary`, etc.)
   - Tailwind resolves these to CSS custom properties
   - No direct color values in components

### Change Scope

The fix is isolated to the `:root` CSS scope in `src/index.css`. Specifically:
- Background-related variables: `--background`, `--secondary`, `--muted`, `--card`
- Border-related variables: `--border`, `--input`
- Sidebar variables: `--sidebar-background`, `--sidebar-accent`

No changes to:
- `.dark` scope variables
- Theme provider logic
- Component implementations
- Tailwind configuration

## Components and Interfaces

### Modified CSS Variables

```css
:root {
  /* Primary backgrounds - Pure white */
  --background: 0 0% 100%;
  --card: 0 0% 100%;
  --popover: 0 0% 100%;
  
  /* Secondary backgrounds - Very bright */
  --secondary: 210 40% 98.5%;
  --sidebar-background: 0 0% 99%;
  --sidebar-accent: 240 4.8% 98.5%;
  
  /* Muted backgrounds - Bright but subtle */
  --muted: 210 40% 97%;
  
  /* Borders - Visible against white */
  --border: 214 32% 88%;
  --input: 214 32% 88%;
  --sidebar-border: 220 13% 89%;
}
```

### Affected Components

While no component code changes are required, the following components will visually benefit:
- Cards and elevated surfaces
- Form inputs and borders
- Sidebar navigation
- Secondary content areas
- Muted UI elements (badges, tags, etc.)

### Theme Provider Interface

No changes to the existing interface:

```typescript
type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
```

## Data Models

### HSL Color Model

All theme colors use HSL format stored as CSS custom properties:

```typescript
interface HSLColor {
  hue: number        // 0-360
  saturation: number // 0-100 (stored as percentage)
  lightness: number  // 0-100 (stored as percentage)
}

// CSS format: "H S% L%"
// Example: "210 40% 98%" = hsl(210, 40%, 98%)
```

### Theme State Model

```typescript
interface ThemeState {
  theme: "dark" | "light" | "system"
  storageKey: string
  resolvedTheme: "dark" | "light" // Computed from theme + system preference
}
```

### Color Variable Registry

```typescript
interface ColorVariableSet {
  backgrounds: {
    primary: string    // --background
    card: string       // --card
    popover: string    // --popover
    secondary: string  // --secondary
    muted: string      // --muted
  }
  borders: {
    border: string     // --border
    input: string      // --input
  }
  sidebar: {
    background: string // --sidebar-background
    accent: string     // --sidebar-accent
    border: string     // --sidebar-border
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Light Theme Background Brightness

*For any* background-related CSS variable in light theme (--background, --card, --popover, --secondary, --muted, --sidebar-background, --sidebar-accent), the HSL lightness value should meet minimum brightness thresholds: primary backgrounds (--background, --card, --popover) must be exactly 100%, secondary backgrounds (--secondary, --sidebar-background, --sidebar-accent) must be ≥98%, and muted backgrounds (--muted) must be ≥96%.

**Validates: Requirements 1.1, 1.2, 1.3, 2.3**

### Property 2: Visual Hierarchy Preservation

*For any* set of background variables in light theme, the lightness values should maintain a descending hierarchy: background lightness ≥ secondary lightness ≥ muted lightness, with measurable differences between each level to ensure visual distinction.

**Validates: Requirements 1.4**

### Property 3: Color Variable Completeness

*For any* required background or border color variable (--background, --foreground, --card, --secondary, --muted, --border, --input, --sidebar-background, --sidebar-accent, --sidebar-border), it must be defined in both :root scope and .dark scope.

**Validates: Requirements 2.1, 2.2**

### Property 4: HSL Format Consistency

*For any* color variable value in the theme system, it must match the HSL format pattern "H S% L%" where H is 0-360, S is 0-100, and L is 0-100.

**Validates: Requirements 2.4**

### Property 5: Hardcoded Color Detection

*For any* component file in the src/components directory, it should not contain hardcoded color values (hex codes like #FFFFFF, rgb() functions, or direct color names) that bypass the theme system, except within CSS variable definitions.

**Validates: Requirements 3.4**

### Property 6: Light Theme Contrast Requirements

*For any* foreground/background color pair in light theme, the contrast ratio must be ≥4.5:1 for text, ≥3:1 for borders, and accent colors must have ≥3:1 contrast ratio against backgrounds to ensure readability and visual distinction.

**Validates: Requirements 4.1, 4.2, 4.3**

### Property 7: Dark Theme Preservation

*For any* color variable in the .dark scope, its HSL value must remain unchanged after light theme modifications are applied, ensuring no regression in dark theme appearance.

**Validates: Requirements 4.4, 6.1, 6.4**

### Property 8: Theme Switch Performance

*For any* theme switch operation (light to dark or dark to light), all CSS custom properties on the document root must be updated within 100ms of the theme change trigger.

**Validates: Requirements 5.1, 5.2**

### Property 9: Theme Persistence

*For any* theme change operation, the selected theme value must be persisted to localStorage under the configured storage key immediately after the change.

**Validates: Requirements 5.4**

### Property 10: Border Visibility in Light Theme

*For any* border-related CSS variable in light theme (--border, --input, --sidebar-border), the lightness value must be between 85% and 92%, and the contrast ratio against white backgrounds (100% lightness) must be ≥3:1 to ensure visibility.

**Validates: Requirements 7.1, 7.2, 7.3**

### Property 11: Card Background Brightness

*For any* card-related background variable in light theme (--card, --popover), the lightness value must be ≥99% to maintain clean, bright card surfaces that are distinguishable through shadows rather than color differences.

**Validates: Requirements 8.1, 8.3**

## Error Handling

### CSS Variable Fallbacks

If a CSS variable is undefined or malformed:
- Tailwind will fall back to default values
- Browser will ignore invalid HSL values
- No runtime errors, but visual degradation

**Mitigation:**
- Validate all CSS variables during build
- Use TypeScript types for theme values
- Property-based tests verify variable completeness

### Theme Switch Failures

If localStorage is unavailable or theme application fails:
- Theme provider defaults to "system" theme
- Falls back to browser's `prefers-color-scheme`
- No crash, graceful degradation

**Mitigation:**
- Try-catch around localStorage operations
- System theme as ultimate fallback
- Test theme switching with localStorage disabled

### Invalid HSL Values

If HSL values are malformed (wrong format, out of range):
- Browser ignores the property
- Falls back to inherited or default values
- Visual inconsistency but no crash

**Mitigation:**
- Validate HSL format in tests
- Use consistent format in all definitions
- Property tests verify format compliance

### Contrast Ratio Violations

If color combinations fail WCAG contrast requirements:
- Content may be hard to read
- Accessibility issues for users
- No technical error

**Mitigation:**
- Property tests verify contrast ratios
- Manual accessibility review
- Automated contrast checking in CI

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests for comprehensive coverage:

**Unit Tests** focus on:
- Specific examples of theme switching
- Edge cases (localStorage unavailable, invalid theme values)
- Integration between ThemeProvider and DOM
- Specific color value examples

**Property-Based Tests** focus on:
- Universal properties across all color variables
- HSL format validation for all theme values
- Contrast ratio requirements for all color pairs
- Performance requirements across multiple switches

Together, these approaches ensure both concrete correctness (unit tests) and general correctness (property tests).

### Property-Based Testing Configuration

**Library:** `fast-check` (JavaScript/TypeScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number
- Tag format: `Feature: light-theme-fix, Property {N}: {property description}`

**Test Organization:**
```
src/
  __tests__/
    theme/
      theme.unit.test.ts          # Unit tests
      theme.properties.test.ts    # Property-based tests
```

### Property Test Implementations

Each correctness property maps to a single property-based test:

1. **Property 1 Test:** Generate random theme states, verify background lightness thresholds
2. **Property 2 Test:** Generate background variable sets, verify hierarchy ordering
3. **Property 3 Test:** Check all required variables exist in both scopes
4. **Property 4 Test:** Generate color values, verify HSL format compliance
5. **Property 5 Test:** Scan component files for hardcoded colors (static analysis)
6. **Property 6 Test:** Generate foreground/background pairs, calculate contrast ratios
7. **Property 7 Test:** Compare dark theme values before/after changes
8. **Property 8 Test:** Measure theme switch timing across multiple iterations
9. **Property 9 Test:** Verify localStorage persistence after theme changes
10. **Property 10 Test:** Generate border colors, verify lightness range and contrast
11. **Property 11 Test:** Verify card background lightness values

### Unit Test Coverage

**Theme Provider Tests:**
- Theme initialization with default values
- Theme switching between light/dark/system
- localStorage persistence
- System theme detection
- Edge case: localStorage unavailable

**CSS Variable Tests:**
- Specific light theme values are correct
- Specific dark theme values unchanged
- Border visibility examples
- Card background examples

**Integration Tests:**
- Theme switch updates DOM class
- CSS variables applied correctly
- Visual regression tests (manual or with tool)

### Manual Testing Checklist

- [ ] Light theme displays bright white backgrounds
- [ ] Dark theme appearance unchanged
- [ ] Theme toggle button works correctly
- [ ] Theme persists across page reloads
- [ ] All borders visible in light theme
- [ ] Cards distinguishable from background
- [ ] Text readable in both themes
- [ ] No visual flashing during theme switch
- [ ] System theme preference respected

### Accessibility Testing

- [ ] WCAG AA contrast ratios met (4.5:1 for text)
- [ ] Border contrast sufficient (3:1 minimum)
- [ ] Theme toggle keyboard accessible
- [ ] Screen reader announces theme changes
- [ ] High contrast mode compatibility

### Performance Testing

- [ ] Theme switch completes within 100ms
- [ ] No layout shift during theme change
- [ ] No memory leaks from repeated switching
- [ ] CSS variable updates are batched
