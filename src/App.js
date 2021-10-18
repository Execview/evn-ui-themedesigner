import React, { useState, useRef, useEffect } from 'react';
import classes from './App.module.css';
import ColorBox from './ColorBox';
import useThemeApplier from './useThemeApplier';

import colorDescriptions from './colorDescriptions.json'
import defaultTheme from './themes/default.json'
import pinkTheme from './themes/pink.json'
import blueTheme from './themes/blue.json'
import printTheme from './themes/print.json'

const App = (props) => {
	const activeTheme = "default"
	const themes = {
		default: defaultTheme,
		pink: pinkTheme,
		blue: blueTheme,
	 	print: printTheme
	}
	useThemeApplier(themes[activeTheme] || defaultTheme)

	const ref = useRef()
	const [current, setCurrent] = useState()
	useEffect(()=>ref.current && setCurrent(ref.current),[ref.current])
	
	let items = []
	const appEl = current

	for(let i=1; i<30; i++){

		const colorCSSVariable = (appEl && getComputedStyle(appEl).getPropertyValue(`--color${i}`))
		const colorStyle = colorCSSVariable && `rgb(${colorCSSVariable})`
		const style = {
			minHeight: '100px',
			width: '150px',
			padding: '10px',
			position:'relative'
		}
		const item = <ColorBox key={i} style={style} color={colorStyle} name={`Colour ${i}`} description={colorDescriptions['color'+i]}/>
		items.push(item)
	}

	return (
		<div id="app" ref={ref} className={`${classes['app']}`}>
			<div className={classes['colors']}>
				{items}
			</div>
    	</div>
	);
}

export default App;
