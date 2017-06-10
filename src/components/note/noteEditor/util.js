export const XYruler = () => {
	let fromX,
		fromY;
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute(
    'style',
    `position: absolute; top:0;left:0;height: ${
      document.body.clientHeight
      }px;width: 100%`,
  );
	const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('style', 'stroke-width: 4; stroke: red');

	svg.appendChild(line);
	document.body.appendChild(svg);

	document.body.addEventListener('mousedown', (e) => {
		fromX = e.pageX;
		fromY = e.pageY;
	});

	document.body.addEventListener('mousemove', (e) => {
		if (fromX === undefined) {
			return;
		}

		line.setAttribute('x1', fromX);
		line.setAttribute('x2', e.pageX);
		line.setAttribute('y1', fromY);
		line.setAttribute('y2', e.pageY);

		console.log(
      [fromX, fromY],
      ' to ',
      [e.pageX, e.pageY],
      'Distance:',
      Math.sqrt(Math.pow(fromX - e.pageX, 2) + Math.pow(fromY - e.pageY, 2)),
    );
	});

	document.body.addEventListener('mouseup', (e) => {
		fromX = undefined;
		fromY = undefined;
	});
};

// if (this.state.typewrite) {
//   const adjustScrollTop = (argu) => {
//       console.log(window.getSelection().getRangeAt(0), window.getSelection().getRangeAt(0).getClientRects())
//       if (window.getSelection().getRangeAt(0).getClientRects()[0].top > window.innerHeight/2) {
//             document.getElementsByClassName(css.right)[0].scrollTop =
//                 document.getElementsByClassName(css.right)[0].scrollTop
//                   - (window.innerHeight/2 - window.getSelection().getRangeAt(0).getClientRects()[0].top)
//       } else if (window.getSelection().getRangeAt(0).getClientRects()[0].top < window.innerHeight/2) {
//             document.getElementsByClassName(css.right)[0].scrollTop =
//                 document.getElementsByClassName(css.right)[0].scrollTop
//                   + (window.getSelection().getRangeAt(0).getClientRects()[0].bottom - window.innerHeight/2)
//       }
//       console.log(window.innerHeight/2, window.getSelection().getRangeAt(0).getClientRects()[0].bottom)
//   }

//   $('.fr-view').click(e => {
//     adjustScrollTop()
//   })

//   this.initControls.getEditor()('events.on', 'keydown', e => {

//       if (e.which == '13' || e.which == '10') {
//         adjustScrollTop()
//       }
//       if (e.which == '8') {
//         adjustScrollTop()
//       }
//       if (e.which == '38') {
//         adjustScrollTop()
//       }
//       if (e.which == '40') {
//         adjustScrollTop()
//       }

//   }, true);

// }
