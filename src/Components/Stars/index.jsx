import Star from "../Star/index";
import "../../Style/Components/Stars/stars.scss"

const Stars = (Props) => {
const number = Props.note;
const One = number;
const Two = number - 1;
const Three = number - 2 ;
const Four = number - 3;
const Five = number - 4;

const Stars = [One, Two, Three, Four, Five];


return (
    <div className="StarsComp">
        { Stars.map(({d}, index) => 
        <Star state={Stars[index]} key={`${d}--${index}`} class={index + 2}/>)
        }
    </div>
)
}

export default Stars