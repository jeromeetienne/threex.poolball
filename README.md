threex.poolball
===============

threex.poolball is a three.js extension which helps you build pool balls.
It provides dynamically generated models of pool ball, so no model download needed.
May be fun to play with when you start with three.js, funnier than plain sphere for sure :)

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.poolball/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.poolball/blob/master/examples/basic.html)\] :
It shows this feature, and that one which is coded like that.
* [examples/demo.html](http://jeromeetienne.github.io/threex.poolball/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.poolball/blob/master/examples/demo.html)\] :
It does that this way, and it is cool in that case.

How To Install It
=================

You can install it via script tag

```html
<script src='threex.poolball.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.poolball
```

A Screenshot
============
[![screenshot](https://raw.githubusercontent.com/jeromeetienne/threex.poolball/master/examples/images/screenshot-threex-poolball-512x512.jpg)](http://jeromeetienne.github.io/threex.poolball/examples/demo.html)

How To Use It
=============

Here is the default usages

```
var mesh	= THREEx.createPoolBall();
scene.add(mesh)
```

this is with custom arguments

```
var mesh	= THREEx.createPoolBall({
	ballDesc	: '0',	// the text which gonna be written on the ball
	stripped	: true,	// true if the ball must be stripped, false otherwise
	textureW	: 512	// the width/height of the created texture for this ball
});
scene.add(mesh)
```

Some ball description are already done.

* ```cue``` will return an unstripped white ball
* ```black``` will return an unstripped black ball
* ```1``` to ```9``` will assign the official colors for [nine-ball](http://en.wikipedia.org/wiki/Nine-ball) pool
