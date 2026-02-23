import { describe, test, expect } from "bun:test";
import { detectPatterns } from "./patterns";

describe("detectPatterns", () => {
  test("detects TabView navigation", () => {
    const code = `struct ContentView: View {\n  var body: some View {\n    TabView {\n      HomeView()\n    }\n  }\n}`;
    const matches = detectPatterns(code, "ContentView.swift");
    const nav = matches.filter(m => m.category === "components-layout");
    expect(nav.length).toBeGreaterThan(0);
    expect(nav.some(m => m.pattern === "TabView")).toBe(true);
  });
  test("flags hardcoded colors", () => {
    const matches = detectPatterns(`.foregroundColor(.red)\n.foregroundColor(Color(red: 0.5, green: 0.2, blue: 0.1))`, "View.swift");
    expect(matches.filter(m => m.category === "foundations" && m.type === "concern").length).toBeGreaterThan(0);
  });
  test("detects system color usage as positive", () => {
    const matches = detectPatterns(`.foregroundStyle(.primary)\n.foregroundStyle(.secondary)`, "View.swift");
    expect(matches.filter(m => m.category === "foundations" && m.type === "positive").length).toBeGreaterThan(0);
  });
  test("detects accessibility modifiers", () => {
    const matches = detectPatterns(`.accessibilityLabel("Close")\n.accessibilityHint("Dismisses")`, "View.swift");
    expect(matches.filter(m => m.category === "foundations" && m.subcategory === "accessibility").length).toBeGreaterThan(0);
  });
  test("flags hardcoded font sizes", () => {
    const matches = detectPatterns(`.font(.system(size: 14))`, "View.swift");
    expect(matches.filter(m => m.subcategory === "typography" && m.type === "concern").length).toBeGreaterThan(0);
  });
  test("detects Dynamic Type usage", () => {
    const matches = detectPatterns(`.font(.title)\n.font(.body)`, "View.swift");
    expect(matches.filter(m => m.subcategory === "typography" && m.type === "positive").length).toBeGreaterThan(0);
  });
});
