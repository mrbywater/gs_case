import './PriceSlider.scss'
import {useEffect, useState} from "react";
import {Slider} from "@mui/material";
import {DefaultButton} from "../formComponents/DefaultButton";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {addFilter, rewriteFilter} from "../../redux/filters";

const confirmPrice = {
    height: "30px",
    width: '40px'
}

const PriceSlider = (props : any) => {

    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.filters.list);

    const [value, setValue] = useState<number[]>([0, 1000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
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

    const addPriceFilter = () => {

        const newPrice = `Price range ${value[0]}-${value[1]}`

        const priceFilterIndex = filters?.findIndex((item : string) => {
            if (item.slice(0, 11) === 'Price range') {
                return item
            }
        })

        if (priceFilterIndex !== -1) {
            dispatch(rewriteFilter({index: priceFilterIndex, title: newPrice}))
        } else {
            dispatch(addFilter(newPrice))
        }

    }

    useEffect(() => {
        if (!filters.includes(`Price range ${value[0]}-${value[1]}`)) {
            setValue([0, 1000])
        }
    }, [filters])

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
                    onClickFunc={addPriceFilter}
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