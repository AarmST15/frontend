import { useState } from 'react'
import '../styles/CommentSection.css'

export default function CommentSection() {

    const [comments, setComments] = useState([])
    const [name, setName] = useState("")
    const [body, setBody] = useState("")



    const Enter = (e) => {
        e.preventDefault()
        const url = "http://127.0.0.1:8082/cafecomment/"
        const new_comment = {
            comName: name,
            comBody: body
        }
        console.log(new_comment)
        console.log(JSON.stringify(new_comment))
        fetch(url + "formsave", {
            method: 'POST',
            body: JSON.stringify(new_comment),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.href = "/customer"
    }

    const showComment = () => {
        fetch('http://127.0.0.1:8082/cafecomment')
            .then(res => res.json())
            .then(
                (result) => {
                    setComments(result);
                }
            )
    }

    const hideComment = () => {
        setComments([])
    }

    return (
        <>
            <div className="comment-section">
                <h2>Let us hear your feedback !</h2>
                <div className='post-comment'>
                    <form action=''>
                        <label for="name">Name</label>
                        <input
                            type='text'
                            placeholder='Enter your name...'
                            required
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />

                        <label for='body'>Comment</label>
                        <textarea
                            rows='6'
                            cols='50'
                            name='commentfield'
                            placeholder="Enter your feedback..."
                            required
                            onChange={(e) => {
                                setBody(e.target.value)
                            }}>
                        </textarea>

                        <button onClick={Enter}>Enter</button>
                    </form>
                </div>
                <hr></hr>
                <div className='read-comment'>
                    <div className='show-comment'>
                        <button onClick={showComment}>Show other comments</button>
                        |
                        <button onClick={hideComment}>Hide</button>
                    </div>
                    {comments.map(comment =>
                        <>
                            <div className='comment-card'>
                                <p><b>{comment.comName}</b> : {comment.comBody}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}