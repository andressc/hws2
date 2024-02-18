import React from 'react'

import downIcon from '../../../../assets/down.svg'
import upIcon from '../../../../assets/up.svg'
import noneIcon from '../../../../assets/none.svg'
import {logDOM} from "@testing-library/react";

// добавить в проект иконки и импортировать
/*const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'*/

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(sort !== down && sort !== up) return down
    if(sort === down) return up
    if(sort === up) return down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
