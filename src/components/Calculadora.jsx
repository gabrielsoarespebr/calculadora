import React from 'react';
import { useState } from 'react';
import './Calculadora.css';

export default function Calculadora() {
    const [screen, setScreen] = useState(0);

    function input(e) {
        const input = e.target.textContent;
        (screen === 0) ? setScreen(input) : setScreen(screen + input);
    }

    function clear() {
        setScreen(0);
    }

    function percent() {
        setScreen(screen / 100);
    }

    function opposite() {
        setScreen(-screen);
    }

    function dot(e) {
        const input = e.target.textContent;
        if (!(screen.includes("."))) setScreen(screen + input);
    }

    function result() {
        let indexOperator;
        let num1;
        let num2;

        if (screen.includes('+')) {
            indexOperator = screen.indexOf('+');
            num1 = screen.slice(0, indexOperator);
            num2 = screen.slice((indexOperator + 1));
            setScreen(Number(num1) + Number(num2));
        }
        if (screen.includes('-')) {
            indexOperator = screen.indexOf('-');
            num1 = screen.slice(0, indexOperator);
            num2 = screen.slice((indexOperator + 1));
            setScreen(Number(num1) - Number(num2));
        };
        if (screen.includes('X')) {
            indexOperator = screen.indexOf('X');
            num1 = screen.slice(0, indexOperator);
            num2 = screen.slice((indexOperator + 1));
            setScreen(Number(num1) * Number(num2));
        };
        if (screen.includes('/')) {
            indexOperator = screen.indexOf('/');
            num1 = screen.slice(0, indexOperator);
            num2 = screen.slice((indexOperator + 1));
            setScreen(Number(num1) / Number(num2));
        };
    }

    return (
        <div className='wrapper'>
            <h1 className='result'>{screen}</h1>

            <button className='grayBtn' onClick={clear}>AC</button>
            <button className='grayBtn' onClick={opposite}>+/-</button>
            <button className='grayBtn' onClick={percent}>%</button>
            <button className='orangeBtn' onClick={input}>/</button>

            <button onClick={input}>7</button>
            <button onClick={input}>8</button>
            <button onClick={input}>9</button>
            <button className='orangeBtn' onClick={input}>X</button>

            <button onClick={input}>4</button>
            <button onClick={input}>5</button>
            <button onClick={input}>6</button>
            <button className='orangeBtn' onClick={input}>-</button>

            <button onClick={input}>1</button>
            <button onClick={input}>2</button>
            <button onClick={input}>3</button>
            <button className='orangeBtn' onClick={input}>+</button>

            <button className='twoSlotsZero' onClick={input}>0</button>
            <button onClick={dot}>.</button>
            <button className='orangeBtn' onClick={result}>=</button>
        </div>
    );
}