'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var react$1 = require('@chakra-ui/react');
var react$2 = require('motion/react');
var system = require('@chakra-ui/system');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

var Arrow = /*#__PURE__*/react.memo(function Allow(_ref) {
  var paginate = _ref.paginate,
    resetTimer = _ref.resetTimer,
    direction = _ref.direction,
    style = _ref.style;
  var size = style === null || style === void 0 ? void 0 : style.size;
  var customStyle = function customStyle() {
    if (size === "s") {
      return {
        w: "20px",
        h: "30px",
        fontSize: "12px"
      };
    }
    return {}; // default styles
  };
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx(react$1.Flex, Object.assign({
      top: "calc(50% - 20px)",
      right: direction === "right" ? "10px" : "",
      left: direction === "left" ? "10px" : "",
      position: "absolute",
      w: "30px",
      h: "40px",
      bg: "none",
      color: "white",
      zIndex: "1",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      border: "none",
      borderRadius: "0.2rem",
      transition: ".3s",
      transform: direction === "left" ? "scale(-1)" : "",
      cursor: "pointer",
      _hover: {
        bg: "rgba(0,0,0,.7)"
      }
    }, customStyle(), {
      onClick: function handleRightClick() {
        paginate(direction === "right" ? 1 : -1);
        resetTimer();
      },
      children: "\u276F"
    }))
  });
});

var MotionImage = system.chakra(react$2.motion.img, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return react$2.isValidMotionProp(prop) || system.shouldForwardProp(prop);
  }
});

