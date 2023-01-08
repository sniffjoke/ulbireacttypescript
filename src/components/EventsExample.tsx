import React, {ChangeEvent, FC, useState, MouseEvent, DragEvent, useRef} from 'react';
import {BrowserRouter, Route} from "react-router-dom";


const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrug] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        // console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        // e.preventDefault()
        console.log('DRAG')
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrug(false)
        console.log('DROP')
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrug(true)
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrug(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder={'Управляемый'}/>
            <input ref={inputRef} type="text" placeholder={'Неуправляемый'}/>
            <button onClick={clickHandler}>BUTTON!</button>
            <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: '200px', height: '200px', background: isDrag ? 'green' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;
