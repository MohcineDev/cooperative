import React, { useEffect } from 'react'
import './faq.css'  
import { Link } from 'react-router-dom'

function Faq() {
    //scroll bar top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    function toggleAnswer(e) {

        Array.from(document.querySelectorAll('.answer'), a => a.classList.remove('show'))
        if (e.target.parentElement.nextSibling.classList.contains('show')) {
            e.target.parentElement.nextSibling.classList.remove('show')
        }
        else {
            e.target.parentElement.nextSibling.classList.add('show')
        }
    }
    //<button onClick={toggleAnswer} className="question">
    //img absolute
    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente animi veniam neque quasi praesentium nam quo fuga ea doloremque impedit tenetur et delectus, inventore accusamus enim libero corporis? Animi!</p>
            <div className="wrap">

                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elitamet consectetur.
                    </p>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatisit amet consectetur adipisicing elit. Rem perspiciati s veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>

                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p>Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicing elit. Rem perspiciati ur adipisicing elit. </p>
                    </div>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>
                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis sit amet consectetur adipisicing elit. Rem perspiciati veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>
                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>
                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>
                <div className="container">
                    <div onClick={toggleAnswer} className="question">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis veniam eos sed exercitationem, qui unde error deleniti ea, suscipit, eveniet tenetur et! Quo totam assumenda et enim a officiis!</p>
                    </div>
                </div>
            </div>
            <div className='more'>
                <img src="imgs/svg-6.svg" alt='more question!' />
                <div>
                    <h3>Still have a question!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officia molestiae! Corrupti voluptatem possimus aspernatur dolorum, quibusdam qui dolore eligendi. Commodi tempora quidem eum. Dignissimos veritatis odit repudiandae eaque nam!
                      </p>
                    <p>fell free to Contact Us</p>
                    <Link to='/contact'><button>Contact Us</button></Link>
                </div>
            </div>

        </div >
    )
}

export default Faq