function CustomImage(_a) {
  var setMethod = _a.setMethod,
    props = __rest(_a, ["setMethod"]);
  var _useState = react.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  react.useEffect(function () {
    if (setMethod) {
      setMethod(isLoaded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);
  return jsxRuntime.jsxs(react$1.Flex, {
    h: "100%",
    w: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    children: [!isLoaded && jsxRuntime.jsx(react$1.Skeleton, {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%"
    }), jsxRuntime.jsx(MotionImage, Object.assign({
      onLoad: function onLoad() {
        return setIsLoaded(true);
      },
      loading: "lazy",
      decoding: "async",
      style: {
        visibility: isLoaded ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        cursor: props.drag ? "grab" : "default"
      }
    }, props))]
  });
}

function ImageText(_ref) {
  var text = _ref.text;
  return jsxRuntime.jsx(react$1.Heading, {
    w: {
      base: "80%",
      md: "50%"
    },
    fontSize: {
      base: "1.4rem",
      md: "2rem"
    },
    top: {
      base: "50%",
      md: "calc(50% - 20px)"
    },
    left: {
      base: "50%",
      md: "50px"
    },
    transform: {
      base: "translate(-50%, -50%)",
      md: "none"
    },
    textAlign: "center",
    color: "white",
    border: "solid gray",
    bg: "rgba(0,0,0,0.6)",
    p: "0.5rem 2rem",
    position: "absolute",
    textShadow: "2px 2px black",
    fontFamily: "palatino",
    zIndex: 2,
    children: text
  });
}

var MotionBox = system.chakra(react$2.motion.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return react$2.isValidMotionProp(prop) || system.shouldForwardProp(prop);
  }
});

function Selector(_ref) {
  var images = _ref.images,
    imageIndex = _ref.imageIndex,
    paginate = _ref.paginate,
    resetTimer = _ref.resetTimer;
  var selectorWidth = images.length * 32;
  return jsxRuntime.jsx(react$1.Flex, {
    w: "100%",
    position: "absolute",
    justifyContent: "center",
    bottom: "20px",
    zIndex: "10",
    children: jsxRuntime.jsx(react$1.HStack, {
      fontWeight: "bold",
      w: selectorWidth,
      gap: 2,
      justifyContent: "center",
      children: images.map(function (_, index) {
        return jsxRuntime.jsx(react$1.Box, {
          fontWeight: "bold",
          color: "gray",
          onClick: function handleClick() {
            if (imageIndex !== index) {
              paginate(index - imageIndex);
              resetTimer();
            }
          },
          children: jsxRuntime.jsx(react$1.Center, {
            children: jsxRuntime.jsx(react$1.Box, {
              fontSize: {
                base: "0.5rem",
                md: "0.8rem"
              },
              cursor: "pointer",
              transition: ".3s",
              _hover: {
                color: "white"
              },
              children: index === imageIndex ? "○" : "●"
            })
          })
        }, index);
      })
    })
  });
}

//This number 10000 acts like a minimum "swipe power" to be considered a valid swipe.
var swipeConfidenceThreshold = 10000;
function swipePower(offset, velocity) {
  return Math.abs(offset) * velocity;
}
function getVariants() {
  return {
    enter: function enter(direction) {
      return {
        x: direction > 0 ? 1000 : -1e3,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: function exit(direction) {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1e3,
        opacity: 0,
        transition: {
          duration: 0.5
        }
      };
    }
  };
}
function Slideshow(_ref) {
  var _ref$slideDuration = _ref.slideDuration,
    slideDuration = _ref$slideDuration === void 0 ? 5000 : _ref$slideDuration,
    images = _ref.images,
    arrowConfig = _ref.arrowConfig,
    selectorConfig = _ref.selectorConfig,
    textConfig = _ref.textConfig,
    imageConfig = _ref.imageConfig;
  var _useState = react.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    check = _useState2[0],
    setCheck = _useState2[1];
  var _useState3 = react.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    refIsLoaded = _useState4[0],
    setRefIsLoaded = _useState4[1];
  var _useState5 = react.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    paused = _useState6[0],
    setPaused = _useState6[1];
  var _useState7 = react.useState([0, 0]),
    _useState8 = _slicedToArray(_useState7, 2),
    _useState8$ = _slicedToArray(_useState8[0], 2),
    page = _useState8$[0],
    direction = _useState8$[1],
    setPage = _useState8[1];
  var imageIndex = wrap(0, images.length, page);
  react.useEffect(function setupTimer() {
    if (paused) return;
    var timeoutID = setTimeout(function handleTimeout() {
      paginate(1);
      resetTimer();
    }, slideDuration);
    return function cleanup() {
      clearTimeout(timeoutID);
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [check, paused]);
  var paginate = react.useCallback(function (newDirection) {
    setPage(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        prevPage = _ref3[0];
      return [prevPage + newDirection, newDirection];
    });
  }, []);
  var resetTimer = react.useCallback(function () {
    setCheck(function (prev) {
      return prev + 1;
    });
  }, []);
  function imageProps(index) {
    return {
      src: images[index].url,
      alt: "image",
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 0"
    };
  }
  return jsxRuntime.jsxs(react$1.Box, {
    w: "100%",
    h: "100%",
    position: "relative",
    children: [jsxRuntime.jsx(react$2.AnimatePresence, {
      initial: false,
      custom: direction,
      children: jsxRuntime.jsxs(MotionBox, {
        custom: direction,
        variants: getVariants(),
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          opacity: {
            duration: 0.2
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        },
        w: "100%",
        h: "100%",
        position: "absolute",
        children: [jsxRuntime.jsx(CustomImage, Object.assign({
          setMethod: setRefIsLoaded
        }, imageProps(imageIndex), {
          h: "100%",
          w: "100%",
          onPointerDown: function onPointerDown() {
            setPaused(true);
          },
          onPointerUp: function onPointerUp() {
            setPaused(false);
            resetTimer();
          },
          drag: (imageConfig === null || imageConfig === void 0 ? void 0 : imageConfig.grab) === false ? false : "x",
          dragConstraints: {
            left: 0,
            right: 0
          },
          dragElastic: 1,
          // @ts-ignore
          onDragEnd: function onDragEnd(_, _ref4) {
            var offset = _ref4.offset,
              velocity = _ref4.velocity;
            var swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
            resetTimer();
            setPaused(false);
          }
        })), (textConfig === null || textConfig === void 0 ? void 0 : textConfig.disable) !== true && refIsLoaded && jsxRuntime.jsx(ImageText, {
          text: images[imageIndex].text
        })]
      }, page)
    }), (arrowConfig === null || arrowConfig === void 0 ? void 0 : arrowConfig.disable) !== true && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx(Arrow, {
        paginate: paginate,
        resetTimer: resetTimer,
        direction: "left",
        style: arrowConfig === null || arrowConfig === void 0 ? void 0 : arrowConfig.style
      }), jsxRuntime.jsx(Arrow, {
        paginate: paginate,
        resetTimer: resetTimer,
        direction: "right",
        style: arrowConfig === null || arrowConfig === void 0 ? void 0 : arrowConfig.style
      })]
    }), (selectorConfig === null || selectorConfig === void 0 ? void 0 : selectorConfig.disable) !== true && jsxRuntime.jsx(Selector, {
      images: images,
      imageIndex: imageIndex,
      paginate: paginate,
      resetTimer: resetTimer
    })]
  });
}

exports.Slideshow = Slideshow;
//# sourceMappingURL=index.cjs.cjs.map
