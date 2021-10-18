import {useLayoutEffect} from 'react'
import * as colorString from 'color-string'

const useThemeApplier = (theme, element=document.getElementById('root')) => {
	useLayoutEffect(()=>{
		if(!theme){return}
		Object.entries(theme).forEach(([v,c])=>{
			const cssVariableColor =  colorString.get.rgb((c || 'transparent').toString().trim()) || [0,0,0,0]
			const cssVariableValue = `${cssVariableColor[0]}, ${cssVariableColor[1]}, ${cssVariableColor[2]}`
			if(cssVariableColor[3]!==0){
				element.style.setProperty(`--${v}`,cssVariableValue)
			} else {
				console.log(`Color ${v} will not be changed. Value is: ${c}`)
			}
		})
	},[theme])
	return null
}

export default useThemeApplier