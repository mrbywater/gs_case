import './PriceSlider.scss'
import {useState} from "react";
import {Slider} from "@mui/material";
import {DefaultButton} from "../formComponents/DefaultButton";

const confirmPrice = {
    height: "30px",
    width: '40px'
}

const PriceSlider = (props : any) => {

    const [value, setValue] = useState<number[]>([0, 1000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(value)
    };

    const inputValueHandler = (id : string) => (event : any) =>  {

        if (/^\d*$/.test(event?.target?.value)) {
            if (id === 'min') {
                setValue([event?.target?.value, value[1]])
            } else {
                setValue([value[0], event?.target?.value])
            }
        }
    }

    return (
        <div className='priceSliderContainer'>
            <div className='priceSliderInputContainer'>
                <input
                    type="text"
                    value={value[0]}
                    onChange={inputValueHandler('min')}
                    pattern='\d*'
                />
                -
                <input
                    type="text"
                    value={value[1]}
                    onChange={inputValueHandler('max')}
                    pattern='\d*'
                />
                <DefaultButton
                    text={'OK'}
                    buttonStyle={confirmPrice}
                />
            </div>
            <Slider
                // getAriaLabel={() => 'Temperature range'}
                min={0}
                max={1000}
                value={value}
                onChange={handleChange}
                // valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                className={'MenuItem'}
                disableSwap
            />
        </div>
    );
}
export { PriceSlider }