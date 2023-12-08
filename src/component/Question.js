import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import QuestionItem from './QuestionItem'
function Question() {
    const context = useContext(NoteContext)
    let { question } = context

    useEffect(() => {
        console.log(question)
    }, [])

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <table>
                {
                    question.map((q) => {

                        <QuestionItem key={q._id} />
                    })
                }
            </table>
        </div>
    )
}

export default Question