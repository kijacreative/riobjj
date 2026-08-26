/* @ds-bundle: {"format":4,"namespace":"RioJiuJitsuDesignSystem_1c4407","components":[{"name":"BenefitItem","sourcePath":"components/brand/BenefitItem.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"OffsetPhotos","sourcePath":"components/brand/OffsetPhotos.jsx"},{"name":"PhotoBanner","sourcePath":"components/brand/PhotoBanner.jsx"},{"name":"PhotoStrip","sourcePath":"components/brand/PhotoStrip.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/BenefitItem.jsx":"f77ceabf1b4c","components/brand/Logo.jsx":"85124a43c544","components/brand/OffsetPhotos.jsx":"0364da2b4e48","components/brand/PhotoBanner.jsx":"3106760551c5","components/brand/PhotoStrip.jsx":"ffa1d855743c","components/core/Badge.jsx":"215676fa50ee","components/core/Button.jsx":"db1db9f77687","components/core/Card.jsx":"5b0edd5d3902","components/core/Divider.jsx":"73513d435a27","components/core/Eyebrow.jsx":"54e789d9a7c9","components/core/IconButton.jsx":"ac8fc803207d","components/core/SectionHeading.jsx":"661babe8a187","components/forms/Checkbox.jsx":"595845e61865","components/forms/Input.jsx":"6b2df55e4800","components/forms/Select.jsx":"002ebaee5471","components/forms/Switch.jsx":"952fd0c3619c","components/navigation/SiteFooter.jsx":"bec6e3c5aa05","components/navigation/SiteHeader.jsx":"5eb901ac7c89","ui_kits/website/Contact.jsx":"49fdff438e35","ui_kits/website/Home.jsx":"2e89134b4d92","ui_kits/website/MembershipPlans.jsx":"16c110528d58","ui_kits/website/Schedule.jsx":"fade2064bf15","ui_kits/website/Shared.jsx":"a9317188d5cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RioJiuJitsuDesignSystem_1c4407 = window.RioJiuJitsuDesignSystem_1c4407 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BenefitItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BenefitItem({
  icon,
  label,
  basePath = '../../assets',
  iconSize = 44,
  style,
  ...rest
}) {
  const src = icon && icon.endsWith('.png') ? basePath + '/icons/' + icon : icon;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      textAlign: 'center',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      height: iconSize,
      width: 'auto',
      mixBlendMode: 'multiply'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  mark: 'logo-mark-black.png',
  markWhite: 'logo-mark-white.png',
  stackedBlack: 'logo-black-lockup.png',
  stackedWhite: 'logo-white.png',
  navyPlate: 'logo-navy-lockup.jpeg'
};
function Logo({
  variant = 'stackedBlack',
  height = 64,
  basePath = '../../assets',
  src,
  alt = 'Rio Jiu-Jitsu Lifestyle',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || basePath + '/' + FILES[variant],
    alt: alt,
    style: {
      height,
      width: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/OffsetPhotos.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OffsetPhotos({
  main,
  inset,
  align = 'left',
  height = 420,
  style,
  ...rest
}) {
  const shift = align === 'left' ? {
    left: '-18%',
    bottom: '12%'
  } : {
    right: '-18%',
    bottom: '12%'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: main,
    alt: "",
    style: {
      width: '100%',
      height,
      objectFit: 'cover',
      display: 'block'
    }
  }), inset && /*#__PURE__*/React.createElement("img", {
    src: inset,
    alt: "",
    style: {
      position: 'absolute',
      width: '46%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      boxShadow: 'var(--shadow-photo)',
      ...shift
    }
  }));
}
Object.assign(__ds_scope, { OffsetPhotos });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OffsetPhotos.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoBanner({
  image,
  height = '78vh',
  align = 'left',
  scrim = true,
  eyebrow,
  headline,
  children,
  style,
  ...rest
}) {
  const justify = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[align];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: justify,
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), scrim && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-photo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 clamp(24px,7vw,120px)',
      maxWidth: 900,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.82)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), headline && /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-hero)',
      letterSpacing: 'var(--tracking-hero)',
      color: 'var(--paper-000)',
      margin: 0
    }
  }, headline), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children)));
}
Object.assign(__ds_scope, { PhotoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoBanner.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoStrip({
  images = [],
  label = 'Jiu-Jitsu Lifestyle',
  height = 190,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      height,
      overflow: 'hidden',
      background: 'var(--ink-900)',
      ...style
    }
  }, rest), images.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-band)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--paper-000)'
    }
  }, label)));
}
Object.assign(__ds_scope, { PhotoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'sand',
  style,
  children,
  ...rest
}) {
  const tones = {
    sand: {
      background: 'var(--surface-accent-soft)',
      color: 'var(--sand-700)',
      border: '1px solid var(--sand-300)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--paper-000)',
      border: '1px solid var(--ink-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--line-strong)'
    },
    moss: {
      background: 'var(--moss-100)',
      color: 'var(--moss-700)',
      border: '1px solid var(--moss-100)'
    },
    inverse: {
      background: 'rgba(255,255,255,.12)',
      color: 'var(--paper-000)',
      border: '1px solid var(--line-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      width: 'fit-content',
      justifySelf: 'start',
      alignSelf: 'start',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '5px 12px',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-0)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--weight-regular)',
  letterSpacing: 'var(--tracking-button)',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-base)'
};
const sizes = {
  sm: {
    fontSize: 'var(--text-xs)',
    padding: '10px 22px'
  },
  md: {
    fontSize: 'var(--text-sm)',
    padding: '13px 30px'
  },
  lg: {
    fontSize: 'var(--text-md)',
    padding: '17px 42px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-fill)',
    color: 'var(--action-label)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-strong)',
    borderColor: 'var(--action-ghost-line)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)'
  },
  inverse: {
    background: 'var(--paper-000)',
    color: 'var(--ink-900)'
  },
  inverseOutline: {
    background: 'transparent',
    color: 'var(--paper-000)',
    borderColor: 'rgba(255,255,255,.6)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-fill-hover)'
  },
  secondary: {
    background: 'var(--action-fill)',
    color: 'var(--action-label)',
    borderColor: 'var(--action-fill)'
  },
  ghost: {
    color: 'var(--text-link-hover)'
  },
  inverse: {
    background: 'var(--paper-100)'
  },
  inverseOutline: {
    background: 'rgba(255,255,255,.14)',
    borderColor: 'var(--paper-000)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: 'var(--press-scale)'
    } : null),
    ...(disabled ? {
      opacity: .35,
      pointerEvents: 'none'
    } : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = [iconLeft, children, iconRight];
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    disabled: disabled
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'paper',
  bordered = true,
  padding = 'var(--space-6)',
  hoverable = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    muted: {
      background: 'var(--surface-muted)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'rgba(255,255,255,.78)'
    },
    brand: {
      background: 'var(--surface-brand)',
      color: 'rgba(255,255,255,.82)'
    }
  };
  const line = tone === 'inverse' || tone === 'brand' ? 'var(--line-inverse)' : 'var(--line-hairline)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-0)',
      padding,
      border: bordered ? '1px solid ' + line : '1px solid transparent',
      transition: 'var(--transition-base)',
      ...tones[tone],
      ...(hoverable && hover ? {
        borderColor: tone === 'inverse' || tone === 'brand' ? 'rgba(255,255,255,.5)' : 'var(--line-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'hairline',
  inset = 0,
  style,
  ...rest
}) {
  const tones = {
    hairline: 'var(--line-hairline)',
    strong: 'var(--line-strong)',
    accent: 'var(--line-accent)',
    inverse: 'var(--line-inverse)'
  };
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: 'var(--rule-width) solid ' + tones[tone],
      margin: '0 ' + inset + 'px',
      width: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  tone = 'muted',
  as = 'div',
  style,
  children,
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    accent: 'var(--text-accent)',
    strong: 'var(--text-strong)',
    inverse: 'rgba(255,255,255,.82)'
  };
  return React.createElement(as, {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  variant = 'outline',
  size = 40,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--line-strong)'
    },
    solid: {
      background: 'var(--action-fill)',
      color: 'var(--action-label)',
      border: '1px solid var(--action-fill)'
    },
    bare: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'transparent',
      color: 'var(--paper-000)',
      border: '1px solid var(--line-inverse)'
    }
  };
  const hoverTones = {
    outline: {
      background: 'var(--action-fill)',
      color: 'var(--action-label)'
    },
    solid: {
      background: 'var(--action-fill-hover)'
    },
    bare: {
      color: 'var(--text-link-hover)'
    },
    inverse: {
      background: 'rgba(255,255,255,.14)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      ...tones[variant],
      ...(hover ? hoverTones[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  as = 'h2',
  size = 'section',
  align = 'left',
  tone = 'strong',
  style,
  children,
  ...rest
}) {
  const sizes = {
    section: {
      fontSize: 'var(--text-section)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-section)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-snug)'
    },
    display: {
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 'var(--leading-tight)'
    },
    hero: {
      fontSize: 'var(--text-hero)',
      fontWeight: 'var(--weight-light)',
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 'var(--leading-hero)'
    },
    sub: {
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-snug)'
    }
  };
  const tones = {
    strong: 'var(--text-strong)',
    moss: 'var(--moss-500)',
    inverse: 'var(--paper-000)',
    navy: 'var(--navy-700)'
  };
  return React.createElement(as, {
    style: {
      fontFamily: 'var(--font-display)',
      color: tones[tone],
      textAlign: align,
      margin: 0,
      ...sizes[size],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: '0 0 18px',
      border: '1px solid ' + (checked ? 'var(--ink-900)' : 'var(--line-hairline)'),
      background: checked ? 'var(--ink-900)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '1.5px solid #fff',
      borderBottom: '1.5px solid #fff',
      rotate: '-45deg',
      marginTop: -2
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  as = 'input',
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const shell = {
    width: '100%',
    font: 'var(--type-body-sm)',
    lineHeight: 1.4,
    color: 'var(--text-strong)',
    background: 'var(--paper-000)',
    border: '1px solid var(--line-hairline)',
    borderRadius: 'var(--radius-0)',
    padding: '13px 14px',
    outline: 'none',
    transition: 'var(--transition-base)'
  };
  const box = {
    ...shell,
    borderColor: error ? 'var(--status-danger)' : focus ? 'var(--line-strong)' : 'var(--line-hairline)',
    ...(as === 'textarea' ? {
      resize: 'vertical',
      minHeight: rows * 24
    } : null),
    ...style
  };
  const El = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement(El, _extends({
    rows: as === 'textarea' ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: box
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        font: 'var(--type-body-sm)',
        lineHeight: 1.4,
        color: 'var(--text-strong)',
        background: 'var(--paper-000)',
        border: '1px solid var(--line-hairline)',
        borderRadius: 'var(--radius-0)',
        padding: '13px 14px',
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      appearance: 'none',
      paddingRight: 38,
      borderColor: focus ? 'var(--line-strong)' : 'var(--line-hairline)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRight: '1px solid var(--ink-500)',
      borderBottom: '1px solid var(--ink-500)',
      rotate: '45deg',
      marginTop: -3,
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--ink-900)' : 'var(--paper-200)',
      border: '1px solid ' + (checked ? 'var(--ink-900)' : 'var(--line-hairline)'),
      position: 'relative',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-000)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  address = [],
  columns = [],
  badge,
  basePath = '../../assets',
  copyright,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'rgba(255,255,255,.72)',
      padding: 'var(--space-9) clamp(24px,6vw,80px) var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: badge ? '1.2fr 1fr 1fr auto' : '1.2fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      lineHeight: 2,
      fontWeight: 'var(--weight-bold)',
      color: 'rgba(255,255,255,.9)'
    }
  }, address.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, col.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,.72)'
    }
  }, item)))), badge && /*#__PURE__*/React.createElement("img", {
    src: basePath + '/' + badge,
    alt: "",
    style: {
      width: 72,
      height: 'auto',
      justifySelf: 'start'
    }
  })), copyright && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      borderTop: 'var(--border-inverse)',
      paddingTop: 'var(--space-5)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,.5)'
    }
  }, copyright));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [],
  offer,
  active,
  onNavigate,
  tone = 'over',
  photo = 'light',
  compact = true,
  basePath = '../../assets',
  style,
  ...rest
}) {
  const floating = tone === 'over';
  const inverse = floating && photo === 'dark';
  const mark = compact ? inverse ? 'markWhite' : 'mark' : inverse ? 'stackedWhite' : 'stackedBlack';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) clamp(20px,4vw,48px)',
      ...(inverse ? {
        background: 'linear-gradient(180deg,rgba(10,10,10,.62) 0%,rgba(10,10,10,.45) 62%,rgba(10,10,10,0) 100%)'
      } : null),
      ...(tone === 'solid' ? {
        position: 'relative',
        background: 'var(--surface-page)',
        borderBottom: 'var(--border-hairline)'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: mark,
    height: compact ? 42 : inverse ? 52 : 44,
    basePath: basePath
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id || l.label,
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id || l.label);
      }
    },
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'rgba(255,255,255,.9)' : 'var(--text-strong)',
      borderBottom: '1px solid ' + (active === (l.id || l.label) ? inverse ? '#fff' : 'var(--ink-900)' : 'transparent'),
      paddingBottom: 3
    }
  }, l.label)), offer && /*#__PURE__*/React.createElement("a", {
    href: offer.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('offer');
      }
    },
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? '#fff' : 'var(--text-strong)',
      borderBottom: '1px solid ' + (inverse ? 'rgba(255,255,255,.7)' : 'var(--ink-900)'),
      paddingBottom: 3
    }
  }, offer.label)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const {
    SectionHeading,
    Input,
    Select,
    Checkbox,
    Button,
    Card,
    Eyebrow,
    Divider,
    Badge
  } = RIO;
  const [sent, setSent] = React.useState(false);
  const [opt, setOpt] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    py: "var(--space-9)",
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sand"
  }, "New client offer"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display",
    style: {
      fontSize: 52
    }
  }, "Two classes for $25"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "480px"
  }, "Tell us a little about yourself and we'll put you on the schedule. No experience needed \u2014 most people walk in never having trained."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Address"), "6465 E. Mockingbird Lane, Suite 350, Dallas, Tx"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Phone"), "945-269-0101"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Email"), "info@riobjj.com"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) 0',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sub"
  }, "You're on the list"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "100%"
  }, "We'll call within one business day to book your first two classes."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Silva",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(214) 000-0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Program",
    options: ['Adults — gi', 'Adults — no-gi', 'Kids 4–6', 'Kids 7–12', 'Women only', 'Competition team']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    as: "textarea",
    rows: 3,
    placeholder: "Previous experience, injuries, goals"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me the class schedule",
    checked: opt,
    onChange: () => setOpt(!opt)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "Claim the offer"))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    PhotoBanner,
    Button,
    BenefitItem,
    SectionHeading,
    OffsetPhotos,
    PhotoStrip,
    Badge
  } = RIO;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhotoBanner, {
    image: PHOTO('hero-lifestyle.png'),
    height: "76vh",
    scrim: false
  }), /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    py: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(BenefitItem, {
    icon: "improved-health.png",
    label: "Improved health"
  }), /*#__PURE__*/React.createElement(BenefitItem, {
    icon: "self-control.png",
    label: "Self-control"
  }), /*#__PURE__*/React.createElement(BenefitItem, {
    icon: "confidence-boost.png",
    label: "Confidence boost"
  }), /*#__PURE__*/React.createElement(BenefitItem, {
    icon: "self-defense.png",
    label: "Self-defense skills"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-8)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Prose, null, "Jiu-Jitsu goes beyond the mat. Practicing the sport is not just about learning proper fighting techniques, it's also about developing life skills. The discipline and respect taught in classes are reflected in all areas of life, making practitioners not only better fighters, but also better individuals."), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sub",
    align: "center",
    tone: "moss",
    style: {
      textTransform: 'none',
      fontSize: 'var(--text-h3)',
      letterSpacing: 0
    }
  }, "New Client Offer: Get 2 Classes For $25"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Sign up today"))), /*#__PURE__*/React.createElement(Band, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center"
  }, "2026 Summer Kids Camp // Jun 15\u201319 & Aug 3\u20137"), /*#__PURE__*/React.createElement("img", {
    src: PHOTO('summer-camp.png'),
    alt: "",
    style: {
      width: 'min(100%,760px)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Register for camp"))), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(OffsetPhotos, {
    height: 400,
    main: PHOTO('membership-grapple.png'),
    inset: PHOTO('membership-inset.png')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Membership plans"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "460px"
  }, "Experience the transformative power of Rio Jiu-Jitsu lifestyle, where physical training meets emotional control, leading to a well-balanced life. Train on spacious mats, connect with a vibrant community, and discover a path to a healthier, more fulfilling you. Explore our flexible membership plans that will meet your needs, wherever you are in your jiu-jitsu training journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('plans')
  }, "Explore our plans"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Contact us"))))), /*#__PURE__*/React.createElement(Band, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center"
  }, "Join the community"), /*#__PURE__*/React.createElement("img", {
    src: PHOTO('community-group.png'),
    alt: "",
    style: {
      width: 'min(100%,820px)'
    }
  }))), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(OffsetPhotos, {
    height: 400,
    main: PHOTO('women-class.png'),
    inset: PHOTO('women-inset.png')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "Jiu-Jitsu for women"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "460px"
  }, "Jiu-jitsu is a martial art that offers numerous benefits for women. Besides providing an effective form of self-defense, jiu-jitsu helps develop confidence, discipline, and physical strength. In our women's classes, we create a welcoming and encouraging environment where each student can learn and progress at their own pace. Join our community and discover how jiu-jitsu can transform your life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "2 classes for $25"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('contact')
  }, "Contact us"))))), /*#__PURE__*/React.createElement(PhotoStrip, {
    height: 200,
    label: "Jiu-Jitsu Lifestyle",
    images: [PHOTO('lifestyle-strip.png'), PHOTO('community-group.png'), PHOTO('summer-camp.png'), PHOTO('hero-lifestyle.png')]
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MembershipPlans.jsx
try { (() => {
const PLANS = [{
  name: 'Fundamentals',
  price: '$149',
  cadence: 'per month',
  blurb: 'Three fundamentals classes a week. Gi included with a three-month commitment.',
  items: ['3 classes per week', 'Fundamentals curriculum', 'Open mat Saturdays'],
  tag: 'For beginners'
}, {
  name: 'Unlimited',
  price: '$189',
  cadence: 'per month',
  blurb: 'Every class on the schedule — fundamentals, advanced, no-gi and competition training.',
  items: ['Unlimited classes', 'No-gi and gi', 'Competition team eligible', 'Open mat Saturdays'],
  tag: 'Most popular'
}, {
  name: 'Family',
  price: '$299',
  cadence: 'per month',
  blurb: 'Two adults and up to two kids on the mats, on one bill.',
  items: ['Up to 4 family members', 'Kids and adult programs', 'Unlimited classes'],
  tag: null
}];
function MembershipPlans({
  go
}) {
  const {
    SectionHeading,
    Card,
    Button,
    Badge,
    Switch,
    Divider,
    Eyebrow
  } = RIO;
  const [annual, setAnnual] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhotoBannerLite, null), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center"
  }, "Membership plans"), /*#__PURE__*/React.createElement(Prose, null, "Train on spacious mats, connect with a vibrant community, and discover a path to a healthier, more fulfilling you. Every plan starts with the new client offer: two classes for $25."), /*#__PURE__*/React.createElement(Switch, {
    label: "Pay annually \u2014 two months free",
    checked: annual,
    onChange: () => setAnnual(!annual)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    hoverable: true,
    padding: "var(--space-6)",
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      gridTemplateRows: 'auto auto auto auto 1fr auto',
      alignContent: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '26px auto',
      gap: 'var(--space-3)',
      justifyItems: 'start'
    }
  }, p.tag ? /*#__PURE__*/React.createElement(Badge, {
    tone: p.name === 'Unlimited' ? 'ink' : 'sand',
    style: {
      whiteSpace: 'nowrap'
    }
  }, p.tag) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sub",
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 44,
      color: 'var(--text-strong)'
    }
  }, annual ? '$' + Math.round(parseInt(p.price.slice(1)) * 10 / 12 * 10) / 10 : p.price), /*#__PURE__*/React.createElement(Eyebrow, null, annual ? 'per month, billed yearly' : p.cadence)), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "100%"
  }, p.blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 'var(--space-2)',
      alignContent: 'start'
    }
  }, p.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      borderTop: '1px solid var(--line-accent)',
      marginTop: 11,
      flex: '0 0 14px'
    }
  }), i))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => go('contact')
  }, "Get started"))))), /*#__PURE__*/React.createElement(Band, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "No contracts, no belt fees"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "460px"
  }, "Memberships are month to month. Promotions, stripes and belts are never charged for \u2014 the only thing you pay for is mat time."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('schedule')
  }, "See the calendar"))), /*#__PURE__*/React.createElement("img", {
    src: PHOTO('community-group.png'),
    alt: "",
    style: {
      width: '100%',
      height: 320,
      objectFit: 'cover'
    }
  }))));
}
function PhotoBannerLite() {
  const {
    PhotoBanner
  } = RIO;
  return /*#__PURE__*/React.createElement(PhotoBanner, {
    image: PHOTO('community-group.png'),
    height: "46vh",
    eyebrow: "Rio Jiu-Jitsu Lifestyle",
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Train with us")
  });
}
Object.assign(window, {
  MembershipPlans,
  PhotoBannerLite,
  PLANS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MembershipPlans.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Schedule.jsx
try { (() => {
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const CLASSES = {
  Monday: [['6:00 AM', 'Fundamentals', 'All levels'], ['12:00 PM', 'No-Gi', 'All levels'], ['5:00 PM', 'Kids 7–12', 'Beginner'], ['6:30 PM', 'Advanced Gi', 'Blue belt +']],
  Tuesday: [['6:00 AM', 'No-Gi', 'All levels'], ['5:00 PM', 'Kids 4–6', 'Beginner'], ['6:30 PM', 'Fundamentals', 'All levels'], ['7:45 PM', 'Open mat', 'All levels']],
  Wednesday: [['6:00 AM', 'Fundamentals', 'All levels'], ['12:00 PM', 'Women only', 'All levels'], ['5:00 PM', 'Kids 7–12', 'Intermediate'], ['6:30 PM', 'Advanced Gi', 'Blue belt +']],
  Thursday: [['6:00 AM', 'No-Gi', 'All levels'], ['6:30 PM', 'Fundamentals', 'All levels'], ['7:45 PM', 'Competition training', 'Invite']],
  Friday: [['6:00 AM', 'Fundamentals', 'All levels'], ['12:00 PM', 'No-Gi', 'All levels'], ['5:30 PM', 'Kids all ages', 'All levels']],
  Saturday: [['9:00 AM', 'Women only', 'All levels'], ['10:00 AM', 'Open mat', 'All levels'], ['11:00 AM', 'Fundamentals', 'All levels']]
};
function Schedule({
  go
}) {
  const {
    SectionHeading,
    Card,
    Badge,
    Select,
    Button,
    Divider,
    Eyebrow
  } = RIO;
  const [day, setDay] = React.useState('Monday');
  const [program, setProgram] = React.useState('All programs');
  const rows = CLASSES[day].filter(r => program === 'All programs' || r[1] === program);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    py: "var(--space-9)",
    style: {
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Dallas, Tx"), /*#__PURE__*/React.createElement(SectionHeading, {
    style: {
      marginTop: 8
    }
  }, "Class calendar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: 'var(--border-hairline)'
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(d),
    style: {
      background: 'none',
      border: 0,
      borderBottom: '2px solid ' + (day === d ? 'var(--ink-900)' : 'transparent'),
      padding: '10px 18px',
      cursor: 'pointer',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: day === d ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, d.slice(0, 3)))), /*#__PURE__*/React.createElement(Select, {
    options: ['All programs', 'Fundamentals', 'No-Gi', 'Advanced Gi', 'Women only', 'Open mat'],
    value: program,
    onChange: e => setProgram(e.target.value),
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0,
      borderTop: 'var(--border-hairline)'
    }
  }, rows.map(([t, n, lvl]) => /*#__PURE__*/React.createElement("div", {
    key: t + n,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr auto auto',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      letterSpacing: '.02em'
    }
  }, n), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, lvl), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('contact')
  }, "Reserve"))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) 0',
      font: 'var(--type-body)',
      color: 'var(--text-subtle)'
    }
  }, "No ", program.toLowerCase(), " classes on ", day, ".")))), /*#__PURE__*/React.createElement(Band, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "First class"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "100%"
  }, "Arrive fifteen minutes early. We'll lend you a gi.")), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What to bring"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "100%"
  }, "Water, a mouthguard, and flip-flops for off the mat.")), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Open mat"), /*#__PURE__*/React.createElement(Prose, {
    align: "left",
    max: "100%"
  }, "Saturdays at 10:00 AM, open to every member and visiting belts.")))));
}
Object.assign(window, {
  Schedule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const RIO = window.RioJiuJitsuDesignSystem_1c4407;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'plans',
  label: 'Membership plans'
}, {
  id: 'schedule',
  label: 'Class calendar'
}, {
  id: 'contact',
  label: 'Contact us'
}];
const PHOTO = p => '../../assets/photos/' + p;
function Band({
  tone = 'page',
  py = 'var(--space-9)',
  children,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    muted: 'var(--surface-muted)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: py + ' clamp(24px,6vw,80px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function Prose({
  children,
  align = 'center',
  max = 'var(--container-narrow)'
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: max,
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align,
      textWrapStyle: 'pretty'
    }
  }, children);
}
function Footer() {
  const {
    SiteFooter
  } = RIO;
  return /*#__PURE__*/React.createElement(SiteFooter, {
    address: ['6465 E. Mockingbird Lane', 'Suite 350, Dallas, Tx', '945-269-0101', 'info@riobjj.com'],
    columns: [['Home', 'Facility', 'Instructors', 'Membership plans', 'Events', 'Class calendar', 'Contact Us', 'Shop'], ['Instagram', 'YouTube']],
    badge: "badge-we-defy.png",
    copyright: "\xA9 2024 Rio Jiu-Jitsu Lifestyle, All Rights Reserved"
  });
}
Object.assign(window, {
  RIO,
  NAV,
  PHOTO,
  Band,
  Prose,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.OffsetPhotos = __ds_scope.OffsetPhotos;

__ds_ns.PhotoBanner = __ds_scope.PhotoBanner;

__ds_ns.PhotoStrip = __ds_scope.PhotoStrip;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
