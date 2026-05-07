"use client";

import { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  content: string;
  className?: string;
}

function renderLatex(latex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      trust: true,
    });
  } catch {
    return `<span class="text-red-500">${latex}</span>`;
  }
}

function parseContent(input: string): string {
  const parts: string[] = [];
  let remaining = input;
  let displayDepth = 0;
  let inlineDepth = 0;
  let i = 0;

  while (i < remaining.length) {
    if (remaining.startsWith("$$", i)) {
      if (displayDepth === 0) {
        parts.push(escapeHtml(remaining.slice(0, i)));
        remaining = remaining.slice(i + 2);
        i = 0;
        displayDepth = 1;
      } else {
        const latex = remaining.slice(0, i);
        parts.push(renderLatex(latex, true));
        remaining = remaining.slice(i + 2);
        i = 0;
        displayDepth = 0;
      }
    } else if (remaining[i] === "$" && displayDepth === 0) {
      if (inlineDepth === 0) {
        parts.push(escapeHtml(remaining.slice(0, i)));
        remaining = remaining.slice(i + 1);
        i = 0;
        inlineDepth = 1;
      } else {
        const latex = remaining.slice(0, i);
        parts.push(renderLatex(latex, false));
        remaining = remaining.slice(i + 1);
        i = 0;
        inlineDepth = 0;
      }
    } else {
      i++;
    }
  }

  if (remaining.length > 0) {
    parts.push(escapeHtml(remaining));
  }

  return parts.join("");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
}

export default function MathRenderer({ content, className = "" }: MathRendererProps) {
  const html = useMemo(() => parseContent(content), [content]);

  return (
    <span
      className={`katex-container ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
