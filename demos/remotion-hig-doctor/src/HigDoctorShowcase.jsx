import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import reportData from "./data/report-data.json";

const copy = {
  kicker: "HIG AUDIT \u2014 UNIVERSAL SCANNER",
  headline: "349 rules.\n12 frameworks.\nOne score.",
  subhead:
    "Scans code, stylesheets, and config files for Apple HIG compliance. Detects accessibility, color systems, typography, dark mode, responsive layout, motion preferences, and more.",
  whatItDoesTitle: "What the audit detects",
  whatItDoesBullets: [
    "Accessibility anti-patterns: missing ARIA roles, empty alt text, outline removal, positive tabindex.",
    "Context-aware rules: skips false positives in @media print, prefers-reduced-motion, and :focus-visible.",
    "Framework-specific patterns across SwiftUI, React, Vue, Angular, Flutter, Compose, and more."
  ],
  categoriesTitle: "Detections by HIG category",
  frameworksTitle: "Framework coverage",
  frameworksBullets: [
    "349 regex rules across 12 framework ecosystems.",
    "Each detection classified as positive, concern, or neutral pattern.",
    "Context-aware CSS block tracking eliminates false positives."
  ],
  outroHeadline: "Ship with confidence.",
  outroSubline:
    "One command. 349 rules. Every framework. Zero configuration."
};

const palette = {
  background: "#0b0c0f",
  foreground: "#f2f2f4",
  mutedForeground: "rgba(229, 231, 236, 0.7)",
  subtleForeground: "rgba(229, 231, 236, 0.5)",
  card: "hsla(225, 10%, 11%, 0.56)",
  cardSoft: "hsla(225, 10%, 13%, 0.52)",
  border: "hsla(0, 0%, 100%, 0.09)",
  chart1: "#9bb2d5",
  chart2: "#9ec6b8",
  chart3: "#d5c29f",
  chart4: "#b9add1",
  chart5: "#d2aebe",
  success: "#9fbeaa",
  error: "#d7a0a0",
  warning: "#d5c09a",
  ring: "rgba(255,255,255,0.1)"
};

const sceneFade = (frame, durationInFrames) => interpolate(frame, [0, 16, durationInFrames - 18, durationInFrames], [0, 1, 1, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
});

const glassCard = {
  background: palette.card,
  border: `1px solid ${palette.border}`,
  borderRadius: 18,
  backdropFilter: "blur(28px) saturate(140%)",
  boxShadow: "0 0 0 0.5px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.14), 0 10px 28px rgba(0,0,0,0.24)"
};

