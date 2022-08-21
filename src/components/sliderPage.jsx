import { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import Cropper from "react-cropper";
import "rc-slider/assets/index.css";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
	margin-bottom: 20px;
`;

const SliderPage = () => {
	const [sliderStart, setSliderStart] = useState(0);
	const [sliderEnd, setSliderEnd] = useState(100);
    const [count, setCount] = useState(0)

	const cropperRef = useRef(null);
	const videoRef = useRef(null);
	const buttonRef = useRef(null);

	const handelSliderChange = (sliderValue) => {
		const [start, end] = sliderValue;
		if (start !== sliderStart) {
			setSliderStart(start);
            changeVideoSeek(start)
		}
		if (end !== sliderEnd) {
			setSliderEnd(end);
            changeVideoSeek(end)
		}
	};

	const videoLengthMapping = (duration, value) => {
		const sector = duration / 100;
		return sector * value;
	};

    const changeVideoSeek = (value) => {
        const video = videoRef?.current;
        if(!video || isNaN(video.duration)) return
        videoRef.current.currentTime = videoLengthMapping(video.duration, value)
    }

	const handleTrim = async () => {
		const video = videoRef?.current;
		console.dir(video)
		const data = {
			duration: video.duration,
			start: sliderStart,
			end: sliderEnd,
		};
		const trimResponse = await axios.post(
			"http://localhost:8000/video/trim",
			{
				...data,
			},
			{
				headers: {
					"content-Type": "application/json",
				},
			}
		);
		console.log(trimResponse);
	};

	const handleCrop = async () => {
		const cropObject = cropperRef?.current;
		const cropData = cropObject.cropper.getData();
		const imageData = cropObject.cropper.getImageData();
		const data = {
			url: "url",
			imageWidth: imageData.naturalWidth,
			imageHeight: imageData.naturalHeight,
			aspectRatio: imageData.aspectRatio,
			cropX: cropData.x,
			cropY: cropData.y,
			cropWidth: cropData.width,
			cropHeight: cropData.height,
		};

		const cropResponse = await axios.post(
			"http://localhost:8000/video/crop",
			{
				...data,
			},
			{
				headers: {
					"content-Type": "application/json",
				},
			}
		);
		console.log(cropResponse);
	};

	const handleButtonClick = () => {
		const button = buttonRef?.current;
		console.dir(button);
	};

    const handleCount = async () => {
        setCount((prevCount) => prevCount + 1)
        const countResponse = await axios.get(
            `http://localhost:8000/video/trim/${count}`
        )
        console.log(countResponse)
    } 

	return (
		<>
			<h1>SliderPage</h1>
			<video ref={videoRef} src={"/output2.mp4"} width={800} height={800} controls />
			<div style={{ margin: 20 }}>
				<Slider range allowCross={false} onChange={handelSliderChange} defaultValue={[0, 100]} />
			</div>
			<Button onClick={handleTrim}>Trim</Button>
			<Cropper src={"/test-pic-landscape.jpeg"} style={{ height: 800, width: "100%" }} ref={cropperRef} />
			<Button onClick={handleCrop}>Crop</Button>
			<Button ref={buttonRef} onClick={handleButtonClick}>
				buttonRef
			</Button>
            <Button onClick={handleCount}>Get Count</Button>
		</>
	);
};

export default SliderPage;
