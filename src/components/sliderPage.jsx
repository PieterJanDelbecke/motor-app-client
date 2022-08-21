import { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import Cropper from "react-cropper";
import "rc-slider/assets/index.css";
import "cropperjs/dist/cropper.css";

const SliderPage = () => {
	const [sliderStart, setSliderStart] = useState(25);
	const [sliderEnd, setSliderEnd] = useState(75);

    const cropperRef = useRef(null)

	const handelSliderChange = (sliderValue) => {
		const [start, end] = sliderValue;
		if (start !== sliderStart) {
			setSliderStart(start);
		}
		if (end !== sliderEnd) {
			setSliderEnd(end);
		}
	};

    const handleCrop =() => {
        const cropObject = cropperRef?.current
        console.log(cropObject.cropper.getData())
        const cropData = cropObject.cropper.getData()
    }

	return (
		<>
			<h1>SliderPage</h1>
			<div style={{ margin: 20 }}>
				<Slider range allowCross={false} onChange={handelSliderChange} defaultValue={[25, 75]} />
			</div>
			<Cropper src={"/test-pic-landscape.jpeg"} style={{ height: 800 , width: "100%" }} ref={cropperRef}/>
            <button onClick={handleCrop}>Crop</button>
		</>
	);
};

export default SliderPage;
