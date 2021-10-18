import React, {useState, useEffect, useRef} from 'react'
import { ChromePicker } from 'react-color'

const ColorBox = (props) => {
	const boxRef = useRef();
	const [open, setOpen] = useState()
	const [col, setCol] = useState()
	useEffect(()=>setCol(props.color),[props.color])

	useEffect(() => {
		document.addEventListener('mousedown', onClickOutside)
		return () => {document.removeEventListener('mousedown', onClickOutside)}
	},[])

	const onClickOutside = (e) => {
		if (boxRef.current && !boxRef.current.contains(e.target)) {
			setOpen(false);
		}
	}

	const style = {
		...props.style,
		display:'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: col
	}

	const modalStyle = {
		position: 'absolute',
		top:'50%',
		left:'100%',
		zIndex:1
	}


	console.log(col)
	return (
		<div style={style} onClick={()=>copyToClipboard(col)} onContextMenu={(e)=>{e.preventDefault();setOpen(true)}}>
			<div>{props.name}</div>
			<div>{props.description}</div>
			<div>{col}</div>
			{open && <div ref={boxRef} style={modalStyle}><ChromePicker disableAlpha color={col} onChangeComplete={c=>setCol(c.hex)}/></div>}
		</div>
	)
}

export default ColorBox

const copyToClipboard = (text) => {
	console.log(text)
	if(!navigator.clipboard){return}
	navigator.clipboard.writeText(text)
	console.log(text)
}