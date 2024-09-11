import {useEffect, useState} from 'react'
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

import tree from './assets/tree.png'
import line1 from './assets/line1.png'
import line2 from './assets/line2.png'
import line3 from './assets/line3.png'
import line4 from './assets/line4.png'
import music from './assets/timberhearth.mp3'

function App() {
    const [init, setInit] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    function audio() {
        // Setting state to ensure that the audio is only played once
        if (!isPlaying) {
            let audio = new Audio(music);

            setIsPlaying(true);

            audio.volume = 0.4;
            audio.play().then(r => setIsPlaying(false));
        }
    }

    useEffect(() => {
        audio();

        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="w-full full flex justify-center px-5 select-none bg-gray-950">
            <div className="z-0">
                {init && <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 4,
                                    "size_min": 0.3,
                                    "sync": false
                                }
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 600
                                }
                            }
                        }
                    }}
                />
                }
            </div>

            <QPoem />

        </div>
    )
}

function QPoem() {

    const [poem, setPoem] = useState(getPoem());

    function getPoem() {
        const tempPoem = [line1, line2, line3, line4];
        let result = [], randomIndex;

        for (let line in tempPoem) {
            randomIndex = Math.floor(Math.random() * (tempPoem.length + 1));

            result.splice(randomIndex, 0, tempPoem[line]);
        }

        return result;
    }

    function setPoems() {
        setPoem(getPoem());
    }


    return (
        <div className="w-full grid [grid-template-areas:'stack'] z-50" onClick={setPoems}>

            <div className="[grid-area:stack] w-full">
                <div className="flex justify-center items-center overflow-hidden">
                    <img src={tree} className="h-[calc(100dvh)]" alt="Tree"/>
                </div>
            </div>

            <div className="[grid-area:stack] w-full">
                <div className="flex justify-center items-center h-full">
                    <div className="sm:scale-75">
                        {poem.map((line, index) => (
                            <img src={line} key={index} alt="Poem Line"/>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}


export default App