const monoFont = "SF Mono, SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, monospace";
const uiFont = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const Backdrop = () => {
  const frame = useCurrentFrame();
  const driftX = Math.sin(frame / 80) * 18;
  const driftY = Math.cos(frame / 90) * 12;

  return (
    <AbsoluteFill style={{background: palette.background, overflow: "hidden"}}>
      <div
        style={{
          position: "absolute",
          inset: -80,
          transform: `translate(${driftX}px, ${driftY}px) scale(1.04)`,
          backgroundImage: `url(${staticFile("orchard.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "saturate(75%) contrast(90%) brightness(63%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,10,14,0.76) 0%, rgba(10,11,15,0.82) 48%, rgba(9,9,12,0.88) 100%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 16%, rgba(155,178,213,0.14) 0%, transparent 28%), radial-gradient(circle at 82% 12%, rgba(210,174,190,0.1) 0%, transparent 24%), radial-gradient(circle at 68% 82%, rgba(158,198,184,0.1) 0%, transparent 25%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 0.45px, transparent 0.55px)",
          backgroundSize: "7px 7px"
        }}
      />
    </AbsoluteFill>
  );
};

const StatPill = ({label, value, accent}) => (
  <div
    style={{
      borderRadius: 999,
      border: `1px solid ${palette.border}`,
      background: "rgba(255,255,255,0.04)",
      padding: "7px 11px",
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }}
  >
    <span style={{width: 7, height: 7, borderRadius: 999, background: accent}} />
    <span style={{fontFamily: uiFont, fontSize: 12, color: palette.subtleForeground, letterSpacing: 0.15}}>{label}</span>
    <span style={{fontFamily: uiFont, fontSize: 12, color: palette.foreground, fontWeight: 600}}>{value}</span>
  </div>
);

const BrandFooter = () => (
  <div
    style={{
      position: "absolute",
      left: 84,
      right: 84,
      bottom: 22,
      ...glassCard,
      borderRadius: 14,
      padding: "10px 14px",
      background: "hsla(225, 10%, 10%, 0.66)",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 14
    }}
  >
    <div style={{display: "flex", alignItems: "center", gap: 10}}>
      <Img
        src={staticFile("raintree-icon.png")}
        style={{
          width: 22,
          height: 22,
          objectFit: "contain",
          filter: "invert(1) opacity(0.78)"
        }}
      />
      <span style={{fontFamily: uiFont, fontSize: 13, color: palette.mutedForeground, fontWeight: 560, letterSpacing: 0.08}}>
        Raintree Technology
      </span>
    </div>

    <div style={{height: 1, background: palette.border}} />

    <div style={{display: "flex", alignItems: "center", gap: 16, fontFamily: monoFont, fontSize: 12, color: palette.subtleForeground}}>
      <span>raintree.technology</span>
      <span>github.com/raintree-technology</span>
    </div>
  </div>
);

/* ── Scene 1: Intro ──────────────────────────────────────────────────── */

const IntroScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const rise = spring({frame, fps, config: {damping: 135}});

  const project = reportData.project;
  const totalFiles = project.files.code + project.files.style + (project.files.config || 0);
  const totalDetections = project.totals.concerns + project.totals.positives + project.totals.patterns;

  const terminalLines = [
    "$ bun run audit ./my-app",
    `Scanned ${project.files.code} code + ${project.files.style} style files`,
    "",
    `  HIG Audit: ${project.name}   ${project.score}/100`,
    `  ${project.frameworks.join(", ")} \u00b7 ${totalDetections} detections \u00b7 ${totalFiles} files`,
    "",
    `  ${project.totals.positives} good  ${project.totals.patterns} patterns  ${project.totals.concerns} concerns`,
    "",
    "  Excellent \u2014 Strong HIG compliance across the board.",
  ];

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div
        style={{
          ...glassCard,
          display: "grid",
          gridTemplateColumns: "1.22fr 0.78fr",
          gap: 18,
          padding: 28,
          transform: `translateY(${interpolate(rise, [0, 1], [12, 0])}px)`
        }}
      >
        <div>
          <div style={{fontFamily: uiFont, color: palette.chart1, fontSize: 14, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 560}}>
            {copy.kicker}
          </div>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 58, lineHeight: 0.99, letterSpacing: "-0.024em", fontWeight: 600, marginTop: 8, whiteSpace: "pre-line"}}>
            {copy.headline}
          </div>
          <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 22, lineHeight: 1.34, letterSpacing: "-0.012em", marginTop: 14, maxWidth: 860}}>
            {copy.subhead}
          </div>

          <div style={{...glassCard, marginTop: 16, padding: "14px 16px", borderRadius: 14, background: palette.cardSoft}}>
            <div style={{fontFamily: uiFont, fontSize: 12, color: palette.chart2, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 600}}>
              {copy.whatItDoesTitle}
            </div>
            <div style={{marginTop: 8, display: "grid", gap: 6}}>
              {copy.whatItDoesBullets.map((line) => (
                <div key={line} style={{display: "grid", gridTemplateColumns: "12px 1fr", gap: 7, alignItems: "start"}}>
                  <span style={{width: 6, height: 6, borderRadius: 999, background: palette.chart2, marginTop: 8}} />
                  <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 17, lineHeight: 1.34}}>{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14}}>
            <StatPill label="score" value={`${project.score}/100`} accent={palette.success} />
            <StatPill label="detections" value={String(totalDetections)} accent={palette.chart1} />
            <StatPill label="frameworks" value={project.frameworks.join(", ")} accent={palette.chart3} />
            <StatPill label="categories" value={String(project.categories.length)} accent={palette.chart4} />
          </div>
        </div>

        <div style={{...glassCard, borderRadius: 14, overflow: "hidden"}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 12px",
              borderBottom: `1px solid ${palette.border}`,
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.error, opacity: 0.82}} />
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.warning, opacity: 0.82}} />
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.success, opacity: 0.82}} />
            <span style={{flex: 1, textAlign: "center", fontFamily: uiFont, color: palette.subtleForeground, fontSize: 11, fontWeight: 600, letterSpacing: 0.35}}>
              hig-doctor audit
            </span>
            <span style={{width: 22}} />
          </div>

          <div
            style={{
              background: "#1d1d1f",
              minHeight: 438,
              padding: "14px 15px",
              fontFamily: monoFont,
              fontSize: 13,
              lineHeight: 1.42,
              color: "rgba(255,255,255,0.86)"
            }}
          >
            {terminalLines.map((line, index) => (
              <div
                key={`${index}-${line}`}
                style={{
                  color: line.startsWith("$")
                    ? "rgba(255,255,255,0.96)"
                    : line.includes("/100")
                      ? palette.success
                      : line.includes("Excellent")
                        ? palette.chart2
                        : "rgba(255,255,255,0.78)",
                  transform: `translateY(${interpolate(frame, [0, 24 + index * 2], [8, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}px)`,
                  opacity: interpolate(frame, [0, 18 + index * 3], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})
                }}
              >
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ── Scene 2: Categories ─────────────────────────────────────────────── */

const CategoriesScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);

  const categories = reportData.topCategories;
  const maxDetections = Math.max(...categories.map((c) => c.detections), 1);
  const project = reportData.project;
  const totalDetections = project.totals.concerns + project.totals.positives + project.totals.patterns;
  const scoreTimeline = reportData.scoreTimeline;

  const donutStats = [
    {label: "Positives", value: project.totals.positives, color: palette.success},
    {label: "Patterns", value: project.totals.patterns, color: palette.chart3},
    {label: "Concerns", value: project.totals.concerns, color: palette.error}
  ].filter((s) => s.value > 0);
  const totalDonut = Math.max(1, donutStats.reduce((sum, s) => sum + s.value, 0));
  const radius = 120;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;
  let consumed = 0;

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div style={{...glassCard, padding: 24}}>
        <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 52, letterSpacing: "-0.022em", fontWeight: 600}}>
          {copy.categoriesTitle}
        </div>
        <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 21, letterSpacing: "-0.012em", marginTop: 6}}>
          {`${totalDetections} detections across ${categories.length} HIG categories. ${project.totals.positives} positive patterns found.`}
        </div>

        <div style={{marginTop: 16, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 14}}>
          <div style={{...glassCard, borderRadius: 14, padding: 14}}>
            <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600}}>
              Top categories by detection count
            </div>
            <div style={{marginTop: 14, display: "grid", gap: 8}}>
              {categories.map((cat, index) => {
                const grow = spring({frame, fps, delay: index * 7, config: {damping: 200}});
                const barWidth = interpolate(grow, [0, 1], [0, (cat.detections / maxDetections) * 100]);
                const positiveWidth = cat.detections > 0 ? (cat.positives / cat.detections) * barWidth : 0;
                return (
                  <div key={cat.name} style={{...glassCard, borderRadius: 12, padding: "10px 12px", background: palette.cardSoft}}>
                    <div style={{display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center"}}>
                      <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 16, fontWeight: 500}}>{cat.name}</div>
                      <div style={{display: "flex", alignItems: "baseline", gap: 4}}>
                        <span style={{fontFamily: uiFont, color: palette.foreground, fontSize: 24, fontWeight: 600}}>{cat.detections}</span>
                        {cat.positives > 0 && (
                          <span style={{fontFamily: uiFont, color: palette.success, fontSize: 13}}>{cat.positives} good</span>
                        )}
                      </div>
                    </div>
                    <div style={{marginTop: 7, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden", display: "flex"}}>
                      <div style={{height: "100%", width: `${positiveWidth}%`, background: palette.success, borderRadius: "999px 0 0 999px"}} />
                      <div style={{height: "100%", width: `${barWidth - positiveWidth}%`, background: `${palette.chart3}88`, borderRadius: "0 999px 999px 0"}} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{display: "grid", gridTemplateRows: "1fr auto", gap: 10}}>
            <div style={{...glassCard, borderRadius: 14, padding: 14, display: "flex", flexDirection: "column"}}>
              <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600}}>
                Detection breakdown
              </div>
              <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
                <svg width="360" height="360" viewBox="0 0 360 360" aria-hidden="true">
                  <circle cx="180" cy="180" r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={strokeWidth} fill="none" />
                  {donutStats.map((item) => {
                    const progress = interpolate(frame, [0, 98], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.out(Easing.cubic)
                    });
                    const fraction = item.value / totalDonut;
                    const segmentLength = circumference * fraction;
                    const offset = interpolate(progress, [0, 1], [segmentLength, 0]);
                    const rotation = (consumed / totalDonut) * 360 - 90;
                    consumed += item.value;
                    return (
                      <circle
                        key={item.label}
                        cx="180"
                        cy="180"
                        r={radius}
                        stroke={item.color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${segmentLength} ${circumference}`}
                        strokeDashoffset={offset}
                        transform={`rotate(${rotation} 180 180)`}
                      />
                    );
                  })}
                </svg>
                <div style={{position: "absolute", textAlign: "center"}}>
                  <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 16}}>detections</div>
                  <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 54, fontWeight: 600}}>{totalDetections}</div>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "center", gap: 16, marginTop: 4}}>
                {donutStats.map((item) => (
                  <div key={item.label} style={{display: "flex", alignItems: "center", gap: 6}}>
                    <span style={{width: 8, height: 8, borderRadius: 999, background: item.color}} />
                    <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 13}}>{item.label} ({item.value})</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{...glassCard, borderRadius: 14, padding: "10px 12px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 7}}>
              {scoreTimeline.map((point, index) => (
                <div
                  key={point.label}
                  style={{
                    borderRadius: 10,
                    border: `1px solid ${palette.border}`,
                    background: "rgba(255,255,255,0.035)",
                    padding: "7px 8px"
                  }}
                >
                  <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.9, fontWeight: 600}}>
                    {point.label}
                  </div>
                  <div style={{fontFamily: uiFont, color: index === 0 ? palette.error : index === scoreTimeline.length - 1 ? palette.success : palette.warning, fontSize: 22, fontWeight: 600, marginTop: 2}}>
                    {point.score}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ── Scene 3: Frameworks ─────────────────────────────────────────────── */

const FrameworksScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);

  const frameworks = reportData.frameworkRuleCounts;
  const leftCol = frameworks.slice(0, 6);
  const rightCol = frameworks.slice(6, 12);

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div style={{...glassCard, padding: 24, display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 14}}>
        <div>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 50, letterSpacing: "-0.022em", fontWeight: 600}}>
            {copy.frameworksTitle}
          </div>
          <div style={{marginTop: 10, display: "grid", gap: 6}}>
            {copy.frameworksBullets.map((line) => (
              <div key={line} style={{display: "grid", gridTemplateColumns: "12px 1fr", gap: 7, alignItems: "start"}}>
                <span style={{width: 6, height: 6, borderRadius: 999, background: palette.chart1, marginTop: 8}} />
                <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 18, lineHeight: 1.34}}>{line}</span>
              </div>
            ))}
          </div>

          <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600, marginTop: 16}}>
            Supported frameworks
          </div>
          <div style={{marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6}}>
            {[leftCol, rightCol].map((col, colIdx) => (
              <div key={colIdx} style={{display: "grid", gap: 6}}>
                {col.map((fw, index) => {
                  const rise = spring({frame, fps, delay: (colIdx * 6 + index) * 3, config: {damping: 200}});
                  return (
                    <div
                      key={fw.framework}
                      style={{
                        ...glassCard,
                        borderRadius: 10,
                        padding: "8px 10px",
                        background: palette.cardSoft,
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        alignItems: "center",
                        transform: `translateY(${interpolate(rise, [0, 1], [6, 0])}px)`,
                        opacity: rise
                      }}
                    >
                      <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 15}}>{fw.framework}</span>
                      <span style={{fontFamily: monoFont, color: palette.chart1, fontSize: 14, fontWeight: 600}}>{fw.rules}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div style={{...glassCard, borderRadius: 14, padding: 14}}>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em"}}>
            What it checks
          </div>
          <div style={{marginTop: 8, display: "grid", gap: 7}}>
            {[
              {area: "Accessibility", detail: "ARIA roles, alt text, focus management, touch targets, heading hierarchy"},
              {area: "Color Systems", detail: "Semantic tokens vs hardcoded values, dark mode support, CSS custom properties"},
              {area: "Typography", detail: "Dynamic Type, relative units vs fixed px, font scale compliance"},
              {area: "Layout", detail: "Responsive breakpoints, logical properties, RTL support, adaptive patterns"},
              {area: "Motion", detail: "prefers-reduced-motion, transitions, animations, scroll behavior"},
              {area: "Internationalization", detail: "lang attributes, RTL layout, logical properties, i18n frameworks"},
              {area: "Forms & Input", detail: "Labels, fieldset/legend, autocomplete, input types, validation"},
            ].map((item, index) => {
              const rise = spring({frame, fps, delay: index * 5, config: {damping: 190}});
              return (
                <div
                  key={item.area}
                  style={{
                    borderRadius: 10,
                    border: `1px solid ${palette.border}`,
                    padding: "9px 10px",
                    background: "rgba(255,255,255,0.035)",
                    transform: `translateY(${interpolate(rise, [0, 1], [10, 0])}px)`,
                    opacity: rise
                  }}
                >
                  <div style={{fontFamily: uiFont, color: palette.chart1, fontSize: 13, fontWeight: 600}}>{item.area}</div>
                  <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 14, lineHeight: 1.32, marginTop: 3}}>{item.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ── Scene 4: Outro ──────────────────────────────────────────────────── */

const OutroScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const punch = spring({frame, fps, delay: 6, config: {damping: 130}});

  const project = reportData.project;

  return (
    <AbsoluteFill style={{opacity: fade, padding: "80px 96px 102px", justifyContent: "center"}}>
      <div
        style={{
          ...glassCard,
          padding: "28px 32px",
          transform: `scale(${interpolate(punch, [0, 1], [0.97, 1])})`,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 22,
          alignItems: "center"
        }}
      >
        <div>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 54, lineHeight: 1, letterSpacing: "-0.022em", fontWeight: 600}}>{copy.outroHeadline}</div>
          <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 22, lineHeight: 1.32, letterSpacing: "-0.012em", marginTop: 10}}>{copy.outroSubline}</div>
          <div style={{fontFamily: monoFont, color: palette.chart1, fontSize: 18, marginTop: 16, padding: "10px 14px", borderRadius: 10, background: "rgba(155,178,213,0.08)", border: `1px solid ${palette.border}`, display: "inline-block"}}>
            bun run audit ./my-app
          </div>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(160px, 1fr))", gap: 8}}>
          {[
            {label: "Score", value: `${project.score}/100`, color: palette.success},
            {label: "Rules", value: String(reportData.totalRules), color: palette.chart1},
            {label: "Positives", value: String(project.totals.positives), color: palette.chart2},
            {label: "Frameworks", value: String(reportData.totalFrameworks), color: palette.chart4}
          ].map((item) => (
            <div key={item.label} style={{...glassCard, borderRadius: 12, padding: "9px 11px", background: "rgba(255,255,255,0.04)"}}>
              <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600}}>{item.label}</div>
              <div style={{fontFamily: uiFont, color: item.color, fontSize: 30, fontWeight: 600, letterSpacing: "-0.014em", marginTop: 2}}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ── Composition ─────────────────────────────────────────────────────── */

export const HigDoctorShowcase = () => {
  return (
    <AbsoluteFill style={{fontFamily: uiFont}}>
      <Backdrop />

      <Sequence from={0} durationInFrames={180}>
        <IntroScene durationInFrames={180} />
      </Sequence>

      <Sequence from={154} durationInFrames={220}>
        <CategoriesScene durationInFrames={220} />
      </Sequence>

      <Sequence from={346} durationInFrames={190}>
        <FrameworksScene durationInFrames={190} />
      </Sequence>

      <Sequence from={506} durationInFrames={124}>
        <OutroScene durationInFrames={124} />
      </Sequence>

      <BrandFooter />
    </AbsoluteFill>
  );
};
