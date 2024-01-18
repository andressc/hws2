import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) onChangeOption(Number(e.currentTarget.value))
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal"
        }}>
            <span>Выберите тему</span>
            <select
                className={finalSelectClassName}
                onChange={onChangeCallback}
                {...restProps}
            >
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
