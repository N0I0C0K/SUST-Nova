import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

class TopButtom extends React.Component {
    render() {
        return (
            <a href="" class="min-h-full m-4 gap-40">{this.props.name}</a>
        )
    }
}

ReactDOM.render(
    <div class="p-3 flex justify-end space-x-4 min-h-full rounded-l shadow-lg object-center 
    bg-red-100
    sticky">
        <TopButtom name="首页" />
        <TopButtom name="关于我们" />
    </div>,
    document.getElementById('buttom-page')
)