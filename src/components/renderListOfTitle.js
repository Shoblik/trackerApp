import React from 'react';

const RenderTitleList = (props) => {
    console.log('Props in renderListOfTitle: ', props);

    const arr = props.data;
    const listItems = arr.map((item, index) => {
        return <div onClick={() => {
            if (props.clickable) {
                props.history.push(`/showDataFor/${item}`);
            }
        }} className={(props.clickable) ? 'hoverable titlePill' : 'titlePill'} key={index}>{item}</div>
    });
    console.log(arr);

    return (
        <div className="pillContainer">
            {listItems}
        </div>
    )
};

export default RenderTitleList;