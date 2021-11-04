import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

class TopButtom extends React.Component {
    render() {
        return (
            <a href="" class="min-h-full mt-4 gap-40 text-lg w-20">{this.props.name}</a>
        )
    }
}

ReactDOM.render(
    <div class="pr-5 flex justify-end space-x-4 min-h-full rounded-lg shadow-lg object-center w-11/12 bg-red-100 backdrop-blur-xl backdrop-brightness-95">
        <TopButtom name="首页" />
        <TopButtom name="关于我们" />
    </div>,
    document.getElementById('buttom-page')
)