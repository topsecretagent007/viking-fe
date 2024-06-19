import { useRef, useEffect } from 'react';

export default function CanvasLightning(props) {
    const canvasRef = useRef(null);


    useEffect(() => {
        // Draw canvas here...
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const lightningStrikeOffset = 5;
        const lightningStrikeLength = 400;
        const lightningBoltLength = 5;
        const lightningThickness = 4;
        const canvasHeight = canvas.height;
        const canvasWidth = canvas.width;

        const createVector = function (x, y) { return { x, y } }

        const getRandomFloat = function (min, max) {
            const random = Math.random() * (max - min + 1) + min;
            return random;
        }

        const getRandomInteger = function (min, max) {
            return Math.floor(getRandomFloat(min, max));
        }

        const clearCanvas = function (x, y, height, width) {
            let rectX = x || 0;
            let rectY = y || 0;
            let rectHeight = height || canvasHeight;
            let rectWidth = width || canvasWidth;
            context.clearRect(rectX, rectY, rectWidth, rectHeight);
            context.beginPath();
        }

        const line = function (start, end, thickness, opacity) {
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.lineWidth = thickness;
            context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            context.shadowBlur = 50;
            context.shadowColor = "#bd9df2";
            context.stroke();
            context.closePath();
        }

        class Lightning {
            constructor(x1, y1, x2, y2, thickness, opacity) {
                this.start = createVector(x1, y1);
                this.end = createVector(x2, y2);
                this.thickness = thickness;
                this.opacity = opacity;
            }
            draw() {
                return line(this.start, this.end, this.thickness, this.opacity);
            }
        }

        const interval = 1400;
        // const lightningStrikeOffset = 5;
        // const lightningStrikeLength = 100;
        // const lightningBoltLength = Math.random() * 10;
        // const lightningThickness = 4;
        let lightning = [];


        const createLightning = function () {
            lightning = [];
            let lightningX1 = getRandomInteger(2, canvasWidth - 2);
            let lightningX2 = getRandomInteger(lightningX1 - lightningStrikeOffset, lightningX1 + lightningStrikeOffset);
            lightning[0] = new Lightning(lightningX1, 0, lightningX2, lightningBoltLength, lightningThickness, 1);
            for (let l = 1; l < lightningStrikeLength; l++) {
                let lastBolt = lightning[l - 1];
                let lx1 = lastBolt.end.x;
                let lx2 = getRandomInteger(lx1 - lightningStrikeOffset, lx1 + lightningStrikeOffset);
                lightning.push(new Lightning(
                    lx1,
                    lastBolt.end.y,
                    lx2,
                    lastBolt.end.y + lightningBoltLength,
                    lastBolt.thickness,
                    lastBolt.opacity
                ));
            }
        }


        const setup = function () {
            createLightning();
            for (let i = 0; i < lightning.length; i++) {
                lightning[i].draw();
            }
        }

        const animate = function () {
            clearCanvas();

            for (let i = 0; i < lightning.length; i++) {
                lightning[i].opacity -= 0.01;
                lightning[i].thickness -= 0.05;
                if (lightning[i].thickness <= 2) {
                    lightning[i].end.y -= 0.05;
                }
                lightning[i].draw();
            }

            requestAnimationFrame(animate);
        }

        setup();
        requestAnimationFrame(animate);
        setInterval(function () {
            createLightning();
        }, interval)

    }, []);


    return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}