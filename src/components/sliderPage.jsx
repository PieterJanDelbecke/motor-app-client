import { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderPage = () => {
    const [sliderStart, setSliderStart] = useState(25)
    const [sliderEnd, setSliderEnd] = useState(75)
	const slider = useRef(Slider);

	const handelSliderChange = (sliderValue) => {
        const [start, end] = sliderValue
        if (start !== sliderStart){
            setSliderStart(start)
        }
        if (end !== sliderEnd){
            setSliderEnd(end)
        }
	};

	return (
		<>
			<h1>SliderPage</h1>
			<Slider range allowCross={false} onChange={handelSliderChange} defaultValue={[25, 75]}/>
		</>
	);
};

export default SliderPage;
