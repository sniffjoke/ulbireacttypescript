import React, {FC, ReactElement} from 'react';

interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}


// export default function List<T>(props: ListProps<T>) {
//     return (
//         <div>
//             {props.items.map(props.renderItem)}
//         </div>
//     )
// }

const List:<T>(props: ListProps<T>) => ReactElement = props => {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}

export default List
