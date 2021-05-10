import React, { useRef, useEffect, useState } from 'react'
import { convertTimelineList } from '../methods/league_methods';


const MapCanvas = ({ location, ...props }) => {
    const [frame, setFrame] = useState(0);
    const locationsForUser = Object.values(location).map((item => {
        return { converted: convertTimelineList(item.position), ...item };

    }))
    console.log("location", location)
    console.log("locationsForUser", locationsForUser)
    const canvasRef = useRef(null)
    const drawPosition = (ctx, position, user, index) => {
        const blue = user.team == "Blue"
        position = position.position;
        const minX = 0;
        const minY = 0;
        const maxX = 14589;
        const maxY = 14673;

        const posX = (position.x - minX) / (maxX - minX);
        const posY = (position.y - minY) / (maxY - minY);

        const locX = ctx.canvas.width * posX;
        const locY = ctx.canvas.height - (ctx.canvas.height * posY);
        var img = new Image;
        img.onload = function () {
            ctx.drawImage(img, locX, locY, 16, 16); // Or at whatever offset you like
        };
        img.src = "https://static.u.gg/assets/lol/riot_static/11.7.1/img/champion/" + user?.champImage;
        // ctx.beginPath();
        ctx.beginPath();
        ctx.strokeStyle = blue ? '#0000ff' : '#ff0000';
        ctx.rect(locX, locY, 16, 16);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.strokeStyle = "#000000";
        // ctx.fillStyle = blue ? '#0000ff' : '#ff0000';
        // ctx.arc(locX, locY, 8, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.stroke();
        // ctx.font = '8pt Calibri';
        // ctx.fillStyle = 'white';
        // ctx.textAlign = 'center';
        // ctx.fillText(index, locX, locY + 3);
    }

    const drawPositions = (ctx, index) => {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        for (const i in locationsForUser) {
            const item = locationsForUser[i];
            const loc = item.converted;

            drawPosition(ctx, loc[index % loc.length], item.user, i);

        }
    }

    useEffect(() => {
        console.log("useEffect");
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        const frameRate = 50;
        const render = () => {
            frameCount++
            if (frameCount % frameRate == 0) {
                const count = Math.floor(frameCount / frameRate);
                drawPositions(context, count);
                setFrame(count);

            }
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        // drawPositions(context, 0);
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <>
        <div className="map_container">
            <div className="canvas_container">
                <div className="time">
                    {locationsForUser && locationsForUser[1] && locationsForUser[1].converted[frame] && locationsForUser[1].converted[frame].time}
                </div>
                <img src="https://oce.learnwithleague.com/wp-content/uploads/2019/06/Summoners-Rift-Overview-League-of-Legends-Artwork-Wallpaper-lol.jpg" width="700px" height="500px" alt="" />
                <canvas ref={canvasRef} {...props} width="520px" height="420px" />
            </div>
            <div className="info_container">
                {location && Object.values(location).map((item) => {
                    const user = item?.user;

                    return <>
                        <div className="player">
                            <div className="image"><img src={"https://static.u.gg/assets/lol/riot_static/11.7.1/img/champion/" + user?.champImage} alt={user?.champName} /></div>
                            <div className="username">{user?.name}</div>
                        </div>
                    </>
                })}
            </div>
        </div>
        <style jsx>{`
        .map_container{
            display:flex;
            flex-direction:row;
        }
        .info_container{
            display:grid;
            grid-template-rows: repeat(5, 1fr);
            grid-auto-flow: column;
        }
        .player{
            display:flex;
            flex-direction:row;
            align-items:center;
        }
        .player img{
            width: 3rem; 
            height: 3rem;
            border-radius:100%;
        }
        .canvas_container{
            position:relative;
        }
        canvas{
            position: absolute;
            left: 70px;
            top: 50px;
        }
        `}</style>
    </>
}

export default MapCanvas;