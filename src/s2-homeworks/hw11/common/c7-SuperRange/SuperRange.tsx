import React from "react"
import {Slider, SliderProps} from "@mui/material"


const styles = {
    width: "150px",
    color: "#8B8B8B",
    "& .MuiSlider-thumb": {
        color: "white",
        border: "1px solid #01CB22",
        width: "18px",
        height: "18px",
        "&:before": {
            content: '""',
            boxShadow: "none",
            display: "block",
            width: "6px",
            height: "6px",
            backgroundColor: "#01CB22",
        }
    },
    "& .MuiSlider-track": {
        color: "#01CB22",
    },
    "& .MuiSlider-rail": {
        color: "#8B8B8B",
        borderRadius: "10px",
        height: "4px",
        opacity: 1
    }
}

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={styles}
            max={100}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
