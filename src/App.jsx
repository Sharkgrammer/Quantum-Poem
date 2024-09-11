import {useState} from 'react'

import tree from './assets/tree.png'
import line1 from './assets/line1.png'
import line2 from './assets/line2.png'
import line3 from './assets/line3.png'
import line4 from './assets/line4.png'

function App() {

    return (
        <div className="w-full full bg-black flex justify-center px-5">

            <QPoem/>

        </div>
    )
}

function QPoem() {

    const [poem, setPoem] = useState(getPoem());

    function getPoem(){
        const tempPoem = [line1, line2, line3, line4];
        let result = [], randomIndex;

        for (let line in tempPoem){
            randomIndex = Math.floor(Math.random() * (tempPoem.length + 1));

            result.splice(randomIndex, 0, tempPoem[line]);
        }

        return result;
    }

    function setPoems(){
        setPoem(getPoem());
    }

    return (
        <div className="w-full grid [grid-template-areas:'stack']" onClick={setPoems}>

            <div className="[grid-area:stack] w-full">
                <div className="flex justify-center items-center overflow-hidden">
                    <img src={tree} className="h-[calc(100dvh)]" alt="Tree"/>
                </div>
            </div>

            <div className="[grid-area:stack] w-full">
                <div className="flex justify-center items-center h-full">
                    <div className="sm:scale-75" key={poem}>
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
