import { useState } from "react";
import SVG from "react-inlinesvg";
export default function Logo() {
  return (
    <div className="logo">
      <SVG src="/icon-x.svg" width={32} height={32} viewBox="0 0 64 64" />
      <SVG src="/icon-o.svg" width={32} height={32} viewBox="0 0 64 64" />
    </div>
  );
}
