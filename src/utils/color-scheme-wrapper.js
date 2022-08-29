import React from 'react'
import { bool, node, string } from 'prop-types';

export default function ColorSchemeWrapper({ scheme = "light", children, showLabel = "true" }) {
  return (
    <div
      data-color-scheme={scheme}
      data-contrast="low"
      style={{ borderRadius: 4, marginBottom: "1rem", padding: "1.5rem" }}
    >
      {showLabel && (
        <h5 className="mb-1">{scheme} mode</h5>
      )}
      {children}
    </div>
  )
}

ColorSchemeWrapper.propTypes = {
  scheme: string.isRequired,
  children: node.isRequired,
  showLabel: bool.isRequired
}
