// patterns.ts
export interface PatternMatch {
  category: string;
  subcategory: string;
  type: "pattern" | "positive" | "concern";
  pattern: string;
  line: number;
  lineContent: string;
  file: string;
}

interface PatternRule {
  category: string;
  subcategory: string;
  type: "pattern" | "positive" | "concern";
  pattern: string;
  regex: RegExp;
}

const rules: PatternRule[] = [
  // === Components - Layout ===
  { category: "components-layout", subcategory: "navigation", type: "pattern", pattern: "TabView", regex: /\bTabView\b/ },
  { category: "components-layout", subcategory: "navigation", type: "pattern", pattern: "NavigationStack", regex: /\bNavigationStack\b/ },
  { category: "components-layout", subcategory: "navigation", type: "pattern", pattern: "NavigationSplitView", regex: /\bNavigationSplitView\b/ },
  { category: "components-layout", subcategory: "navigation", type: "pattern", pattern: "NavigationView", regex: /\bNavigationView\b/ },
  { category: "components-layout", subcategory: "navigation", type: "pattern", pattern: "NavigationLink", regex: /\bNavigationLink\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "List", regex: /\bList\s*\{/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "Form", regex: /\bForm\s*\{/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "ScrollView", regex: /\bScrollView\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "LazyVGrid", regex: /\bLazyVGrid\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "LazyHGrid", regex: /\bLazyHGrid\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "LazyVStack", regex: /\bLazyVStack\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "LazyHStack", regex: /\bLazyHStack\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "GeometryReader", regex: /\bGeometryReader\b/ },
  { category: "components-layout", subcategory: "layout", type: "pattern", pattern: "ViewThatFits", regex: /\bViewThatFits\b/ },
  { category: "components-layout", subcategory: "layout", type: "positive", pattern: "adaptiveLayout", regex: /\.adaptive\(minimum:/ },

  // === Components - Selection ===
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "Picker", regex: /\bPicker\b/ },
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "DatePicker", regex: /\bDatePicker\b/ },
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "ColorPicker", regex: /\bColorPicker\b/ },
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "Toggle", regex: /\bToggle\b/ },
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "Slider", regex: /\bSlider\b/ },
  { category: "components-selection", subcategory: "controls", type: "pattern", pattern: "Stepper", regex: /\bStepper\b/ },

  // === Components - Actions ===
  { category: "components-actions", subcategory: "buttons", type: "pattern", pattern: "Button", regex: /\bButton\b/ },
  { category: "components-actions", subcategory: "buttons", type: "pattern", pattern: "Menu", regex: /\bMenu\s*\{/ },
  { category: "components-actions", subcategory: "buttons", type: "pattern", pattern: "Link", regex: /\bLink\s*\(/ },
  { category: "components-actions", subcategory: "buttons", type: "pattern", pattern: "ShareLink", regex: /\bShareLink\b/ },
  { category: "components-actions", subcategory: "buttons", type: "pattern", pattern: "EditButton", regex: /\bEditButton\b/ },
  { category: "components-actions", subcategory: "swipeActions", type: "pattern", pattern: "swipeActions", regex: /\.swipeActions\b/ },
  { category: "components-actions", subcategory: "contextMenu", type: "pattern", pattern: "contextMenu", regex: /\.contextMenu\b/ },

  // === Components - Presentation ===
  { category: "components-presentation", subcategory: "modals", type: "pattern", pattern: "sheet", regex: /\.sheet\b/ },
  { category: "components-presentation", subcategory: "modals", type: "pattern", pattern: "fullScreenCover", regex: /\.fullScreenCover\b/ },
  { category: "components-presentation", subcategory: "modals", type: "pattern", pattern: "popover", regex: /\.popover\b/ },
  { category: "components-presentation", subcategory: "alerts", type: "pattern", pattern: "alert", regex: /\.alert\b/ },
  { category: "components-presentation", subcategory: "alerts", type: "pattern", pattern: "confirmationDialog", regex: /\.confirmationDialog\b/ },
  { category: "components-presentation", subcategory: "progress", type: "pattern", pattern: "ProgressView", regex: /\bProgressView\b/ },
  { category: "components-presentation", subcategory: "content", type: "pattern", pattern: "GroupBox", regex: /\bGroupBox\b/ },
  { category: "components-presentation", subcategory: "content", type: "pattern", pattern: "DisclosureGroup", regex: /\bDisclosureGroup\b/ },
  { category: "components-presentation", subcategory: "content", type: "pattern", pattern: "Label", regex: /\bLabel\s*\(/ },

  // === Components - Text Input ===
  { category: "components-textinput", subcategory: "fields", type: "pattern", pattern: "TextField", regex: /\bTextField\b/ },
  { category: "components-textinput", subcategory: "fields", type: "pattern", pattern: "SecureField", regex: /\bSecureField\b/ },
  { category: "components-textinput", subcategory: "fields", type: "pattern", pattern: "TextEditor", regex: /\bTextEditor\b/ },
  { category: "components-textinput", subcategory: "search", type: "pattern", pattern: "searchable", regex: /\.searchable\b/ },

  // === Components - Media ===
  { category: "components-media", subcategory: "images", type: "pattern", pattern: "AsyncImage", regex: /\bAsyncImage\b/ },
  { category: "components-media", subcategory: "images", type: "pattern", pattern: "Image", regex: /\bImage\s*\(/ },
  { category: "components-media", subcategory: "maps", type: "pattern", pattern: "Map", regex: /\bMap\s*\{/ },
  { category: "components-media", subcategory: "video", type: "pattern", pattern: "VideoPlayer", regex: /\bVideoPlayer\b/ },

  // === Foundations - Color ===
  { category: "foundations", subcategory: "color", type: "concern", pattern: "hardcodedColor", regex: /\.foregroundColor\(\.(red|blue|green|yellow|orange|purple|pink|white|black)\)/ },
  { category: "foundations", subcategory: "color", type: "concern", pattern: "hardcodedRGBColor", regex: /Color\(\s*red:/ },
  { category: "foundations", subcategory: "color", type: "concern", pattern: "hardcodedHexColor", regex: /Color\(\s*#/ },
  { category: "foundations", subcategory: "color", type: "concern", pattern: "hardcodedUIColor", regex: /UIColor\(\s*red:/ },
  { category: "foundations", subcategory: "color", type: "positive", pattern: "semanticColor", regex: /\.(primary|secondary|accentColor)\b/ },
  { category: "foundations", subcategory: "color", type: "positive", pattern: "foregroundStyle", regex: /\.foregroundStyle\(\.(primary|secondary|tertiary|quaternary)\)/ },
  { category: "foundations", subcategory: "color", type: "positive", pattern: "assetCatalogColor", regex: /Color\(\s*"[^"]+"\s*\)/ },
  { category: "foundations", subcategory: "color", type: "positive", pattern: "tintColor", regex: /\.tint\(/ },

  // === Foundations - Typography ===
  { category: "foundations", subcategory: "typography", type: "positive", pattern: "dynamicTypeStyle", regex: /\.font\(\.(largeTitle|title|title2|title3|headline|subheadline|body|callout|footnote|caption|caption2)\)/ },
  { category: "foundations", subcategory: "typography", type: "concern", pattern: "hardcodedFontSize", regex: /\.font\(\.system\(size:/ },
  { category: "foundations", subcategory: "typography", type: "concern", pattern: "hardcodedUIFont", regex: /UIFont\.\s*systemFont\(ofSize:/ },
  { category: "foundations", subcategory: "typography", type: "positive", pattern: "preferredFont", regex: /UIFont\.preferredFont\(forTextStyle:/ },
  { category: "foundations", subcategory: "typography", type: "positive", pattern: "scaledMetric", regex: /@ScaledMetric/ },
  { category: "foundations", subcategory: "typography", type: "positive", pattern: "dynamicTypeSize", regex: /@Environment\(\\\.dynamicTypeSize\)/ },
  { category: "foundations", subcategory: "typography", type: "positive", pattern: "minimumScaleFactor", regex: /\.minimumScaleFactor\(/ },

  // === Foundations - Accessibility ===
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityLabel", regex: /\.accessibilityLabel\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityHint", regex: /\.accessibilityHint\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityValue", regex: /\.accessibilityValue\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityAction", regex: /\.accessibilityAction\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityHidden", regex: /\.accessibilityHidden\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityElement", regex: /\.accessibilityElement\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityAddTraits", regex: /\.accessibilityAddTraits\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "accessibilityRemoveTraits", regex: /\.accessibilityRemoveTraits\(/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "reduceMotion", regex: /accessibilityReduceMotion/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "reduceTransparency", regex: /accessibilityReduceTransparency/ },
  { category: "foundations", subcategory: "accessibility", type: "positive", pattern: "voiceOverFocus", regex: /AccessibilityFocusState/ },

  // === Foundations - Dark Mode ===
  { category: "foundations", subcategory: "darkMode", type: "positive", pattern: "colorScheme", regex: /@Environment\(\\\.colorScheme\)/ },
  { category: "foundations", subcategory: "darkMode", type: "positive", pattern: "preferredColorScheme", regex: /\.preferredColorScheme\(/ },

  // === Foundations - Layout ===
  { category: "foundations", subcategory: "layout", type: "positive", pattern: "safeArea", regex: /\.safeAreaInset\(|\.ignoresSafeArea\(/ },
  { category: "foundations", subcategory: "layout", type: "positive", pattern: "padding", regex: /\.padding\(/ },

  // === Patterns ===
  { category: "patterns", subcategory: "lifecycle", type: "pattern", pattern: "onAppear", regex: /\.onAppear\b/ },
  { category: "patterns", subcategory: "lifecycle", type: "pattern", pattern: "task", regex: /\.task\s*\{/ },
  { category: "patterns", subcategory: "state", type: "pattern", pattern: "stateObject", regex: /@StateObject\b/ },
  { category: "patterns", subcategory: "state", type: "pattern", pattern: "observedObject", regex: /@ObservedObject\b/ },
  { category: "patterns", subcategory: "state", type: "pattern", pattern: "environmentObject", regex: /@EnvironmentObject\b/ },
  { category: "patterns", subcategory: "state", type: "pattern", pattern: "observable", regex: /@Observable\b/ },
  { category: "patterns", subcategory: "animation", type: "pattern", pattern: "withAnimation", regex: /\bwithAnimation\b/ },
  { category: "patterns", subcategory: "animation", type: "pattern", pattern: "animation", regex: /\.animation\(/ },
  { category: "patterns", subcategory: "animation", type: "pattern", pattern: "transition", regex: /\.transition\(/ },
  { category: "patterns", subcategory: "animation", type: "positive", pattern: "matchedGeometryEffect", regex: /\.matchedGeometryEffect\(/ },
  { category: "patterns", subcategory: "haptics", type: "pattern", pattern: "sensoryFeedback", regex: /\.sensoryFeedback\(/ },
  { category: "patterns", subcategory: "haptics", type: "pattern", pattern: "UIImpactFeedbackGenerator", regex: /UIImpactFeedbackGenerator/ },

  // === Platforms ===
  { category: "platforms", subcategory: "multiplatform", type: "positive", pattern: "conditionalPlatform", regex: /#if\s+(os\(iOS\)|os\(macOS\)|os\(watchOS\)|os\(tvOS\)|os\(visionOS\))/ },
  { category: "platforms", subcategory: "widgets", type: "pattern", pattern: "WidgetKit", regex: /import\s+WidgetKit/ },
  { category: "platforms", subcategory: "watchOS", type: "pattern", pattern: "WatchKit", regex: /import\s+WatchKit/ },

  // === Technologies ===
  { category: "technologies", subcategory: "appIntents", type: "pattern", pattern: "AppIntent", regex: /\bAppIntent\b/ },
  { category: "technologies", subcategory: "liveActivities", type: "pattern", pattern: "ActivityKit", regex: /import\s+ActivityKit/ },
  { category: "technologies", subcategory: "sharePlay", type: "pattern", pattern: "GroupActivities", regex: /import\s+GroupActivities/ },
  { category: "technologies", subcategory: "swiftData", type: "pattern", pattern: "SwiftData", regex: /import\s+SwiftData/ },
  { category: "technologies", subcategory: "swiftData", type: "pattern", pattern: "modelContainer", regex: /\.modelContainer\(/ },

  // === Inputs ===
  { category: "inputs", subcategory: "gestures", type: "pattern", pattern: "TapGesture", regex: /\.onTapGesture\b/ },
  { category: "inputs", subcategory: "gestures", type: "pattern", pattern: "LongPressGesture", regex: /\.onLongPressGesture\b|LongPressGesture\b/ },
  { category: "inputs", subcategory: "gestures", type: "pattern", pattern: "DragGesture", regex: /DragGesture\b/ },
  { category: "inputs", subcategory: "gestures", type: "pattern", pattern: "MagnificationGesture", regex: /MagnificationGesture\b|MagnifyGesture\b/ },
  { category: "inputs", subcategory: "gestures", type: "pattern", pattern: "RotationGesture", regex: /RotationGesture\b|RotateGesture\b/ },
  { category: "inputs", subcategory: "keyboard", type: "pattern", pattern: "keyboardShortcut", regex: /\.keyboardShortcut\(/ },
  { category: "inputs", subcategory: "focus", type: "pattern", pattern: "focusState", regex: /@FocusState\b/ },
  { category: "inputs", subcategory: "focus", type: "pattern", pattern: "focused", regex: /\.focused\(/ },
];

export function detectPatterns(code: string, file: string): PatternMatch[] {
  const matches: PatternMatch[] = [];
  const lines = code.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const lineContent = lines[i];
    for (const rule of rules) {
      if (rule.regex.test(lineContent)) {
        matches.push({
          category: rule.category,
          subcategory: rule.subcategory,
          type: rule.type,
          pattern: rule.pattern,
          line: i + 1,
          lineContent: lineContent.trim(),
          file,
        });
      }
    }
  }

  return matches;
}
