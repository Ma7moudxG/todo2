import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <li class="fa-solid fa-pen-to-square"></li>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <li class="fa-regular fa-trash-can"></li>
            </button>
        </div>
    </li>
  )
}
