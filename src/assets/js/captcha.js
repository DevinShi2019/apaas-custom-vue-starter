'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj };

(function () {
  // var canvasRef = ''
  var opts = {
    imgurl: '',
    cw: 60,
    ch: 60,
    precision: 5,
    onSuccess: null,
    onError: null,
    successText: '',
    failText: '',
    eventinfo: {
      flag: false,
      left: 0,
      clipleft: 0,
      currentX: 0
    }
  }

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  function createCaptchaBox(canvas) {
    var captchaBox = document.createElement('div')
    captchaBox.className = 'captcha-box'
    captchaBox.style.width = canvas.width + 'px'

    var dragBox = document.createElement('div')
    dragBox.className = 'drag-box'
    dragBox.id = 'drag-box'

    var canvasBox = document.createElement('div')
    canvasBox.className = 'canvas-box'
    canvasBox.appendChild(canvas.cloneNode(true))
    canvasBox.appendChild(createResult())

    captchaBox.appendChild(canvasBox)
    captchaBox.appendChild(createDragBar())
    canvas.parentNode.replaceChild(captchaBox, canvas)

    captchaBox.appendChild(dragBox)

    return captchaBox
  }

  function createDragBar() {
    var dragbar = document.createElement('div')
    dragbar.className = 'captcha-dragbar'
    dragbar.innerHTML = '\n    <div class="drag-option-bg">\n      <div class="drag-option">\n        <div class="drag-track"></div>\n        <div id="drag-slider" class="drag-slider"></div>\n        <div class="drag-btn">\n          <i id="drag-btn-refresh" class="refresh"></i>\n        </div>\n      </div>\n    </div>\n    '
    return dragbar
  }

  function createResult() {
    var result = document.createElement('div')
    result.id = 'captcha-result'
    result.className = 'captcha-result'
    return result
  }

  function createCanvas(w, h) {
    var canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    return canvas
  }

  function clipPath(ctx, startx, starty) {
    startx = startx + 0.2
    starty = starty + 0.2

    var subw = parseInt((opts.cw - 1) / 6)
    var subh = parseInt((opts.ch - 1) / 6)
    var radius = Math.min(subw, subh)
    var clipw = subw * 5 + 0.5
    var cliph = subh * 5 + 0.5

    ctx.beginPath()
    ctx.moveTo(startx, starty)
    ctx.lineTo(startx + clipw, starty)
    ctx.lineTo(startx + clipw, starty + parseInt(cliph / 2) - radius)
    ctx.arc(startx + clipw, starty + parseInt(cliph / 2), radius, -Math.PI / 2, Math.PI / 2, false)
    ctx.lineTo(startx + clipw, starty + cliph)
    ctx.lineTo(startx + clipw - (parseInt(clipw / 2) - radius), starty + cliph)
    ctx.arc(startx + parseInt(clipw / 2), starty + cliph, radius, 0, Math.PI, false)
    ctx.lineTo(startx, starty + cliph)
    ctx.lineTo(startx, starty)
    ctx.closePath()
  }

  function fillClip(canvas, startx, starty, alpha) {
    var ctx = canvas.getContext('2d')
    clipPath(ctx, startx, starty)

    ctx.fillStyle = 'rgba(0,0,0, ' + alpha + ')'
    ctx.fill()
  }

  function strokeClip(canvas, startx, starty) {
    var ctx = canvas.getContext('2d')
    clipPath(ctx, startx, starty)

    ctx.strokeStyle = '#fff'
    ctx.stroke()
  }

  function randomNum(min, max) {
    var rangeNum = max - min
    var num = min + Math.round(Math.random() * rangeNum)
    return num
  }

  function getStartPoint(w, h) {
    var padding = 10
    var startw = opts.cw + padding
    var starth = opts.ch + padding
    if (w < startw * 2 || h < starth) return

    var startPoint = {
      startx: randomNum(startw, w - startw),
      starty: randomNum(padding, h - starth)
    }
    return startPoint
  }

  function eventInit(startx, refreshMethod) {
    var dragBox = document.getElementById('drag-box')
    var slider = document.getElementById('drag-slider')
    var clipcanvas = document.getElementById('captcha-clipcanvas')
    var result = document.getElementById('captcha-result')
    var refreshBtn = document.getElementById('drag-btn-refresh')
    var resultClass = result.className

    opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'))
    opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'))

    // var close = function close() {}
    var reset = function reset() {
      var boxClassName = window.captchaBox.className

      // window.captchaBox.className += ' shake';

      setTimeout(function () {
        slider.style.left = '10px'
        clipcanvas.style.left = '20px'

        opts.eventinfo.left = 10
        opts.eventinfo.clipleft = 20
      }, 500)
      setTimeout(function () {
        result.className = resultClass
        window.captchaBox.className = boxClassName
      }, 1000)
    }

    var moveStart = function moveStart(e) {
      opts.eventinfo.flag = true
      if (e.touches) {
        opts.eventinfo.currentX = e.touches[0].clientX
      } else {
        opts.eventinfo.currentX = e.clientX
      }
      dragBox.className = dragBox.className + ' drag-box-over'
    }
    var move = function move(e) {
      if (opts.eventinfo.flag) {
        if (e.touches) {
          var disX = e.touches[0].clientX - opts.eventinfo.currentX
        } else {
          disX = e.clientX - opts.eventinfo.currentX
        }
        if (disX >= -10 && disX <= (dragBox.clientWidth - opts.cw - 10)) {
          slider.style.left = opts.eventinfo.left + disX + 'px'
          clipcanvas.style.left = opts.eventinfo.clipleft + disX + 'px'
        } else {
          e.preventDefault()
        }

        if (e.preventDefault) {}
        return false
      }
    }
    var moveEnd = function moveEnd(e) {
      dragBox.className = 'drag-box'
      if (opts.eventinfo.flag) {
        opts.eventinfo.flag = false
        opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'))
        opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'))

        if (Math.abs(startx - opts.eventinfo.left) <= opts.precision) {
          result.innerHTML = opts.successText
          result.className = resultClass + ' success'
          opts.onSuccess && opts.onSuccess()
        } else {
          result.innerHTML = opts.failText
          result.className = resultClass + ' fail'

          reset()
          opts.onError && opts.onError()
        }
      }
    }

    window.captchaMoveEnd = moveEnd

    slider.addEventListener('touchstart', moveStart)
    slider.addEventListener('mousedown', moveStart)
    slider.addEventListener('touchmove', move)
    slider.addEventListener('mousemove', move)
    document.addEventListener('touchend', moveEnd)
    document.addEventListener('mouseup', moveEnd)

    dragBox.addEventListener('touchmove', move)
    dragBox.addEventListener('mousemove', move)

    refreshBtn.addEventListener('click', refreshMethod)
  }

  var imgCaptcha = function imgCaptcha(canvas, options) {
    if (window.captchaMoveEnd) {
      document.removeEventListener('touchend', window.captchaMoveEnd)
      document.removeEventListener('mouseup', window.captchaMoveEnd)
      window.captchaMoveEnd = undefined
    }

    for (var k in options) {
      if (options.hasOwnProperty(k)) {
        opts[k] = options[k]
      }
    }

    if (!canvas || !opts.imgurl) {
      console.error('verify params is error')
      return
    }

    if (canvas.tagName !== 'CANVAS') {
      console.error('param canvas must be canvas')
      return
    }
    const resetCanvas = canvas.cloneNode()

    window.captchaBox = createCaptchaBox(canvas)

    var refresh = function refresh() {
      if (options.container) {
        options.container.innerHTML = ''
        const innerCanvas = resetCanvas.cloneNode()
        options.container.appendChild(innerCanvas)
        imgCaptcha(innerCanvas, options)
      }
    }

    readerCaptcha(refresh)

    return {
      refresh
    }
  }

  var readerCaptcha = function readerCaptcha(refresh) {
    let canvas = window.captchaBox.children[0].children[0]
    canvas.className += canvas.className + ' captcha-bg'
    var img = new Image()
    img.onload = function () {
      var w = canvas.width
      var h = canvas.height

      var startPoint = getStartPoint(w, h)
      if (!startPoint) {
        console.error('can not get the start point')
        return
      }
      var startx = startPoint.startx
      var starty = startPoint.starty

      canvas.getContext('2d').drawImage(img, 0, 0, w, h)
      fillClip(canvas, startx, starty, 0.7)

      var sourceCanvas = createCanvas(w, h)
      var sctx = sourceCanvas.getContext('2d')
      sctx.drawImage(img, 0, 0, w, h)
      sctx.globalCompositeOperation = 'destination-in'

      var destCanvas = createCanvas(opts.cw, opts.ch)
      fillClip(destCanvas, 0, 0, 1)

      sctx.drawImage(destCanvas, startx, starty)

      var clipCanvas = createCanvas(opts.cw, opts.ch)
      clipCanvas.id = 'captcha-clipcanvas'
      clipCanvas.className = 'captcha-clipcanvas'
      clipCanvas.getContext('2d').putImageData(sctx.getImageData(startx, starty, opts.cw, opts.ch), 0, 0)

      strokeClip(clipCanvas, 0, 0)

      clipCanvas.style.top = starty + 'px'
      // captchaBox.appendChild(clipCanvas)

      eventInit(startx, refresh)
    }

    opts.imgurl = isArray(opts.imgurl) ? opts.imgurl : [opts.imgurl]

    var urlIndex = Math.floor(Math.random() * opts.imgurl.length)
    img.src = opts.imgurl[urlIndex]
  }

  // if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
  //   module.exports = imgCaptcha
  // } else if (typeof define === 'function' && define.amd) {
  //   define([], function () {
  //     return imgCaptcha
  //   })
  // } else if (window) {
  //   window.imgCaptcha = imgCaptcha
  // }
})()
